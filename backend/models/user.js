const mongoose = require("mongoose"); //import mongoose

const uniqueValidator = require("mongoose-unique-validator"); //import du package pour une adresse mail utiliateur unique

const userSchema = mongoose.Schema({ //création du schéma user
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema); //export du schéma