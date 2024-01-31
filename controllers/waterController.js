const createError = require("http-errors");
const Users = require("../models/user");

exports.waterPlant = async (req, res, next) => {
    const { username, id } = req.params;

    try {
        const user = await Users.findOne({ token: username });

        if (!user) {
            return next(createError(404, "User not found"));
        }

        const plantIndex = user.userPlants.findIndex(plantRef => plantRef.refId.toString() === id);

        if (plantIndex === -1) {
            return next(createError(404, "Plant not found in user's list"));
        }

        user.userPlants[plantIndex].lastWateredDate = Date.now();

        await user.save();

        res.send("Plant watered successfully");
    } catch (err) {
        return next(createError(500, err.message));
    }
}