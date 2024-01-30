const createError = require("http-errors");
const axios = require("axios");
const Plants = require("../models/plantpal");
const objId = require('mongodb').ObjectId;
//const PlantData = require("../models/plantdata");

/*
1. Set plant name to the name from the request (req.body.name)
2. Get rest of plant data from "all plants" database (need a getData function?)
3. Set rest of req.body to correspond to plant data
4. Send whole of req.body to "current plants" database
*/

// const getData = async (req, res, next) => {
//     const plantName = req.params.name;
//     let plantData = {}
//     try {
//         plantData = await Plants.find({name: plantName});
//         if (!plantData) {
//             plantData = null;
//         }
//     } catch (err) {
//         return next(createError(500, err.message));
//     }
//     return plantData;
// }

exports.addPlant = async (req, res, next) => {
    // let plantDataToAdd = {}
    // try {
    //     plantDataToAdd = await getData();
    // } catch (err) {
    //     return next(createError(500, err.message));
    // }
    // req.body.name = req.params.name;
    // if (plantDataToAdd === null) {
    //     req.body.sciName = "";
    //     req.body.waterFrequency = 0;
    //     req.body.waterAmount = "";
    //     req.body.image = "";

    // } else {
    //     req.body.sciName = plantDataToAdd.sciName;
    //     req.body.waterFrequency = plantDataToAdd.waterFrequency;
    //     req.body.waterAmount = plantDataToAdd.waterAmount;
    //     req.body.image = plantDataToAdd.image;
    // }
    // try { 
    //     const plantItem = new Plants({
    //         name: req.body.name,
    //         sciName: req.body.sciName,
    //         waterFrequency: req.body.waterFrequency,
    //         waterAmount: req.body.waterAmount,
    //         image: req.body.image
    //     })
    let newPlant = {}
    try {
        newPlant = await Plants.find({name: req.params.name})
        if (!newPlant) {
            return next(createError(404, "no plants in database with that name"))
        }
    } catch (err) {
        return next(createError(500, err.message))
    }   
        const newPlantId = newPlant[0].id;
    try {
        await Plants.findByIdAndUpdate(newPlantId, 
        {owned: true})
        res.send("updated")
    } catch (err) {
        return next(createError(500, err.message))
    }
}
