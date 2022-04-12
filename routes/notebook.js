// Import npm packages
const express = require('express');
const mongoose = require('mongoose');

// Import MongoDB Schemas
const NotebookModel = require('../models/notebookModel');
const UserModel = require('../models/userModel');

const router = express.Router();


// Routes

// Gets all of the user's notebooks
router.get("/getNotebooks", (req, res) => {

    const data = JSON.parse(req.query.data);
    const userID = data.userID;

    // Find in the user collection
    UserModel.find({
        _id: userID
    })
    .then((data) => {

        NotebookModel.find({ 
            _id: { 
                "$in": data[0].notebooks 
            }
        }).then((notebooks) => {

            // Return the user's notebooks
            return res.json(notebooks);

        })
        .catch((err) => {
            return res.status(200).json({ 
                msg: 'Notebooks Not Found', 
                error: err 
            });
        });

    })
    .catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in notebook route - /getNotebooks', 
            error: err
        });
    });
});

// Get a single notebook
router.get("/getNotebook", (req, res) => {

    const data = JSON.parse(req.query.data);
    // Turn the identifier string into a MongoDB identifier
    const notebookID = mongoose.Types.ObjectId(data.notebookID);

    // Find in the notebook collection using an identifier
    NotebookModel.findById(notebookID).then((notebook) => {

        // Return the notebook to the client
        return res.json({
            msg: "Notebook Found",
            notebook: notebook
        });

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in notebook route - /getNotebook', 
            error: err
        });
    });
});

// Save a new notebook to MongoDB
router.post("/saveNotebook", (req, res) => {

    const data = req.body;
    const userID = data.userID;
    const noteIDs = data.noteIDs;
    const strap = data.strap;
    const bookmark = data.bookmark;
    const colour = data.colour;
    const title = data.title; 
    
    // Gather data for the new notebook
    // following the notebookModel
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

    // Create a new notebook with the NotebookModel
    const newNotebook = new NotebookModel(newNotebookData);

    // Save the notebook to MongoDB
    newNotebook.save((err, document) => {
        if (err) return res.status(500).json({ 
                msg: 'ERROR in notebook route - /saveNotebook',
                error: error 
            }
        );

        // Update a user
        UserModel.updateOne({ 
            _id: userID 
        }, { 
            "$push": { 
                "notebooks": document._id.toString() 
            } 
        }).exec();

        // Return the new notebook to the client
        return res.json({
            notebookID: document._id.toString(),
            msg: 'Data received in Database!'
        });
    })
});

// Delete a notebook
router.delete('/deleteNotebook', (req, res) => {

    const data = req.body;
    const notebookIDString = data.notebook;
    // Turn the identifier string into a MongoDB identifier
    const notebookID = mongoose.Types.ObjectId(data.notebook);
    const userID = mongoose.Types.ObjectId(data.userID);

    // Update a user
    UserModel.updateOne({ 
        _id: userID 
    }, {
        $pull: {
            notebooks: notebookIDString
        }
    }, { 
        sanitizeFilter: true 
    }).then(() => {

        // Find a notebook in the notebook collection and delete it
        NotebookModel.findOneAndDelete({ 
            _id: notebookID 
        }).then(() => {

            // Return an OK to the client
            return res.status(200).send();

        }).catch((err) => {
            return res.status(500).json({ 
                msg: 'ERROR in notebook route - /deleteNotebook',
                error: err
            });
        });

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in notebook route - /deleteNotebook',
            error: err
        });
    });

});

// Add a note to many notebooks
router.put('/saveNote', (req, res) => {
    
    const data = req.body.data;
    const notebookIDs = data.notebookIDs;
    const noteID = data.noteID;

    // Find many in the notebook collection and update them
    NotebookModel.updateMany({ 
        _id: { 
            "$in": notebookIDs 
        }
    }, {
        $push: {
            notes: noteID
        }
    }, {
        multi: true
    }).then((result) => {

        // Return the MongoDB results to the client
        return res.json({
            msg: "Update Complete",
            data: result
        });

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in notebook route - /saveNote',
            error: err
        });
    });

});

// Update the notebook
router.put('/updateNotebook', (req, res) => {
    
    const data = req.body.data;
    const noteIDs = data.noteIDs;
    const notebookID = data.notebookID;

    // Update a notebook
    NotebookModel.updateOne({ 
        _id: { 
            "$in": notebookID 
        }
    }, {
        $push: {
            notes: { 
                $each: noteIDs
            }
        }
    }, {
        upsert: true
    }).then((notebook) => {

        // Return the updated notebook
        return res.json(notebook);

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in notebook route - /updateNotebook',
            error: err
        });
    });

});

module.exports = router;

