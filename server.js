// Import npm packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import from directories
const regLogin = require('./routes/user');
const note = require('./routes/note');
const notebook = require('./routes/notebook');
const template = require('./routes/template');

const app = express();
const PORT = process.env.PORT || 8080;

// Checks if application is on Heroku
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
else {
    dotenv.config();
    app.use(express.static("client/public"));
}

// Connects with MongoDB Atlas
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
app.use('/user', regLogin);
app.use('/note', note);
app.use('/notebook', notebook);
app.use('/template', template);

// Check for successful server connection
app.listen(PORT, console.log(`Server is listening at port : ${PORT}`));