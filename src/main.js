import './style.css'
import javascriptLogo from './javascript.svg'
import { getWeatherConditions } from './modules/weatherCondition.js'
import { getWeatherForecastData } from './modules/weatherForecast.js'
import { getUserLocation } from './modules/userLocation.js' 
//import viteLogo from '/vite.svg'

//document.querySelector('.app').innerHTML = ` `


const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

console.log(myHonda.engine)
//console.log(getUserLocation())
let forecastData = await getWeatherForecastData()
console.log("my forecast data is: ", forecastData)

console.log("location", forecastData["location"]["country"])
let country = forecastData["location"]["country"]
document.getElementById("country").innerHTML = `${country}`
