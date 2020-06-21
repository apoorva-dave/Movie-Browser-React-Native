const API_KEY = /* your API key */

export const fetchData = async (text) => {
	const url = `http://www.omdbapi.com/?s=${text}&apikey=${API_KEY}`
	const response = await fetch(url)
	const {Search} = await response.json()
	return Search
}