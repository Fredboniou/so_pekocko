const express = require("express"); //import package express

const router = express.Router(); //création d'un routeur express

const sauceCtrl = require("../controllers/sauces"); //import sauceCtrl

router.get("/", sauceCtrl.getAllSauces); //afficher toutes les sauces

router.get("/:id", sauceCtrl.getOneSauce); //affichage d'une sauce en fonction de l'id

router.post("/", sauceCtrl.createSauce); //création et enregistrement d'une sauce

router.put("/:id", sauceCtrl.modifySauce); // mise à jour/modification de la sauce avec l'id

router.delete("/:id", sauceCtrl.deleteSauce); //suppression d'une sauce

module.exports = router;

