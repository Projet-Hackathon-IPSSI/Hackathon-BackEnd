const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    manager: {
        type: Boolean,
        required: "Le team lead doit être renseigné",
    },
    firstName: {
        type: String,
        required: "Le prénom est requis",
    },
    lastName: {
        type: String,
        required: "Le nom est requis",
    },
    phoneNumber: {
        type: String,
        required: "Le numéro de téléphone est requis",
        unique: true
    },
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    password: {
        type: String,
        required: "Le mot de passe est requis"
    }
});

module.exports = mongoose.model('User', userSchema);