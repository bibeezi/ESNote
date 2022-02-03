
const express = require('express');

const UserModel = require('../models/users');

const router = express.Router();

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

router.get('/getUser', (req, res) => {

    const data = JSON.parse(req.query.data);

    UserModel.find({
        username: data.username,
        password: data.password
    })
    .then((data) => {
        if(data.length) {
            return res.json(data);
        } else {
            return res.status(404).json({msg: 'ERROR in user route - /getUser'});
        }
    })
    .catch((err) => {
        console.log("ERROR in user - /getUser", err);
    });
});

module.exports = router;