const { Schema, model } = require('mongoose');

const HospitalSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    city: String,
    State: String,
    contactNo: Number,
    plasmaFacility: Boolean,
    bedAvailable: Number
})

module.exports = model('Hospital', HospitalSchema);