export async function getWeatherConditions() {
	try {
		const response = await fetch('https://www.weatherapi.com/docs/conditions.json');
		const weatherConditions = await response.json();
		console.log(weatherConditions);
	}
	catch (error) {
		console.error('Error loading JSON: ', error);
	}
}

