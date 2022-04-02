// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const NotebookSchema = new Schema ({
    title: String,
    colour: String,
    notes: Array,
    strap: {
        show: Boolean,
        x: Number,
        hex: String
    },
    bookmark: {
        show: Boolean,
        x: Number,
        hex: String
    },
    date: {
        type: String,
        default: Date.now()
    }
});

// Schema Model - save data to database using model instances
const NotebookModel = mongoose.model('Notebook', NotebookSchema);

// allows other files to use the model
module.exports = NotebookModel;