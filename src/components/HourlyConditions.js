import styled from "styled-components";

const NextHoursCondtions = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 2rem;
`;

const HourConditions = styled.div`
	flex-basis: 10%;
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-bottom: none;
	margin-top: 1rem;
	border-top: 2px black solid;
	padding: 1.5rem 0;
`;

const HourlyConditions = ({ conditions }) => {
	const { forecast: current } = conditions;
	const { forecastday } = current;
	const now = new Date();
	const hour = now.getHours();
	const nextHours = forecastday[0].hour;

	return (
		<NextHoursCondtions>
			<h2>Hourly Forecast</h2>
			<HourConditions>
				{nextHours.map((forecast, index) => {
					if (index >= hour + 1 && index <= hour + 4) {
						return (
							<div key={forecast.time_epoch}>
								<h5>{`${forecast.chance_of_rain}%`}</h5>
								<div>
									<img
										src={forecast.condition.icon}
										alt="weather-icon"
										style={{ width: "100%" }}
									/>
								</div>
								<h5>{forecast.time.slice(11, 16)}</h5>
							</div>
						);
					}

					return null;
				})}
			</HourConditions>
		</NextHoursCondtions>
	);
};

export default HourlyConditions;
