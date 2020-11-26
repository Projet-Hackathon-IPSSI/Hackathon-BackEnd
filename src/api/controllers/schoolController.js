const School = require('../models/schoolModel');


function fc_list_all_schools (req, res) {
    return School.find({})
    .then((schools) => {return schools})
    .catch((error) => res.status(500))
    
}


exports.list_all_schools = async (req, res) => {
    schools = await fc_list_all_schools(req)
    if (schools == 'error') {
        res.status(500);
        console.log(error);
        res.json({
            message: "Erreur serveur."
        })
    } else {
        res.status(200);
        res.json(schools)
    }
    
}



exports.create_a_school =  (req, res) => {
    let new_school = new School(req.body);
    School.find({name: new_school.name ,location : new_school.location}, (error, school) => {
        if (school.length < 1){
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
        } else if(school){
            res.status(200);
            res.json(school)
        } else {
            res.status(404);
            console.log(error);
            res.json({
                message: "Ecole inexistante."
            })
        }
    })
}

exports.update_a_school = (req, res) => {
    School.find({name: req.body.name ,location : req.body.location}, (error, school) => {
        if (school.length < 1){
            School.findByIdAndUpdate(req.params.school_id, req.body, {
                new: true
            }, (error, school) => {
                if (error) {
                    res.status(500);
                    console.log(error);
                    res.json({
                        message: "Erreur serveur."
                    })
                } else if (school) {
                    res.status(200);
                    res.json(school)
                }else {
                    res.status(404);
                    console.log(error);
                    res.json({
                        message: "Ecole inexistante."
                    })
                }
            })
        }else {
            res.status(409);
                console.log(error);
                res.json({
                    message: "Ecole déjà existante."
                })
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
        } else if (school){
            res.status(200);
            res.json({
                message: "Ecole supprimée !"
            })
        }else{
            res.status(404);
            console.log(error);
            res.json({
                message: "Ecole inexistante."
            })
        }
    })
}