const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let adminSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    name: {
        type: String,
        required: "Le nom est requis",
    },
    password: {
        type: String,
        required: "Le mot de passe est requis"
    },
    school: {
        type: JSON,
        required: "L'école est requise",
    }
});

module.exports = mongoose.model('Admin', adminSchema);