const School = require('../models/schoolModel');

exports.list_all_schools = (req, res) => {
    School.find({}, (error, schools) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(schools)
        }
    })
}



exports.create_a_school =  (req, res) => {
    let new_school = new School(req.body);
    School.find({name: req.body.name ,location : req.body.location}, (error, school) => {
        if (error){
            new_school.save((error, school) => {
                if (error) {
                    res.status(500);
                    console.log(error);
                    res.json({
                        message: "Erreur serveur."
                    })
                } else {
                    res.status(201);
                    res.json(school)
                }
            })
        }else{
            res.status(409);
            console.log(error);
            res.json({
                message: "Ecole déjà existante."
            })
        }
    });
 

}


exports.get_a_school = (req, res) => {
    School.findById(req.params.school_id, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(school)
        }
    })
}

exports.update_a_school = (req, res) => {
    School.findByIdAndUpdate(req.params.school_id, req.body, {
        new: true
    }, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(school)
        }
    })
}

exports.delete_a_school = (req, res) => {
    School.findByIdAndRemove(req.params.school_id, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json({
                message: "Article supprimé !"
            })
        }
    })
}