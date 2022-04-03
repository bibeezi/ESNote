
const express = require('express');

const UserModel = require('../models/userModel');

const router = express.Router();

router.post('/saveUser', (req, res) => {

    const data = req.body;
    const newUser = new UserModel(data);

    newUser.save((error) => {
        if(error) {
            return res.status(500).json({ msg: 'ERROR in user route - /saveUser'});
        }

        return res.json({
            msg: 'Data received in Database!'
        });
    });
});

router.get('/getUser', (req, res) => {

    const data = JSON.parse(req.query.data);
    const username = data.username;
    const password = data.password;

    UserModel.find({
        username: { $regex: new RegExp(username, "i") },
        password: password
    })
    .then((data) => {
        if(data.length) {
            const userData = {
                userID: data[0].id,
                username: data[0].username
            }
            return res.json(userData);
        } else {
            return res.status(200).json({msg: 'User Not Found'});
        }
    })
    .catch((err) => {
        return res.status(500).json({ msg: 'ERROR in user route - /getUser', err});
    });
});

router.get('/checkUsername', (req, res) => {

    const data = JSON.parse(req.query.data);
    const username = data.username;

    UserModel.find({
        username: { $regex: new RegExp(username, "i") },
    })
    .then((data) => {
        if(data.length) {
            return res.status(200).json({msg: "Username Taken"});
        } else {
            return res.json(data[0].username);
        }
    })
    .catch((err) => {
        return res.status(200).json({ msg: 'ERROR in user route - /checkUsername', err});
    });
});


module.exports = router;