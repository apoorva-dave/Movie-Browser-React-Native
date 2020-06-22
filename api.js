const API_KEY = /* API KEY*/

export const fetchData = async (text) => {
	const url = `http://www.omdbapi.com/?s=${text}&apikey=${API_KEY}`
	const response = await fetch(url)
	const {Search} = await response.json()
	return Search
}

export const fetchMoviesById = async (id) => {
	const url = `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
	const response = await fetch(url)
	const results = await response.json()
	return results
}
