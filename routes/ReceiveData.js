const express = require("express");
const router = express.Router();

const receiveData = require("../controllers/ReceiveData")//import receive 
router.route("/").post(receiveData);

module.exports = router;