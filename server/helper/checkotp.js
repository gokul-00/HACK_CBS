const checkOtpExpiry = (otpExpireAt) => {
	let currentTime = Date.now();
	let otpExpireTime = new Date(otpExpireAt);
	otpExpireTime = otpExpireTime.getTime();

	if (otpExpireTime - currentTime > 0) {
		return false;
	} else {
		return true;
	}
};

module.exports = {
	checkOtpExpiry,
};
