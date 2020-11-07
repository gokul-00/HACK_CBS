const info = require('express').Router();
const PlasmaDonor = require('../../models/PlasmaDonor')


// GET - /plasmaDonors?bloodGroup={}
info.get('/getinfo', async (req, res) => {
    try {
        const donor = await PlasmaDonor.find(req.query);
        res.status(200).json(donor);

    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: err.message })
    }
})



module.exports = info;