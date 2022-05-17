import { useEffect, useState } from 'react';
import Classes from './Assets/Helper/Classes';
import Images from './Assets/Helper/Images';
import Box from './Components/Box/Box';

function App() {
	const [city, setCity] = useState('Tashkent');
	const [data, setData] = useState({
		isFetched: false,
		data: {},
		error: null,
	});
	const [unit, setUnit] = useState('metric');
	const [id, setId] = useState('200');

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1812a1968584963688df1acadadc094&units=${unit}`,
		)
			.then((res) => res.json())
			.then((data) =>
				setData({
					isFetched: true,
					data: data,
					error: null,
				}),
			);
	}, [city, unit]);
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1812a1968584963688df1acadadc094&units=${unit}`,
		)
			.then((res) => res.json())
			.then((data) => setId(data.weather[0].id));
	}, [city]);

	// console.log(id);

	const handleInput = (evt) => {
		if (evt.code === 'Enter') {
			setCity(evt.target.value);
			evt.target.value = '';
		}
	};

	const funcMetric = () => {
		setUnit('metric');
	};
	const funcStandart = () => {
		setUnit('standart');
	};

	return (
		<>
			{data.isFetched && (
				<section className={`main ${Classes(id)}`}>
					<Images code={data.data.weather[0].id} />
					{data.isFetched ? (
						<Box
							funcMetric={funcMetric}
							funcStandart={funcStandart}
							func={handleInput}
							city={city}
							icon={Images(id)}
							temp={data.data.main.temp}
							maxTemp={data.data.main.temp_max}
							minTemp={data.data.main.temp_min}
							description={data.data.weather[0].description}
							wind={data.data.wind.speed}
							press={data.data.main.pressure}
							humidity={data.data.main.humidity}
						/>
					) : (
						<h1>Loading ...</h1>
					)}
				</section>
			)}
		</>
	);
}

export default App;
