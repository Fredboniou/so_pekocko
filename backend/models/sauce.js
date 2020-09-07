const mongoose = require("mongoose"); //import mongoose

const sauceSchema = mongoose.Schema({ //méthode Schema de mongoose pour créer un schéma de données qui contient les champs souhaités pour chaque sauces
    userId : { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] },
});

module.exports = mongoose.model("Sauce", sauceSchema); //export du schéma en tant que modèle mongoose pour disponibilité pour appli express

