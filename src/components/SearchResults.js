import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultsStyle = styled.div`
	background-color: #ededed;
	width: 100%;
	margin-bottom: 0.5rem;
	padding: 0.25rem 0;
`;

const LinkStyle = {
	cursor: "pointer",
	fontSize: "1.25rem",
	textDecoration: "none",
	color: "black",
	padding: "0.25rem 2rem",
};

const SearchResults = ({ searchResults }) => {
	return (
		<div>
			{searchResults &&
				searchResults.map((result) => (
					<ResultsStyle key={result.id}>
						<Link
							style={LinkStyle}
							to={`/current?long=${result.lon}&lat=${result.lat}`}
						>{`${result.name}, ${result.region}, ${result.country}`}</Link>
					</ResultsStyle>
				))}
		</div>
	);
};

export default SearchResults;
