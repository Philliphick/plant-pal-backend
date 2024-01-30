const mongoose = require("mongoose");


const plantsSchema =  mongoose.Schema({
    name: String,
    sciName: String,
    waterFrequency: Number,
    waterAmount: String,
    image: String,
    owned: Boolean,
    lastWateredDate: Date
})

module.exports = mongoose.model('Plants', plantsSchema)

