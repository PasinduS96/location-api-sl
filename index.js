const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const cities = require('./src/routes/city');

require("dotenv").config();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(cors())

app.listen(process.env.PORT, () =>{

    console.log(`server started at ${process.env.PORT}`);

    //Connect to the database
    mongoose.Promise = global.Promise;
    mongoose
    .connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, db) =>{
        console.log("MongoDB Connected Successfully!!")
        
    })
})

app.use('/cities', cities)