const mongoose = require("mongoose");


const plantsSchema =  mongoose.Schema({
    name: String,
    sciName: String,
    waterFrequency: Number,
    waterAmount: String,
    image: String
})

module.exports.Plantpal = ('Plants', plantsSchema)

