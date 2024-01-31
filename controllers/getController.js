const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");
const Users = require("../models/user");

exports.getPlants = async (req, res, next) => {  
    try {
        const { username } = req.params; // Assuming you're passing username as a route parameter
        console.log(req.params.username);

        // Find the user by username and populate the userPlants field
        const user = await Users.findOne({ token: username }).populate("userPlants.refId");

        if (!user) {
            return next(createError(404, "User not found"));
        }

        const plants = user.userPlants.map(plantRef => plantRef.refId);

        for (i = 0; i < plants.length; i++) {
            plants[i].lastWateredDate = user.userPlants[i].lastWateredDate
        }
        res.send(plants);
    } catch (err) {
        return next(createError(500, err.message));
    }
}