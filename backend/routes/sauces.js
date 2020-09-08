const express = require("express"); //import package express

const router = express.Router(); //création d'un routeur express

const sauceCtrl = require("../controllers/sauces"); //import sauceCtrl

const auth = require("../middleware/auth"); // import middleware authentification

router.get("/", auth, sauceCtrl.getAllSauces); //afficher toutes les sauces

router.get("/:id", auth, sauceCtrl.getOneSauce); //affichage d'une sauce en fonction de l'id

router.post("/", auth, sauceCtrl.createSauce); //création et enregistrement d'une sauce

router.put("/:id", auth, sauceCtrl.modifySauce); // mise à jour/modification de la sauce avec l'id

router.delete("/:id", auth, sauceCtrl.deleteSauce); //suppression d'une sauce

module.exports = router;

