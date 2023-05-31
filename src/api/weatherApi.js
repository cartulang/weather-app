import axios from "axios";

const baseUrl = 'https://api.weatherapi.com/v1/'
const apiKey = "a0e880f7503e4af7a41122359210305";

export async function FetchLocations(location) {
    try {
        const response = await axios.get(`${baseUrl}search.json?key=${apiKey}&q=${location}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export async function FetchWeatherCondtions(long, lat){
    try {
        const response = await axios.get(`${baseUrl}forecast.json?key=${apiKey}&q=${lat},${long}&days=1&aqi=no&alerts=no`);
        return response;
    } catch (error) {
        console.log(error);
    }
}