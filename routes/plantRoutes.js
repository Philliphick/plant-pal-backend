const express = require("express")
const router = express.Router();

const { getPlants } = require("../controllers/getController");
const { addPlant } = require("../controllers/addController");
const { waterPlant } = require("../controllers/waterController");
const { deletePlant } = require("../controllers/deleteController");
const { auth } = require("../controllers/authController");

router.get("/get/:username", getPlants);
router.put("/add/:username", addPlant);
router.put("/water/:username/:id", waterPlant);
router.put("/delete/:username/:id", deletePlant);

router.post("/auth", auth);

module.exports = router;

