// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const NoteSchema = new Schema ({
    title: String,
    body: [{
        sectionID: String,
        content: String
    }],
    template: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Schema Model - save data to database using model instances
const NoteModel = mongoose.model('Note', NoteSchema);

// allows other files to use the model
module.exports = NoteModel;