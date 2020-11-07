const { Schema, model } = require('mongoose');

const HospitalSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    city: String,
    state: String,
    contactNo: Number,
    email: String,
    password: String,
    plasmaFacility: Boolean,
    bedsAvailable: Number
})

module.exports = model('Hospital', HospitalSchema);