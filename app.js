const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const SensorData_routes = require("./routes/SensorData");//import routes
const connectDB = require("./db/connect");

app.get("/",(req,res)=>{res.send("hello")});//test
app.use("/api/sensordata",SensorData_routes);//set souter middleware

const start = async()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`server is running on ${port} port `);
        })
    }catch(error){
        console.log(error);
    }
}
start();