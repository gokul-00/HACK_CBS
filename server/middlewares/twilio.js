// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioContact = process.env.TWILIO_CONTACT;
const client = require("twilio")(accountSid, authToken);

const sendSms = async (message, to) => {
	let toIN = "+91" + to;
	console.log(toIN);
	client.messages
		.create({
			body: message,
			from: twilioContact,
			to: toIN,
		})
		.then((message) => console.log(message.sid));
};

module.exports = {
	sendSms,
};
