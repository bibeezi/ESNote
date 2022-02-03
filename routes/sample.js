// Import npm packages
const express = require('express');

// Import from directories
const NoteModel = require('../models/notes');

const router = express.Router();

// Routes
router.get("/getPages", (req, res) => {

    NoteModel.find({})
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        console.log("ERROR in sample - /getPages", err);
    });

});

router.post('/savePage', (req, res) => {

    const data = req.body;
    const newNote = new NoteModel(data);

    newNote.save((error) => {
        if(error) {
            return res.status(500).json({ msg: 'ERROR in sample route - /savePage'});
        }

        return res.json({
            msg: 'Data received in Database!'
        });
    });
});

module.exports = router;