const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");
//const PlantData = require("../models/plantdata");

/*
1. Set plant name to the name from the request (req.body.name)
2. Get rest of plant data from "all plants" database (need a getData function?)
3. Set rest of req.body to correspond to plant data
4. Send whole of req.body to "current plants" database
*/

const getData = async (req, res, next) => {
    const plantName = req.params.name;
    let plantData = {}
    try {
        plantData = await Plants.find({name: plantName});
        if (!plantData) {
            plantData = {""};
        }
    } catch (err) {
        return next(createError(500, err.message));
    }
    return plantData;
}

exports.addPlant = async (req, res, next) => {
    let plantDataToAdd = {}
    try {
        plantDataToAdd = await getData();
    } catch (err) {
        return next(createError(500, err.message));
    }
    req.body.name = req.params.name;
    if (plantDataToAdd === {}) {
        req.body.sciName = "";
        req.body.waterFrequency = 0;
        req.body.waterAmount = "";
        req.body.image = "";

    } else {
        req.body.sciName = plantDataToAdd.sciName;
        req.body.waterFrequency = plantDataToAdd.waterFrequency;
        req.body.waterAmount = plantDataToAdd.waterAmount;
        req.body.image = plantDataToAdd.image;
    }
    try { 
        const plantItem = new Plants({
            name: req.body.name,
            sciName: req.body.sciName,
            waterFrequency: req.body.waterFrequency,
            waterAmount: req.body.waterAmount,
            image: req.body.image
        })
        await plantItem.save();

        res.send(plantItem)
    } catch(err) {
        return next(createError(500, err.message))
    }
}
