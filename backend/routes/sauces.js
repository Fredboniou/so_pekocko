const express = require("express"); //import package express

const router = express.Router(); //création d'un routeur express

const Sauce = require("../models/sauces");

router.get("/", (req, res, next) => {
    Sauce.find()
        .then((sauces) => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}));
});

module.exports = router;

