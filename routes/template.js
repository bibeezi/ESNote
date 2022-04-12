// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

// Import MongoDB Schemas
const NoteTemplateModel = require('../models/noteTemplateModel');
const NoteModel = require('../models/noteModel');
const UserModel = require('../models/userModel');

const router = express.Router();

// Routes

// Saves new note template
router.post("/saveTemplate", (req, res) => {

    const data = req.body.data;
    const userID = data.userID;
    const newTemplateData = [];
    const noteBodies = [];

    // Stores each section's values into newTemplateData
    data.sections.forEach((section) => newTemplateData.push({
        id: section.id,
        x: section.values.x,
        y: section.values.y,
        h: section.values.h,
        w: section.values.w
    }));

    // Create a new template with the noteTemplateModel
    const newTemplate = new NoteTemplateModel({sections: newTemplateData});

    // Save the template to MongoDB
    newTemplate.save((err, template) => {
        if(err) return res.status(500).json({ 
            msg: 'ERROR in template route - /saveTemplate',
            error: err
        });

        // Creates new note values per section in the template
        template.sections.forEach(section => noteBodies.push({
            sectionID: section._id,
            content: ""
        }));

        // Gather data for the new note
        // following the noteModel
        const newNoteData = {
            title: "",
            body: noteBodies,
            template: template._id.toString()
        }

        // Create a new note with the NoteModel
        const newNote = new NoteModel(newNoteData);

        // Save a new note to MongoDB
        newNote.save((err, note) => {
            if(err) return res.status(500).json({ 
                msg: 'ERROR in template route - /saveTemplate',
                error: err
            });
    
            // Update a user
            UserModel.updateOne({ 
                _id: userID 
            },{ 
                "$push": { 
                    "notes": note._id.toString() 
                } 
            }).exec();

            return res.json({
                noteID: note._id.toString(),
                msg: 'Note and Template Saved'
            });
        });
    });
});

// Get a single template
router.get("/getTemplate", (req, res) => {

    const data = JSON.parse(req.query.data);
    // Turn the identifier string into a MongoDB identifier
    const templateID = mongoose.Types.ObjectId(data.templateID);

    // Find in the template collection using an identifier
    NoteTemplateModel.findById(templateID, (err, template) => {
        if(err) {
            return res.status(500).json({ 
                msg: 'ERROR in template route - /getTemplate', 
                error: err
            });
        }

        // Return the template to the client
        return res.json(template);
    });

});

// Get notes' templates
router.get("/getTemplates", (req, res) => {

    const data = JSON.parse(req.query.data);

    // Turn all note identifier strings to MongoDB identifiers
    const noteIDs = data.notes.map((note) => {
        return mongoose.Types.ObjectId(note._id);
    });

    // Find in the note collection
    NoteModel.find({ 
        _id: { 
            "$in": noteIDs 
        }
    }).then(notes => {

        // Turn all template identifier strings to MongoDB identifiers
        const templateIDs = notes.map(note => {
            return mongoose.Types.ObjectId(note.template);
        });
        
        // Find in the template collection
        NoteTemplateModel.find({ 
            _id: { 
                "$in": templateIDs 
            }
        }).then(templates => {

            // Return the templates to the client
            return res.json(templates);

        }).catch(err => {
            return res.status(200).json({ 
                msg: 'Templates Not Found', 
                error: err
            });
        });
    }).catch(err => {
        return res.status(500).json({ 
            msg: 'ERROR in template route - /getTemplates', 
            error: err
        });
    });
});

module.exports = router;