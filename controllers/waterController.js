const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");

exports.waterPlant = async (req, res, next) => {
    // Find plant by ID and update "lastWateredDate" value
    const plantIdToWater = req.params.id;
    try {
        await Plants.findByIdAndUpdate(plantIdToWater, {
            lastWateredDate: Date.now()
        })
        res.send("watered")
    } catch (err) {
        return next(createError(500, err.message));
    }
    // In frontend we will count days since last watered when user accesses
}