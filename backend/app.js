const express = require("express"); //import du package express

const app = express(); //création de l'appli express

const bodyParser = require("body-parser"); //import package body-parser pour gérer la demande POST provenant de l'appli front end

const mongoose = require("mongoose"); // import du package mongoose pour les interactions avec mongoDB

const sauceRoutes = require("./routes/sauces"); //import du routeur

const userRoutes = require("./routes/user"); //import du user

mongoose.connect('mongodb+srv://FredBoniou:Myriam26121983.@cluster0.vqduv.mongodb.net/test?retryWrites=true&w=majority', //connexion a mongoDB
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

app.use("/api/sauces", sauceRoutes); // import du routeur de sauces.js

app.use("/api/auth", userRoutes);

app.use((req, res) => {
    res.json({ message: "et aller, go pour le p6 !!!! on lache rien !!!" });
});

module.exports = app; //export appli pour y accéder dans les autres fichiers, notamment server.js 

