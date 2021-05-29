const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

require('../schema/Districts')
const districts = mongoose.model('cities');

router.get('/', (req,res) => {
    districts.find().then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/byprovince/:id', (req,res) => {
    city.find({province_id: req.params.id},{ latitude: 1, longitude: 1, _id: 0 }).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})


module.exports = router;