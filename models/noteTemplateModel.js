// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const NoteTemplateSchema = new Schema ({
    sections: [{
        id: String,
        x: Number,
        y: Number,
        h: Number,
        w: Number
    }]
});

// Schema Model - save data to database using model instances
const NoteTemplateModel = mongoose.model('NoteTemplate', NoteTemplateSchema);

// allows other files to use the model
module.exports = NoteTemplateModel;