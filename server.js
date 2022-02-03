// Import npm packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

// Import from directories
const sample = require('./routes/sample');
const regLogin = require('./routes/saveUser');

const app = express();
const PORT = process.env.PORT || 8080;

// Checks if application is on Heroku
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
else {
    require('dotenv').config();
    app.use(express.static("client/public"));
}

mongoose.connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
   console.log('Mongoose is connected!');
});

// JSON and URLencoded parser
app.use(express.json());
//  extended is false for parsing shallower objects
app.use(express.urlencoded({extended: false}));

// HTTP request logger
app.use(morgan('dev'));

// routes
app.use('/', sample);
app.use('/user', regLogin);

// Check for successful server connection
app.listen(PORT, console.log(`Server is listening at port : ${PORT}`));