const express = require("express")
const router = express.Router();

const { getPlants } = require("../controllers/getController");
const addPlant = require("../controllers/addController");
const waterPlant = require("../controllers/waterController");
const deletePlant = require("../controllers/deleteController");

router.get("/all", getPlants);
router.post("/add/:name", addPlant);
router.put("/water/:id", waterPlant);
router.delete("/delete/:id", deletePlant);


module.exports = router;

