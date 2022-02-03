// Import npm packages
const express = require('express');

// Import from directories
const UserModel = require('../models/users');

const router = express.Router();

// Routes
router.post('/saveUser', (req, res) => {

    const data = req.body;
    const newUser = new UserModel(data);

    newUser.save((error) => {
        if(error) {
            return res.status(500).json({ msg: 'ERROR in saveUser route - /saveUser'});
        }

        return res.json({
            msg: 'Data received in Database!'
        });
    });
});

module.exports = router;