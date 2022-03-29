// Import npm packages
const express = require('express');
var mongoose = require('mongoose');

// Import from directories
const NoteModel = require('../models/noteModel');
const UserModel = require('../models/userModel');

const router = express.Router();

// Routes
router.get("/getNotes", (req, res) => {

    const data = JSON.parse(req.query.data);
    const userID = data.userID;

    UserModel.find({
        _id: userID
    })
    .then((data) => {
        const userNotes = data[0].notes

        NoteModel.find(
            { _id: { "$in": userNotes }
        }).then((notes) => {
            return res.json(notes);
        })
        .catch((err) => {
            return res.status(404).json({ msg: 'ERROR in note route - /getNotes', err });
        });
    })
    .catch((err) => {
        return res.status(404).json({ msg: 'ERROR in note route - /getNotes', err});
    });
});

router.put('/saveNote', (req, res) => {

    const data = req.body;
    const noteID = mongoose.Types.ObjectId(data.noteID);
    const title = data.noteTitle;
    const bodies = data.noteBodies;
    const template = data.template;

    NoteModel.findOneAndUpdate(
        { _id: { "$in": noteID }}, 
        {
            $set: {
                title: title,
                body: bodies,
                template: template
            }
        },
        {
            new: true
        },
        function(err, doc) {
            if(err) {
                return res.status(404).json({ msg: 'ERROR in note route - /saveNote'});
            }

            return res.json(doc);
        }
    );
});

router.get("/getNote", (req, res) => {

    const data = JSON.parse(req.query.data);
    const noteID = mongoose.Types.ObjectId(data.noteID);

    NoteModel.findById(noteID, (err, doc) => {
        if(err) {
            return res.status(500).json({ msg: 'ERROR in note route - /getNote', err});
        }

        return res.json(doc);
    });

});

module.exports = router;