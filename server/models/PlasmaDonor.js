const { Schema, model } = require("mongoose");

const PlasmaDonorSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	city: String,
	state: String,
	contactNo: Number,
	address: String,
	bloodGroup: {
		type: String,
		enum: ["A-", "A+", "B-", "B+", "O+", "O-", "AB+", "AB-"],
	},
	otp: {
		value: Number,
		expireAt: Date,
	},
	verified: Boolean,
});

module.exports = model("PlasmaDonor", PlasmaDonorSchema);
