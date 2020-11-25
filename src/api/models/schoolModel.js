const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    name: {
        type: String,
        required: "Le nom est requis"
    },
    location: {
        type: String,
        required: "L'emplacement est requis"
    }
});

module.exports = mongoose.model('School', schoolSchema);