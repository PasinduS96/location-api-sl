const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

require('../schema/City')
const city = mongoose.model('cities');

router.get('/', (req,res) => {
    city.find().then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/cordinates/:city', (req,res) => {
    city.find({name_en: req.params.city},{ name_en: 1,latitude: 1, longitude: 1, _id: 0 }).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/byDistrict/:id', (req,res) => {
    city.find({district_id: req.params.id}).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/colombo_mca/:id', (req,res) => {
    city.find({name_en: "Colombo "+ req.params.id}).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/colombo_mca', (req,res) => {
    city.find({name_en: /Colombo/}).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})







module.exports = router;