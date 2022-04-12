// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

// Import MongoDB Schemas
const NoteModel = require('../models/noteModel');
const UserModel = require('../models/userModel');

const router = express.Router();


// Routes

// Gets all of the user's notes
router.get("/getNotes", (req, res) => {

    const data = JSON.parse(req.query.data);
    const userID = data.userID;

    // Find in the user collection
    UserModel.find({
        _id: userID
    }).then((data) => {

        // Store the user's notes
        const userNotes = data[0].notes

        // Find in the notes collection
        NoteModel.find({ 
            _id: { 
                "$in": userNotes 
            }
        }).then((notes) => {
            
            // Return the user's notes to the client
            return res.json(notes);
            
        }).catch((err) => {
            return res.status(200).json({ 
                msg: 'Notes Not Found', 
                error: err 
            });
        });

    }).catch((err) => {
        return res.status(404).json({ 
            msg: 'ERROR in note route - /getNotes', 
            error: err
        });
    });
});

// Get a single note
router.get("/getNote", (req, res) => {

    const data = JSON.parse(req.query.data);
    // Turn the identifier string into a MongoDB identifier
    const noteID = mongoose.Types.ObjectId(data.noteID);

    // Find in the note collection using an identifier
    NoteModel.findById(noteID).then((note) => {

        // Return the note to the client
        return res.json(note);

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in note route - /getNote', 
            error: err
        });
    });

});

// Get a notebook's notes
router.get("/getNotebookNotes", (req, res) => {

    const data = JSON.parse(req.query.data);

    // Turn all note identifier strings to MongoDB identifiers
    const noteIDs = data.noteIDs.map((note) => {
        return mongoose.Types.ObjectId(note);
    });

    // Find in the note collection
    NoteModel.find({ 
        _id: { 
            "$in": noteIDs 
        }
    }).then((notes) => {

        // Send the notebook's notes to the client
        return res.json({
            msg: "Notebook's Notes Found",
            notes: notes
        });

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in note route - /getNotebookNotes', 
            error: err
        });
    });
});

// Update the note
router.put('/saveNote', (req, res) => {

    const data = req.body;
    // Turn the identifier string into a MongoDB identifier
    const noteID = mongoose.Types.ObjectId(data.noteID);
    const title = data.noteTitle;
    const bodies = data.noteBodies;
    const template = data.template;

    // Find a note in the note collection 
    // and update its values
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

        // Return the updated note to the client
        return res.json({
            msg: "Note Saved",
            data: note
        });
        
    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in note route - /saveNote', 
            error: err
        });
    });
});

// Delete the note 
router.delete('/deleteNote', (req, res) => {

    const data = req.body;
    // Turn the identifier string into a MongoDB identifier
    const noteIDString = data.note;
    const noteID = mongoose.Types.ObjectId(data.note);
    const userID = mongoose.Types.ObjectId(data.userID);

    // Find a user in the user collection
    // and update its details
    UserModel.updateOne({ 
        _id: userID 
    }, {
        $pull: {
            notes: noteIDString
        }
    }, { 
        sanitizeFilter: true 
    }).then(() => {

        // Find a note in the note collection and delete it
        NoteModel.findOneAndDelete({ 
            _id: noteID 
        }).then(() => {

            // Return an OK to the client
            return res.status(200).send();

        }).catch(() => {
            return res.status(500).json({ 
                msg: 'ERROR in note route - /deleteNote',
                error: err 
            });
        });

    }).catch((err) => {
        return res.status(500).json({
            msg: 'ERROR in note route - /deleteNote',
            error: err
        });
    });

});

module.exports = router;