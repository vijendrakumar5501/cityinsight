const express = require("express");
const router = express.Router();
const upload = require("../middleware/multerConfig");
const cityController = require("../controller/cityController");

// POST Route for adding city details
router.post("/", upload.single("image"), cityController.addCity);

router.get("/getAllcitydetails", cityController.getAllCity);

module.exports = router;
