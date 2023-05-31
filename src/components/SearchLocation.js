import SearchResults from "./SearchResults";
import { FetchLocations } from "../api/weatherApi";

import { useState } from "react";

const SearchLocation = () => {
	// hooks	// const { searchLocation } = useWeather();
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!query) {
			return alert("Location cannot be empty");
		}

		setIsLoading(true);
		setIsError(false);

		try {
			const locations = await FetchLocations(query);
			console.log(locations);
			setSearchResults(locations.data)
		} catch (e) {
			setIsError(true);
			console.log(e);
		}
		finally{
			setIsLoading(false);
		}
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
