const user = require("express").Router();
const PlasmaDonor = require("../../models/PlasmaDonor");
const { createJWTtoken } = require("../../middlewares/jwt");

//register
user.post("/register", async (req, res) => {
	try {
		let { name, city, state, mobileNo, bloodGroup } = req.body;
		if (!name || !city || !state || !mobileNo || !bloodGroup) {
			return res.status(400).json({ message: "Fill all fields" });
		}
		const donor = await PlasmaDonor.findOne({ mobileNo });
		if (donor == null) {
			const newDonor = new PlasmaDonor(req.body);
			await newDonor.save();
			const token = await createJWTtoken(newDonor);
			res.status(200).json({
				name,
				city,
				state,
				mobileNo,
				bloodGroup,
				token,
			});
		} else {
			res.status(409).json({ message: "User already exists" });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server error. Try again later" });
	}
});

module.exports = user;
