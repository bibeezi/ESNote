// Import npm packages
const express = require('express');

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

module.exports = router;