import { BaseURL, API_KEY } from './weatherAPI.js'

async function getUserIP() {
	try {
		const response = await fetch('https://api.ipify.org')
		const ip = await response.text()
		console.log("ip address is: ", ip)
		return ip
	}
	catch (error) {
		console.error('Error fetching IP address:', error)
		return null
      }
}

async function IPLookup() {
	try {
		const IP = await getUserIP()
		const response = await fetch(`${BaseURL}/ip.json?q=${IP}`, {
			method: 'GET',
			headers: { 'key': `${API_KEY}` }
		})
		const data = await response.json()
		console.log("Data IPLookup: ", data)
		return data
	}
	catch (error) {
		console.log("OOps error ocurred while trying to fetch IPLookup data: ",error)
		return null
	}
}

// ___________________________ Geolocation API ___________________________
export async function getUserLocation() {
	if ("geolocation" in navigator) {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const coords = `${position.coords.latitude},${position.coords.longitude}`
					resolve(coords)
				},
				async (error) => {
					console.error("Error getting location: ", error)
					try {
						const IP = await getUserIP()
						resolve(IP)
					} catch (ipError) {
						reject(ipError)
					}
                		})
        	})
	} else {
	try {
		const IP = await getUserIP()
		return IP
	} catch (error) {
		throw new Error("Failed to get IP location")
	}}
}
