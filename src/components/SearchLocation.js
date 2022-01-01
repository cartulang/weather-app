import SearchResults from "./SearchResults";

import { useState } from "react";
import axios from "axios";

const SearchLocation = () => {
	// hooks	// const { searchLocation } = useWeather();
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query) {
			return alert("Location cannot be empty");
		}

		axios
			.get(`https://weather-app-api24.herokuapp.com/api/search/${query}`)
			.then((res) => {
				setSearchResults(res.data);
				setQuery("");
			})
			.catch((err) => console.error(err));
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
			<SearchResults searchResults={searchResults} />
		</>
	);
};

export default SearchLocation;
