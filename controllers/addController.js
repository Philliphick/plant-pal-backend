const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");
const Users = require("../models/user")
const objId = require('mongodb').ObjectId;

exports.addPlant = async (req, res, next) => {
    try {
        const plant = await Plants.findOne({ name: req.body.name });
        if (!plant) {
            return next(createError(404, "No plant found in database with that name"));
        }
        const newPlantReference = {
            refId: plant._id,
            lastWateredDate: null // Set to appropriate initial value
        };
        const { username } = req.params;
        await Users.findOneAndUpdate(
            { token: username }, // Modify to target the correct user
            { $push: { userPlants: newPlantReference } },
            { new: true }
        );
        res.send("Plant added successfully");
    } catch (err) {
        return next(createError(500, err.message));
    }
}