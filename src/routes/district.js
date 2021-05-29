const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

require('../schema/Districts')
const districts = mongoose.model('districts');

router.get('/', (req,res) => {
    districts.find().then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/byprovince/:id', (req,res) => {
    districts.find({province_id: req.params.id},{ name_en: 1, name_si: 1, name_ta:1 }).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})


module.exports = router;