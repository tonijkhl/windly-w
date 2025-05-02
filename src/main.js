import './style.css'
import javascriptLogo from './javascript.svg'
import { getWeatherConditions } from './modules/weatherCondition.js'
import { fetchDataTest } from './modules/weatherAPI.js'

//import viteLogo from '/vite.svg'

//document.querySelector('.app').innerHTML = ` `


function successCallback(position) {
	let latitude = position.coords.latitude
	let longitude =  position.coords.longitude

	console.log("Latitude: " + latitude, "Longitude: " + longitude)
}

function errorCallback(error) {
	console.error("Error getting location: ", error)
}

function getLocation() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
	} else {
		// NOTE: to show here a webpage for selecting a country state province, county if there's no user location
		console.log("Show here:select country city county etc")
	}
}

getLocation()

console.log(fetchDataTest())

//getWeatherConditions()
