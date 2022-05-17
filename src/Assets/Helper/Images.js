

import AtmosphereP from '../img/png/atmosphere.png';
import CloudP from '../img/png/cloud.png';
import DrizlleP from '../img/png/Drizlle.png';
import RainyP from '../img/png/rainy.png';
import SnowyP from '../img/png/snowy.png';
import StormP from '../img/png/storm.png';
import SunP from '../img/png/sun.png';

const Images = (code) => {
	if (code >= 200 && code <= 232) {
		return <img src={StormP} alt='template' />;
	}
	if (code >= 300 && code <= 321) {
		return <img src={DrizlleP} alt='template' />;
	}
	if (code >= 500 && code <= 531) {
		return <img src={RainyP} alt='template' />;
	}
	if (code >= 600 && code <= 622) {
		return <img src={SnowyP} alt='template' />;
	}
	if (code >= 701 && code <= 781) {
		return <img src={AtmosphereP} alt='template' />;
	}
	if (code === 800) {
		return <img src={SunP} alt='template' />;
	}
	if (code >= 801 && code <= 804) {
		return <img src={CloudP} alt='template' />;
	}
};

export default Images;
