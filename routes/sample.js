// Import npm packages
const express = require('express');

// Import from directories
const NoteModel = require('../models/notes');

const router = express.Router();

// Routes
router.get("/getPages", (req, res) => {
    NoteModel.find({})
    .then((data) => {
        console.log(data);
        res.json(data);
    })
    .catch((error) => {
        console.log(error);
    });
});

router.post('/savePage', (req, res) => {

    const data = req.body;
    const newNote = new NoteModel(data);

    newNote.save((error) => {
        if(error) {
            res.status(500).json({ msg: 'ERROR OCCURRED IN newNote.save()'});
            return;
        }

        // sends data to MongoDB Database
        return res.json({
            msg: 'Data received in Database!'
        });
    });
});

module.exports = router;