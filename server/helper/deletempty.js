const deleteEmpty = (jsonObj) => {
	for (let [key, value] of Object.entries(jsonObj)) {
		if (value == "") {
			delete jsonObj[key];
		}
	}
	return jsonObj;
};

module.exports = {
	deleteEmpty,
};
