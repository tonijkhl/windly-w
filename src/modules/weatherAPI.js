export const BaseURL = 'http://api.weatherapi.com/v1'

export const API_KEY = import.meta.env.VITE_API_KEY;


// NOTE: Move this function to a new module file when it works pls.
const API = 'current.json'
export async function fetchDataTest() {

	// User defined params this is just an example
	let params = new URLSearchParams({ q: "paris" })

	const response = await fetch(`${BaseURL}/${API}?${params.toString()}`, {
		method: 'GET',
		headers: {
			'key': `${API_KEY}`
		},
	});

	const data = await response.json();
	console.log("Data fetch from API: ") 
	console.log(data);
}
