const express = require("express"); //import package express

const router = express.Router(); //création d'un routeur express

const Sauce = require("../models/sauce");

router.get("/", (req, res, next) => { //afficher toutes les sauces
    Sauce.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
});

router.get("/:id", (req, res, next) => { //affichage d'une sauce en fonction de l'id
    Sauce.findOne({_id: req.params.id})
        .then((sauce) => res.status(200).json(sauce))
        .catch(error => res.status(404).json({error})); //erreur 404 pour un objet introuvable
});

router.post("/", (req, res, next) => { //création et enregistrement d'une sauce
    const sauce = new Sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res.status(201).json({message: "Sauce créée !"})) //201 pour une création réussie
        .catch(error => res.status(400).json({error}));
});

router.put("/:id", (req, res, next) => { // mise à jour/modification de la sauce avec l'id
    Sauce.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: "Sauce modifiée !"}))
        .catch(error => res.status(400).json({error}));
});

router.delete("/:id", (req, res, next) => { //suppression d'une sauce
    Sauce.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: "Sauce supprimée !"}))
        .catch(error => res.status(400).json({error}));
});

module.exports = router;

