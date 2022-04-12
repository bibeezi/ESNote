// Import npm packages
const express = require('express');

// Import MongoDB Schemas
const UserModel = require('../models/userModel');

const router = express.Router();


// Routes

// Create a new user
router.post('/saveUser', (req, res) => {

    const data = req.body.data;

    // Create a new user using the data 
    // received from the registration form
    const newUser = new UserModel(data);

    // Save the user to MongoDB
    newUser.save((err) => {
        if(err) return res.status(500).json({ 
                msg: 'ERROR in user route - /saveUser',
                error: err
            }
        );

        // Return an OK to the client
        return res.status(200).send();
    });
});

// Get a user 
router.get('/getUser', (req, res) => {

    const data = JSON.parse(req.query.data);
    const username = data.username;
    const password = data.password;

    // Find in the user collection
    UserModel.find({
        username: { 
            // Searches for username case insesitive
            $regex: new RegExp(username, "i") 
        },
        password: password
    }).then((user) => {
        
        // User is found
        if(user.length) {

            // Get user details
            const userData = {
                userID: user[0].id,
                username: user[0].username
            }

            // Return the user details to the client
            return res.json(userData);

        } else {
            // Return an error message to the client
            return res.status(200).json({ 
                msg: 'User Not Found' 
            });
        }

    }).catch((err) => {
        return res.status(500).json({ 
            msg: 'ERROR in user route - /getUser', 
            error: err
        });
    });
});

// Checks for existing username
router.get('/checkUsername', (req, res) => {

    const data = JSON.parse(req.query.data);
    const username = data.username;

    // Find in the user collection
    UserModel.find({
        username: { 
            // Searches for username case insesitive
            $regex: new RegExp(username, "i") 
        },
    }).then((user) => {

        // User is found
        if(user.length) {
            // Return username taken message to client
            return res.status(200).json({ msg: "Username Taken" });
        } else {
            // Return username to client
            return res.json(data[0].username);
        }

    }).catch((err) => {
        return res.status(200).json({ 
            msg: 'ERROR in user route - /checkUsername', 
            error: err
        });
    });
});


module.exports = router;