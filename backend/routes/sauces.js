const express = require("express"); //import package express

const router = express.Router(); //création d'un routeur express

const Sauce = require("../models/sauces");

router.get("/", (req, res, next) => { //afficher toutes les sauces
    Sauce.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
});

router.get("/:id", (req, res, next) => { //affichage d'une sauce en fonction de l'id
    Sauce.findOne({_id: req.params.id})
        .then((sauce) => res.status(200).json(sauce))
        .catch(error => res.status(400).json({error}));
});

router.post("/", (req, res, next) => { //création et enregistrement d'une sauce
    const sauce = new Sauce({
        ...req.body
    });
    sauce.save()
        .then(() => res.status(200).json({message: "Sauce créée !"}))
        .catch(error => res.status(400).json({error}));
});

module.exports = router;

