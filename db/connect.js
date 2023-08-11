const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/GasLeakSystem"
const connectDB =()=>{
    console.log("Db connected to server");
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
module.exports = connectDB;
