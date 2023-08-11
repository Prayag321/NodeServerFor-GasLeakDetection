const express = require("express");
const router = express.Router();

const getAllSensorData = require("../controllers/controller");//import controller(means function)
router.route("/").get(getAllSensorData);

module.exports = router;