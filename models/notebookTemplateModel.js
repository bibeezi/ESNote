// Import npm packages
const mongoose = require('mongoose');

// MongoDB Schema - how data is going to be
const Schema = mongoose.Schema;
const NotebookTemplateSchema = new Schema ({
    title: String,
    notes: [],
    strapValues: {
        strap: Boolean,
        "strap-x": Number,
        "strap-hex": String
    },
    bookmarkValues: {
        bookmark: Booleam,
        "bookmark-x": Number,
        "bookmark-hex": String
    }
});

// Schema Model - save data to database using model instances
const NotebookTemplateModel = mongoose.model('Notebooktemplate', NotebookTemplateSchema);

// allows other files to use the model
module.exports = NotebookTemplateModel;