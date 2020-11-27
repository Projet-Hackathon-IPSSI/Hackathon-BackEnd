const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let formSchema = new Schema({
    
    member1 : {
        type: String,
        required: "Le membre est requis"
    },
    member2 : {
        type: String
    },
    member3 : {
        type: String
    },
    member4 : {
        type: String
    },
    member5 : {
        type: String
    },     
    

    question1 : {
        type: String,
        required: "Le nom du projet est requis"
    },
    question2 : {
        type: String,
        required: "Une réponse à la question 2 est requise"
    },
    question3 : {
        type: String,
        required: "Une réponse à la question 3 est requise"
    },
    question4 : {
        type: String,
        required: "Une réponse à la question 4 est requise"
    },
    question5 : {
        type: String,
        required: "Une réponse à la question 5 est requise"

    },
    aboutTeam : {
        type: String,
        required: "L'info à propos de l'équipe est requise"
    },
    school:{
        type: String,
        required: "L'école est requise"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Form', formSchema);