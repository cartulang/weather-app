import TimeLocation from "./TimeLocation";
import Conditions from "./Conditions";
import "../css/weather.css";
import HourlyConditions from "./HourlyConditions";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FetchWeatherCondtions } from "../api/weatherApi";

const Weather = () => {
	const [conditions, setConditions] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const coordinates = {
		long: searchParams.get("long"),
		lat: searchParams.get("lat"),
	};

	useEffect(() => {
		if (coordinates.long > 180 || coordinates.long < -180) {
			alert("Please enter proper location.");
			navigate("/");
			return;
		}

		if (coordinates.lat > 90 || coordinates.lat < -90) {
			alert("Please enter proper location.");
			navigate("/");
			return;
		}

		FetchWeatherCondtions(coordinates.long, coordinates.lat)
		.then(res => {
			setConditions(res.data)
		}).catch(e => console.log(e))
		.finally(() => setIsLoading(false));
	}, [coordinates.long, coordinates.lat, navigate]);

	return (
		<>
			{isLoading ? (
				<h3 className="text-center">Loading...</h3>
			) : (
				<>
					<Link to="/" className="btn btn-primary">
						Go home
					</Link>
					<section className="weather">
						<TimeLocation conditions={conditions} />
						<Conditions conditions={conditions} />
						<HourlyConditions conditions={conditions} />
					</section>
				</>
			)}
		</>
	);
};

export default Weather;
