import SearchResults from "./SearchResults";

import { useState } from "react";
import axios from "axios";

const SearchLocation = () => {
	// hooks	// const { searchLocation } = useWeather();
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query) {
			return alert("Location cannot be empty");
		}

		setIsLoading(true);
		setIsError(false);

		axios
			.get(`https://weather-app-api24.herokuapp.com/api/search/${query}`)
			.then((res) => {
				setSearchResults(res.data);
				setIsLoading(false);
				setIsError(false);
				setQuery("");
			})
			.catch((err) => {
				setIsLoading(false);
				setIsError(true);
			});
	};

	return (
		<>
			<h1 className="text-center">Weather App</h1>
			<form className="input-group mb-3" onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Search Location"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="btn btn-primary">Search</button>
			</form>

			{isLoading ? (
				<h2 className="text-center">Loading...</h2>
			) : isError ? (
				<h2 className="text-center">Error fetching data.</h2>
			) : (
				<SearchResults searchResults={searchResults} />
			)}
		</>
	);
};

export default SearchLocation;
