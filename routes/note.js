// Import npm packages
const express = require('express');

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
        NoteModel.find(
            { _id: { "$in": data[0].notes }
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

router.post('/saveNote', (req, res) => {

    const data = req.body;
    const userID = data.userID;
    const newNote = new NoteModel(data);
    
    newNote.save((error, doc) => {
        if(error) {
            return res.status(500).json({ msg: 'ERROR in note route - /saveNote'});
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

module.exports = router;