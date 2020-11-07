const info = require('express').Router();
const Hospital = require('../../models/Hospital')
const { jwtVerify } = require('../../middlewares/jwt');

// GET - /getInfo?city={}
info.get('/getInfo', async (req, res) => {
    try {
        const hospital = await Hospital.find(req.query)
        res.status(200).json(hospital)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})

//update hospital info (plasmaFacility,bedsAvailable)
info.put('/update', jwtVerify, async (req, res) => {
    try {
        const { plasmaFacility, bedsAvailable } = req.body;
        const hospitalId = req.jwt_payload.id;
        const hospital = await Hospital.findOne({ _id: hospitalId });
        hospital.plasmaFacility = plasmaFacility;
        hospital.bedsAvailable = bedsAvailable;
        await hospital.save();
        res.status(200).json({ plasmaFacility, bedsAvailable });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })

    }
})

module.exports = info;