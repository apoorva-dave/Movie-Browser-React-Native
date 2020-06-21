const API_KEY = "c330b0a9"

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
