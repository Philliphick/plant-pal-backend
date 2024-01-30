const express = require("express")
const router = express.Router();

const { getPlants } = require("../controllers/getController");
const { addPlant } = require("../controllers/addController");
const { waterPlant } = require("../controllers/waterController");
const { deletePlant } = require("../controllers/deleteController");

router.get("/get", getPlants);
router.put("/add/:name", addPlant);
router.put("/water/:id", waterPlant);
router.put("/delete/:id", deletePlant);

module.exports = router;

