const express = require("express"); //import du package express

const app = express(); //création de l'appli express

const bodyParser = require("body-parser"); //import package body-parser pour gérer la demande POST provenant de l'appli front end

const mongoose = require("mongoose"); // import du package mongoose pour les interactions avec mongoDB

const path = require("path");

const sauceRoutes = require("./routes/sauces"); //import du routeur

const userRoutes = require("./routes/user"); //import du user

const helmet = require("helmet"); //import package helmet pour définir les en-têtes http

const dotenv = require("dotenv-webpack"); //package dotenv pour sécurisation mdp admin

mongoose.connect(process.env.DB_admin, //connexion a mongoDB
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //Accès à l'API depuis n'importe quelle origine
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"); //Ajout des Headers aux requêtes API
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS"); //Envoi des requêtes avec les methodes mentionnées
    next();
});

app.use(bodyParser.json()); //méthode JSON pour transformer la requête en objet JS utilisable

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/sauces", sauceRoutes); // import du routeur de sauces.js

app.use("/api/auth", userRoutes);

app.use(helmet());

app.use((req, res) => {
    res.json({ message: "et aller, go pour le p6 !!!! Plus que 2 !!!" });
});

module.exports = app; //export appli pour y accéder dans les autres fichiers, notamment server.js 

