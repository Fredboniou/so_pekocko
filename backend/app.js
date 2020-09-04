const express = require("express"); //import du package express

const app = express(); //création de l'appli express

const bodyParser = require("body-parser"); //Import package body-parser pour gérer la demande POST provenant de l'appli front end

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Accès à l'API depuis n'importe quelle origine
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"); //Ajout des Headers aux requêtes API
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS"); //Envoi des requêtes avec les methodes mentionnées
    next();
});

app.use(bodyParser.json()); //méthode JSON pour transformer la requête en objet JS utilisable

app.use((req, res) => {
    res.json({ message: "et aller, go pour le p6 !!!!" });
});

module.exports = app; //export appli pour y accéder dans les autres fichiers, notamment server.js 

