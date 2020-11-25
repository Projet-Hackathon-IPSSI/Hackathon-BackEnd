const User = require('../models/userModel');

const jwt = require('jsonwebtoken');


const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


exports.create_an_user = (req, res) => {
    let new_user = new User(req.body);

    new_user.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else if(req.body.email.match(regex)){
            res.status(201);
            res.json({
                message: `Utilisateur crée : ${user.email}`
            })
        }else if(!req.body.email.match(regex)){
            res.status(422);
            res.json({
                message: `Email invalide`
            })
    }})
}

exports.login_an_user = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            if (user.password === req.body.password) {
                jwt.sign({
                    email: user.email,
                    role: "user"
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