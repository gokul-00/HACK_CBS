const bcrypt = require('bcrypt')
const login = require('express').Router();
const Hospital = require('../../models/Hospital')
const { createJWTtoken } = require('../../middlewares/jwt');

login.post('/', async (req, res) => {
    try {
        const { password, contactNo } = req.body;
        const hospital = await Hospital.findOne({ contactNo })
        if (hospital == null) {
            res.status(404).json({ message: "User not registered" })
        } else {
            if (await bcrypt.compare(password, hospital.password)) {
                const token = await createJWTtoken(hospital)
                res.status(200).json({
                    contactNo,
                    token
                })
            }
            else {
                res.status(400).json({ message: "Password incorrect" })
            }
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "Server error. Try again later" })
    }
})
module.exports = login