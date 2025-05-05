import './style.css'
import javascriptLogo from './javascript.svg'
import { getWeatherConditions } from './modules/weatherCondition.js'
import { getWeatherForecastData } from './modules/weatherForecast.js'
import { getUserIP, IPLookup, getUserLocation} from './modules/userLocation.js' 


//import viteLogo from '/vite.svg'

//document.querySelector('.app').innerHTML = ` `

console.log(getUserLocation())
let forecastData = getWeatherForecastData()
console.log(forecastData)
