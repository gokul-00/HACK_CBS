const otpGenerator = (value) => {
	let seed = JSON.stringify(Math.floor(Math.random() * value));
	seed = seed.slice(0, 4);
	return seed;
};

module.exports = {
	otpGenerator,
};
