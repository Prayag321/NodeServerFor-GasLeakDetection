const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema({
    temperature:{
        type:Number,
        default:0
    },
    gasreading:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
}) 
module.exports = mongoose.model('sensor-data',sensorDataSchema)