const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

require('../schema/Province')
const province = mongoose.model('cities');

router.get('/', (req,res) => {
    province.find().then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

module.exports = router;