// Import npm packages
const express = require('express');

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

    data.sections.forEach((section) => newTemplateData.push({
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

        const newNoteData = {
            title: "",
            body: "",
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
                msg: 'Data received in Database!'
            });
        });
    });
});

module.exports = router;