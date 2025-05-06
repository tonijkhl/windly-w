import { BaseURL, API_KEY } from './weatherAPI.js'
import { getUserLocation } from './userLocation.js'


export async function getWeatherForecastData() {
	try {
		const userLocation = await getUserLocation()
		//let params = new URLSearchParams({q: IP})
		const response = await fetch(`${BaseURL}/forecast.json?q=${userLocation}` + '&days=3', {
			method: 'GET',
			headers: { 'key': `${API_KEY}` }
		});
		const data = await response.json()
		console.log("Data Fetched from Forecast API: ")
		console.log(data)
		return data
	}
	catch (error) {
		console.error("WOOpss!! there was an error while fetching data from weather forecast API: ", error)
		return null
	}
}
