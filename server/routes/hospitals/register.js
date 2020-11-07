const bcrypt = require('bcrypt')
const register = require('express').Router();
const Hospital = require('../../models/Hospital')
const { createJWTtoken } = require('../../middlewares/jwt');

//register

register.post('/', async (req, res) => {
    try {
        let { name, city, state, contactNo, password } = req.body
        if (!name || !city || !state || !contactNo || !password) {
            return res.status(400).json({ message: "Fill all fields" })
        }
        const hospital = await Hospital.findOne({ contactNo })
        if (hospital == null) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newHospital = new Hospital({ name, city, state, contactNo, password: hashedPassword })
            await newHospital.save()
            const token = await createJWTtoken(newHospital)
            res.status(200).json({
                name, city, state, contactNo, token
            })

        } else {
            res.status(409).json({ message: "User already exists" })
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({ "message": "Server error. Try again later" })
    }
})


module.exports = register;