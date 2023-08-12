const sdmodel = require("../models/sdmodel");// import model

const getAllSensorData = async(req,res)=>{
    const dbData = await sdmodel
    .find()
    .sort({ _id: -1 }) // Sort by _id in descending order
    .limit(1) ;//only one document
    console.log(dbData);
    res.status(200).json({ dbData })
}

module.exports = getAllSensorData;