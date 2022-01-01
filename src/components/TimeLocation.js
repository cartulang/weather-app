import styled from "styled-components";

const day = `${process.env.PUBLIC_URL}/img/day.svg`;
const night = `${process.env.PUBLIC_URL}/img/night.svg`;

const TimeLoc = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justfy-content: center;
	align-items: flex-end;
	padding-bottom: 5rem;
	background-repeat: no-repeat;
	background-size: cover;
`;

const getCurrentTime = () => {
	const now = new Date();
	const date = now.toDateString();
	const hour = now.getHours();
	let minute = now.getMinutes();
	const timeFormat = hour >= 12 ? "PM" : "AM";

	minute = minute < 10 ? `0${minute}` : minute;

	const time = `${hour > 12 ? hour - 12 : hour}:${minute} ${timeFormat}`;
	return { time, date };
};

const { time, date } = getCurrentTime();

const TimeLocation = ({ conditions }) => {
	const { current, location } = conditions;
	return (
		<>
			<TimeLoc
				style={{
					backgroundImage: `url(${current.is_day ? day : night})`,
					color: current.is_day ? "black" : "white",
				}}
			>
				<div className="time-location" style={{ width: "100%" }}>
					<h4>{`${location.name}, ${location.region}`}</h4>
					<h2>{time}</h2>
					<h5>{date}</h5>
				</div>
			</TimeLoc>
		</>
	);
};

export default TimeLocation;
