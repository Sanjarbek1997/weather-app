const Classes = (code) => {
	if (code >= 200 && code <= 232) {
		return 'Storm';
	}
	if (code >= 300 && code <= 321) {
		return 'Drizzle';
	}
	if (code >= 500 && code <= 531) {
		return 'Rain';
	}
	if (code >= 600 && code <= 622) {
		return 'Snow';
	}
	if (code >= 701 && code <= 781) {
		return 'Atmosphere';
	}
	if (code === 800) {
		return 'Sun';
	}
	if (code >= 801 && code <= 804) {
		return 'Cloud';
	}
};

export default Classes;
