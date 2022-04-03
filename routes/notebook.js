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
    const strap = data.strap;
    const bookmark = data.bookmark;
    const colour = data.colour;
    const title = data.title; 
    
    const newNotebookData = {
        title: title,
        colour: colour,
        notes: noteIDs,
        strap: {
            show: strap.show,
            x: strap.x,
            hex: strap.hex
        },
        bookmark: {
            show: bookmark.show,
            x: bookmark.x,
            hex: bookmark.hex
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

router.delete('/deleteNotebook', (req, res) => {

    const data = req.body;
    const notebookID = mongoose.Types.ObjectId(data.notebook);
    const notebookIDString = data.notebook;
    const userID = mongoose.Types.ObjectId(data.userID);

    UserModel.updateOne( 
        { _id: userID },
        {
            $pull: {
                notebooks: notebookIDString
            }
        },
        { sanitizeFilter: true },
        (err, doc) => {
            if(err) return res.status(404).json({ msg: 'ERROR in notebook route - /deleteNotebook'});

            NotebookModel.findOneAndDelete({ _id: notebookID }, (err, doc) => {
                if(err) return res.status(404).json({ msg: 'ERROR in notebook route - /deleteNotebook' });
        
                return res.status(200).send();
            });
        }
    );

});

router.put('/saveNote', (req, res) => {
    
    const data = req.body.data;
    const notebookIDs = data.notebookIDs;
    const noteID = data.noteID;

    NotebookModel.updateMany(
        { _id: { "$in": notebookIDs }}, 
        {
            $push: {
                notes: noteID
            }
        }, {
            multi: true
        },
        (err, doc) => {
            if(err) return res.status(404).json({ msg: 'ERROR in notebook route - /saveNote'});

            return res.json(doc);
        }
    );
});

module.exports = router;

