import styled from "styled-components";
import { useState } from "react";

const UnitStyle = styled.h1`
	margin: 1rem 0;
	font-size: 3rem;
	font-weight: 800;
	cursor: pointer;
	user-select: none;
`;

const Condtions = ({ conditions }) => {
	// hooks
	const [isMetric, setIsMetric] = useState(true);

	const { current } = conditions;

	const setTempUnit = () => {
		const metric = `${current.temp_c} °C`;
		const imperial = `${current.temp_f} °F`;

		if (isMetric) {
			return metric;
		}

		return imperial;
	};

	return (
		<section className="current-conditions">
			<img
				src={current.condition.icon}
				alt="weather-icon"
				className="weather-icon"
			/>
			<h4>{current.condition.text}</h4>
			<UnitStyle onClick={() => setIsMetric(!isMetric)}>
				{setTempUnit()}
			</UnitStyle>
		</section>
	);
};

export default Condtions;
