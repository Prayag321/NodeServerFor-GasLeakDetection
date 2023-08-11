const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema({
    name:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
}) 
module.exports = mongoose.model('sensor-data',sensorDataSchema)