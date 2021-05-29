const mongoose = require('mongoose');

const ProvinceSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    province_id: {
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
    }
})

mongoose.model('provinces', ProvinceSchema);