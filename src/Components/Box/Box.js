import './box.css';

import Humidity from '../../Assets/img/humidity.png';
import Pressure from '../../Assets/img/pressure.png';
import Windock from '../../Assets/img/windock.png';

const Box = ({ func, city, icon, temp, maxTemp, minTemp ,wind,press,humidity,funcMetric,funcStandart,description}) => {
	return (
		<div className='box'>
			<div className='box__header'>
				<input
					className='box__input'
					onKeyUp={func}
					type='text'
					placeholder='select city ...'
				/>
				<h3 className='box__city'>{city}</h3>
				<div className='box__btns'>
					<button onClick={funcMetric} className='box__btn'>°C</button>
					<button onClick={funcStandart} className='box__btn'>°F</button>
				</div>
			</div>
			<div className='box__body'>
				{icon}
				<div>
                    <p className='box__desciption'>
                        {description}
                    </p>
					<h2 className='box__temp'>{temp}</h2>

					<p className='box__temps'>
						{maxTemp}° / {minTemp}°
					</p>
				</div>
				<div className='box__mores'>
					<div className='box__more'>
						<img src={Windock} alt='nimadir' />
                        <p>
                            {wind} mph
                        </p>
					</div>
					<div className='box__more'>
						<img src={Pressure} alt='nimadir' />
                        <p>
                            {press} Pa
                        </p>
					</div>
					<div className='box__more'>
						<img src={Humidity} alt='nimadir' />
                        <p>
                            {humidity} %
                        </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Box;
