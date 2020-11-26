const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

const regex = /^[\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[a-zA-Z]{2,4}$/;

exports.create_an_admin = (req, res) => {
    let new_admin = new Admin(req.body);
    if(req.body.email.match(regex)){
        new_admin.save((error, admin) => {
            if (error) {
                res.status(500);
                console.log(error);
                res.json({
                    message: "Erreur serveur."
                })
            }   
            else {
                res.status(201);
                res.json({
                    message: `Utilisateur crée : ${admin.email}`
                })
            }
        })
    }
    else{
        res.status(422);
        res.json({
            message: "Invalide email error."
        })
    }
}

exports.login_an_admin = (req, res) => {
    Admin.findOne({
        email: req.body.email
    }, (error, admin) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            if (admin.password === req.body.password) {
                jwt.sign({
                    email: admin.email,
                }, process.env.JWT_SECRET, {
                    expiresIn: '30 days'
                }, (error, token) => {
                    if (error) {
                        res.status(400);
                        console.log(error);
                        res.json({
                            message: "Mot de passe ou email erroné."
                        })
                    } else {
                        res.json({
                            token
                        })
                    }
                })
            } else {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Mot de passe ou email erroné."
                })
            }
        }
    })
}