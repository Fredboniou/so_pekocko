const express = require("express"); //import du package express

const app = express(); //création de l'appli express

app.use((req, res) => {
    res.json({ message: "et aller, go pour le p6 !!!!" });
});

module.exports = app; //export appli pour y accéder dans les autres fichiers, notamment server.js 

