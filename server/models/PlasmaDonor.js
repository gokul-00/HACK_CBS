const { Schema, model } = require("mongoose");

const PlasmaDonorSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: true,
	},
	city: String,
	state: String,
	mobileNo: Number,
	bloodGroup: {
		type: String,
		enum: ["A-", "A+", "B-", "B+", "O+", "O-", "AB+", "AB-"],
	},
});

module.exports = model("PlasmaDonor", PlasmaDonorSchema);
