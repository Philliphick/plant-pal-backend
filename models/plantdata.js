const mongoose = require("mongoose");


const plantDataSchema =  mongoose.Schema({
    name: String,
    sciName: String,
    waterFrequency: Number,
    waterAmount: String,
    image: String
})

module.exports.Plantdata = ('PlantData', plantDataSchema)

