const express = require("express")
const sdmodel = require("../models/sdmodel");
const connectDB = require("../db/connect")
const app = express();

const receiveData = async (req, res) => {
    //    try {
    //     if(req.method==='POST'){
    //         await connectDB();
    //         const parsedData = new URLSearchParams(data);
    //         const temperature = parseFloat(parsedData.get('temperature'));
    //         const humidity = parseFloat(parsedData.get('humidity'));
    //         console.log('Received sensor data:');
    //         console.log('Temperature:', temperature, '°C');
    //         console.log('Humidity:', humidity, '%');
    //         await sdmodel.create({
    //             temperature:temperature,
    //             humidity:humidity
    //         })
    //         console.log(req);

    //     }
    //    } catch (error) {
    //     console.log(error);
    //    }


if (req.method === 'POST') 
{
    let data = '';
    req.on('data', chunk => {
            data += chunk;
    });
    req.on('end', async() => {
        try{
            const parsedData = new URLSearchParams(data);
            const temperature = parseFloat(parsedData.get('temperature'));
            const humidity = parseFloat(parsedData.get('humidity'));
            console.log('Received sensor data:');
            console.log('Temperature:', temperature, '°C');
            console.log('Humidity:', humidity, '%');
            await sdmodel.create({temperature:temperature,
                    humidity:humidity
                })
                // Process the sensor data here as needed
            }catch (error) {
                console.error('Error parsing sensor data:', error);
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received successfully');
    });
} else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
}
};


module.exports = receiveData;
