const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const cities = require('./src/routes/city');
const districts = require('./src/routes/district');
const provinces = require('./src/routes/province');

require("dotenv").config();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('public'))

app.use(cors())

app.set('view engine', 'ejs')

app.listen(process.env.PORT, () =>{

    console.log(`server started at ${process.env.PORT}`);

    //Connect to the database
    mongoose.Promise = global.Promise;
    mongoose
    .connect(process.env.MONGO_URI,{
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, db) =>{
        if(!err){
            console.log("MongoDB Connected Successfully!!")
        }else{
            console.log(err);
        }
    })
})

app.get('/', (req,res) => {
    res.render('index')
})

app.use('/cities', cities)
app.use('/districts', districts)
app.use('/provinces', provinces)