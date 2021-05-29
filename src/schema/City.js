const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    district_id: {
        type: Number,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    name_si: {
        type: String,
        required: true
    },
    name_ta: {
        type: String,
        required: true
    },
    sub_name_en: {
        type: String,
        required: true
    },
    sub_name_si: {
        type: String,
        required: true
    },
    sub_name_ta: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
})

mongoose.model('cities', CitySchema);