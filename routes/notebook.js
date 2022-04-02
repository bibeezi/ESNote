// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

// Import from directories
const NotebookModel = require('../models/notebookModel');
const UserModel = require('../models/userModel');

const router = express.Router();

// Routes
router.get("/getNotebooks", (req, res) => {

    const data = JSON.parse(req.query.data);
    const userID = data.userID;

    UserModel.find({
        _id: userID
    })
    .then((data) => {
        NotebookModel.find(
            { _id: { "$in": data[0].notebooks }
        }).then((notebooks) => {
            return res.json(notebooks);
        })
        .catch((err) => {
            return res.status(200).json({ msg: 'Notebooks Not Found', error: err });
        });
    })
    .catch((err) => {
        return res.status(404).json({ msg: 'ERROR in notebook route - /getNotebooks', error: err});
    });
});

router.get("/getNotebook", (req, res) => {

    const data = JSON.parse(req.query.data);
    const notebookID = mongoose.Types.ObjectId(data.notebookID);

    NotebookModel.findById(notebookID, (err, doc) => {
        if(err) {
            return res.status(500).json({ msg: 'ERROR in notebook route - /getNotebook', err});
        }

        return res.json(doc);
    });
});

router.post("/saveNotebook", (req, res) => {

    const data = req.body;
    const userID = data.userID;
    const noteIDs = data.noteIDs;
    const strapValues = data.strap;
    const bookmarkValues = data.bookmark;
    const colour = data.colour;
    const title = data.title; 
    
    const newNotebookData = {
        title: title,
        colour: colour,
        notes: noteIDs,
        strapValues: {
            strap: strapValues.show,
            strapX: strapValues.strapX,
            strapHex: strapValues.strapHex
        },
        bookmarkValues: {
            bookmark: bookmarkValues.show,
            bookmarkX: bookmarkValues.bookmarkX,
            bookmarkHex: bookmarkValues.bookmarkHex
        }
    }

    const newNotebook = new NotebookModel(newNotebookData);

    newNotebook.save((error, document) => {
        if (error) return res.status(500).json({msg: 'ERROR in notebook route - /saveNotebook'});

        UserModel.updateOne(
            { _id: userID },
            { "$push": 
                { "notebooks": document._id.toString() } 
            }
        ).exec();

        return res.json({
            notebookID: document._id.toString(),
            msg: 'Data received in Database!'
        });
    })
});

module.exports = router;

