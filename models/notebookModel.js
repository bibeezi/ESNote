// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const NoteBookSchema = new Schema ({
    title: String,
    notes: Array
});

// Schema Model - save data to database using model instances
const NotebookModel = mongoose.model('Notebook', NoteBookSchema);

// allows other files to use the model
module.exports = NotebookModel;