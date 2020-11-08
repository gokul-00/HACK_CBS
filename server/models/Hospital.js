const { Schema, model } = require('mongoose');

const HospitalSchema = new Schema({
    name: String,
    city: String,
    state: String,
    contactNo: Number,
    email: String,
    password: String,
    plasmaFacility: {
        type:Boolean,
        default:false
    },
    bedsAvailable: {
        type:Number,
        default:0
    }
})

module.exports = model('Hospital', HospitalSchema);