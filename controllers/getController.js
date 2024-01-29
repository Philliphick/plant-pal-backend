const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");

exports.getPlants = async (req, res, next) => {
    try {
        const plants = await Plants.find()
        res.send(plants)
    } catch (err) {
        return next(createError(500, err.message))
    }
}

