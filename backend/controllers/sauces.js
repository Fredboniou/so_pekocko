const Sauce = require("../models/sauce");
const fs = require("fs");

exports.getAllSauces = (req, res, next) => { //afficher toutes les sauces
    Sauce.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
};

exports.getOneSauce = (req, res, next) => { //affichage d'une sauce en fonction de l'id
Sauce.findOne({_id: req.params.id})
    .then((sauce) => res.status(200).json(sauce))
    .catch(error => res.status(404).json({error})); //erreur 404 pour un objet introuvable
};

exports.createSauce = (req, res, next) => { //création et enregistrement d'une sauce
const sauceObject = JSON.parse(req.body.sauce);
const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get(host)}/images/${req.file.filename}`
});
sauce.save()
    .then(() => res.status(201).json({message: "Sauce créée !"})) //201 pour une création réussie
    .catch(error => res.status(400).json({error}));
};

exports.modifySauce = (req, res, next) => { // mise à jour/modification de la sauce avec l'id
const sauceObject = req.file ?
{
    ...JSON.parse(req.body.sauce),
    imageUrl: `${req.protocol}://${req.get(host)}/images/${req.file.filename}`
 } : { ...req.body };
Sauce.updateOne({_id: req.params.id}, {...sauceObject, _id: req.params.id})
    .then(() => res.status(200).json({message: "Sauce modifiée !"}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteSauce = (req, res, next) => { //suppression d'une sauce
Sauce.findOne({_id: req.params.id})
    .then(sauce => {
        const filename = sauce.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
            Sauce.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({message: "Sauce supprimée !"}))
                .catch(error => res.status(400).json({error}));
        });
    })
    .catch(error => res.status(500).json({error}));

};

