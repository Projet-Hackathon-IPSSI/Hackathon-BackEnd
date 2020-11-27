const Form = require('../models/formModel');
const User = require('../models/userModel');

exports.list_all_forms = (req, res) => {
    Form.find({}, (error, forms) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(forms)
        }
    })
}


function isAUser (email){
    return User.findOne({email: email})
    .then((user) => {if(user){return true}else { return false}})
    .catch((error) => {return false})
}

function isRegistered1(email){
    return Form.findOne({member1: email},{member2: email},{member3: email})
    .then((form) => {if(form){return true}else { return false}})
    .catch((error) => {return false})
}
function isRegistered2(email){
    return Form.findOne({member4: email},{member5: email})
    .then((form) => {if(form){return true}else { return false}})
    .catch((error) => {return false})
}

function isManager(email,res){
    return User.findOne({email: email})
    .then((user) => {if(user){return user.manager}else { return false}})
    .catch((error) => {
        res.status(404);
        console.log(error);
        res.json({
            message: "Le manager n'est pas inscrit."
        })
    })
}

exports.create_a_form = async (req, res) => {
//TODO verifié que les personnes sont inscrites qu'une fois
    let new_form = new Form(req.body);
    if(req.body.member1){
        const memberDiff = req.body.member1 !== req.body.member2 && req.body.member1 !== req.body.member3 && req.body.member1 !== req.body.member4 && 
        req.body.member1 !== req.body.member5 && (!req.body.member2 || req.body.member2 !== req.body.member3 && req.body.member2 !== req.body.member4   && 
            req.body.member2 !== req.body.member5 && (!req.body.member3 || req.body.member3 !== req.body.member4 && req.body.member3 !== req.body.member5 && 
            (!req.body.member4 || req.body.member4 !== req.body.member5  )))
        

        const membre = await isAUser(req.body.member1) &&  (!req.body.member2 || await isAUser(req.body.member2)) && 
            (!req.body.member3 || await isAUser(req.body.member3)) && (!req.body.member4 || await isAUser(req.body.member4)) &&
            (!req.body.member5 || await isAUser(req.body.member5))
        
        const registered = await isRegistered1(req.body.member1) ||  (req.body.member2 && await isRegistered1(req.body.member2)) || 
            (req.body.member3 && await isRegistered1(req.body.member3)) || (req.body.member4 && await isRegistered1(req.body.member4)) ||
            (req.body.member5 && await isRegistered1(req.body.member5)) || await isRegistered2(req.body.member1) ||  (req.body.member2 && 
            await isRegistered2(req.body.member2)) || (req.body.member3 && await isRegistered2(req.body.member3)) || (req.body.member4 && 
            await isRegistered2(req.body.member4)) ||(req.body.member5 && await isRegistered2(req.body.member5))
        
        
        const manager = await isManager(req.body.member1, res);

        if (!memberDiff) {
            res.status(409);
            res.json({
                message: "Un membre ne peut pas être inscrit deux fois."
            })
        }
        else if(! membre){
            res.status(404);
            res.json({
                message: "Un des membres n'est pas inscrit."
            })
        }else if(registered){
            res.status(409);
            res.json({
                message: "Un des membres est déjà inscrit à un autre projet."
            })
        } else if (!manager){
            res.status(409);
            res.json({
                message: "Le membre 1 n'a pas le statut de manager."
            })
        }
        else {
            new_form.save((error, form) => {
                if (error) {
                    res.status(500);
                    console.log(error);
                    res.json({
                        message: "Erreur serveur."
                    })
                } else {
                    res.status(201);
                    res.json(form)
                }
            })
        }
    }else {
        res.status(400);
        res.json({
            message: "Il faut au moins un membre dans l'équipe."
        })
    }
    

}


exports.get_a_form = (req, res) => {
    console.log(req.params.form_id);
    Form.findById(req.params.form_id, (error, form) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else if (form){
            res.status(200);
            res.json(form);
        } else {
            res.status(400);
            console.log(error);
            res.json({
                message: "Formulaire inexistant."
            });
        }
    })
}

exports.update_a_form = (req, res) => {
    Form.findByIdAndUpdate(req.params.form_id, req.body, {
        new: true
    }, (error, form) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else if (form){
            res.status(200);
            res.json(form);
        } else {
            res.status(400);
            console.log(error);
            res.json({
                message: "Formulaire inexistant."
            });
        }
    })
}

exports.delete_a_form = (req, res) => {
    Form.findByIdAndRemove(req.params.form_id, (error, form) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        }else if (form){
            res.status(200);
            res.json(form);
        } else {
            res.status(400);
            console.log(error);
            res.json({
                message: "Formulaire inexistant."
            });
        }
    })
}