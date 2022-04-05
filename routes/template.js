// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

// Import from directories
const NoteTemplateModel = require('../models/noteTemplateModel');
const NoteModel = require('../models/noteModel');
const UserModel = require('../models/userModel');

const router = express.Router();

// Routes
router.post("/saveTemplate", (req, res) => {

    const data = req.body;
    const userID = data.userID;
    const newTemplateData = [];
    const noteBodies = [];

    data.sections.forEach((section) => newTemplateData.push({
        id: section.id,
        x: section.values.x,
        y: section.values.y,
        h: section.values.h,
        w: section.values.w
    }));

    const newTemplate = new NoteTemplateModel({sections: newTemplateData});

    newTemplate.save((error, doc) => {
        if(error) {
            return res.status(500).json({ msg: 'ERROR in template route - /saveTemplate'});
        }

        doc.sections.forEach((section) => noteBodies.push({
            sectionID: section._id,
            content: ""
        }));

        const newNoteData = {
            title: "",
            body: noteBodies,
            template: doc._id.toString()
        }

        const newNote = new NoteModel(newNoteData);

        newNote.save((error, doc) => {
            if(error) {
                return res.status(500).json({ msg: 'ERROR in template route - /saveTemplate'});
            }
    
            UserModel.updateOne(
                { _id: userID },
                { "$push": 
                    { "notes": doc._id.toString() } 
                }
            ).exec();

            return res.json({
                noteID: doc._id.toString(),
                msg: 'Data received in Database!'
            });
        });
    });
});

router.get("/getTemplate", (req, res) => {

    const data = JSON.parse(req.query.data);
    const templateID = mongoose.Types.ObjectId(data.templateID);

    NoteTemplateModel.findById(templateID, (err, doc) => {
        if(err) {
            return res.status(500).json({ 
                msg: 'ERROR in template route - /getTemplate', err
            });
        }

        return res.json(doc);
    });

});

router.get("/getTemplates", (req, res) => {

    const data = JSON.parse(req.query.data);

    const noteIDs = data.noteIDs.map((note) => {
        return mongoose.Types.ObjectId(note._id);
    });

    NoteModel.find({ 
        _id: { "$in": noteIDs },
    }, 'template', 
    (err, docs) => {
        if (err) return res.status(500).json({ msg: 'ERROR in template route - /getTemplates', err});

        const templateIDs = docs.map((doc) => {
            return mongoose.Types.ObjectId(doc.template);
        });

        NoteTemplateModel.find(
            { _id: { "$in": templateIDs }
        }, 
        (err, docs) => {
            if (err) return res.status(500).json({ msg: 'ERROR in template route - /getTemplates', err});
    
            return res.json(docs);
        });
    });
});

module.exports = router;