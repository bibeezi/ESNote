// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

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
            return res.status(200).json({ msg: 'Notes Not Found', error: err });
        });
    })
    .catch((err) => {
        return res.status(404).json({ msg: 'ERROR in note route - /getNotes', error: err});
    });
});

router.get("/getNote", (req, res) => {

    const data = JSON.parse(req.query.data);
    const noteID = mongoose.Types.ObjectId(data.noteID);

    NoteModel.findById(noteID, (err, doc) => {
        if(err) return res.status(500).json({ msg: 'ERROR in note route - /getNote', err});

        return res.json(doc);
    });

});

router.get("/getNotebookNotes", (req, res) => {

    const data = JSON.parse(req.query.data);

    const noteIDs = data.noteIDs.map((note) => {
        return mongoose.Types.ObjectId(note);
    });

    NoteModel.find(
        { _id: { "$in": noteIDs }
    }, 
    (err, docs) => {
        if (err) return res.status(500).json({ msg: 'ERROR in note route - /getNotebookNotes', err});

        return res.json(docs);
    });
});

router.put('/saveNote', (req, res) => {

    const data = req.body;
    const noteID = mongoose.Types.ObjectId(data.noteID);
    const title = data.noteTitle;
    const bodies = data.noteBodies;
    const template = data.template;

    NoteModel.findOneAndUpdate({ 
        _id: { 
            "$in": noteID 
        }
    }, {
        $set: {
            title: title,
            body: bodies,
            template: template
        }
    }, {
        new: true
    }).then((note) => {

        return res.json({
            msg: "Note Saved",
            data: note
        });
        
    }).catch((err) => {
        if (err) return res.status(500).json({ msg: 'ERROR in note route - /saveNote', err});
    });
});

router.delete('/deleteNote', (req, res) => {

    const data = req.body;
    const noteID = mongoose.Types.ObjectId(data.note);
    const noteIDString = data.note;
    const userID = mongoose.Types.ObjectId(data.userID);

    UserModel.updateOne( 
        { _id: userID },
        {
            $pull: {
                notes: noteIDString
            }
        },
        { sanitizeFilter: true },
        (err, doc) => {
            if(err) return res.status(404).json({ msg: 'ERROR in note route - /deleteNote'});

            NoteModel.findOneAndDelete({ _id: noteID }, (err, doc) => {
                if(err) return res.status(404).json({ msg: 'ERROR in note route - /deleteNote' });
        
                return res.status(200).send();
            });
        }
    );

});

module.exports = router;