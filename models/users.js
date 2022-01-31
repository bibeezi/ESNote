// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const UserSchema = new Schema ({
    username: String,
    email: String,
    password: String
});

// Schema Model - save data to database using model instances
const UserModel = mongoose.model('User', UserSchema);

// allows other files to use the model
module.exports = UserModel;