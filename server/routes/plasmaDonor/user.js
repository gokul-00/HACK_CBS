const user = require("express").Router();
const PlasmaDonor = require("../../models/PlasmaDonor");
const { createJWTtoken } = require("../../middlewares/jwt");
const { sendSms } = require("../../middlewares/twilio");
const { otpGenerator } = require("../../helper/otpgenerator");
const { checkOtpExpiry } = require("../../helper/checkotp");

//otpinit
user.post("/otpinit", async (req, res) => {
	try {
		let { contactNo } = req.body;

		if (!contactNo) {
			res.status(400).json({ message: "Enter Mobile Number" });
		} else {
			const donor = await PlasmaDonor.findOne({ contactNo });
			console.log(donor);
			let otpValue = otpGenerator(contactNo);

			if (donor === null) {
				req.body.otp = {};
				req.body.otp.value = parseInt(otpValue);
				req.body.otp.expireAt = Date.now() + 300000;

				const newDonor = new PlasmaDonor(req.body);
				await newDonor.save();
				await sendSms(otpValue, contactNo);
				res.status(200).json({ message: "OTP Sent" });
			} else {
				if (checkOtpExpiry(donor.otp.expireAt)) {
					await PlasmaDonor.updateOne(
						{ contactNo },
						{
							$set: { otp: { value: otpValue, expireAt: Date.now() + 300000 } },
						},
						async (error, result) => {
							if (error) {
								console.log(error);
								res
									.state(500)
									.json({ message: "Server error : Try again later" });
							} else {
								await sendSms(otpValue, contactNo);
								res.status(200).json({ message: "OTP Sent" });
							}
						}
					);
				} else {
					res.status(200).json({ message: "OTP Already Sent" });
				}
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server error. Try again later" });
	}
});

//register and login
user.post("/", async (req, res) => {
	try {
		let { name, city, state, contactNo, bloodGroup, otp } = req.body;

		const donor = await PlasmaDonor.findOne({ contactNo });

		if (donor === null) {
			res.status(400).json({ message: "OTP Invalid" });
		} else {
			if (donor.verified && otp == donor.otp.value) {
				if (checkOtpExpiry(donor.otp.expireAt)) {
					res.status(400).json({ message: "OTP Expired" });
				} else {
					await PlasmaDonor.updateOne(
						{ contactNo },
						{ $set: { otp: { value: otp, expireAt: Date.now() - 1 } } }
					);
					const token = await createJWTtoken(donor);
					res.status(200).json({
						name,
						city,
						state,
						contactNo,
						bloodGroup,
						token,
					});
				}
			} else {
				if (otp == donor.otp.value) {
					if (checkOtpExpiry(donor.otp.expireAt)) {
						res.status(400).json({ message: "OTP Expired" });
					} else {
						if (!name || !city || !state || !bloodGroup)
							res.status(400).json({ message: "Fill all fields" });

						req.body.verified = true;
						await PlasmaDonor.updateOne(
							{ contactNo },
							{
								$set: {
									name: name,
									city: city,
									state: state,
									bloodGroup: bloodGroup,
									otp: { value: otp, expireAt: Date.now() - 1 },
									verified: true,
								},
							},
							async (error, result) => {
								if (error) {
									console.log(error);
									res
										.status(500)
										.json({ message: "Server error. Try again later" });
								} else {
									res.status(200).json({ message: "User Registered" });
								}
							}
						);
					}
				} else {
					res.status(400).json({ message: "OTP Invalid" });
				}
			}
		}
		if (!name || !city || !state || !contactNo || !bloodGroup) {
			return res.status(400).json({ message: "Fill all fields" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Server error. Try again later" });
	}
});

module.exports = user;
