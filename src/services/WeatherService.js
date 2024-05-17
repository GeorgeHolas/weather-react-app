// WeatherService.js
import { DateTime } from "luxon";

// API key for OpenWeatherMap
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
// Base URL for OpenWeatherMap API
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// Function to get weather data from the API
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    return fetch(url).then((res) => res.json())    
};

// Function to get the icon URL from the icon code
const iconUrlFromCode = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

// Function to format time to local time
const formatToLocalTime = (
  secs, 
  offset, 
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(secs, { zone: 'utc' })
    .plus({ seconds: offset })
    .toFormat(format);
};

// Function to format current weather data
const formatCurrent = (data) => {
    const {
      coord: {lat, lon}, 
      main: { temp, feels_like, temp_min, temp_max, humidity }, 
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
      timezone,
} = data;

const { main: details, icon } =  weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    weather,
    speed,
    details,
    icon: iconUrlFromCode(icon),
    format: formattedLocalTime,
    timezone,
    lat,
    lon
  };
};

// Function to format forecast weather data
const formatForecastWeather = (secs, offset, data) => {
  // Format hourly forecast data
  const hourly = data.filter((f) => f.dt > secs).map((f) => ({
       temp: f.main.temp,
       title: formatToLocalTime(f.dt, offset, "hh:mm a"),
       icon: iconUrlFromCode(f.weather[0].icon),
       date: f.dt_txt,
    }))
    .slice(0, 5) // Get the first 5 hourly forecasts

  //Format daily forecast data
  const daily = data.filter((f) => f.dt_txt.slice(-8) === "00:00:00").map((f) => ({
        temp: f.main.temp,
        title: formatToLocalTime(f.dt, offset, "ccc"),
        icon: iconUrlFromCode(f.weather[0].icon),
        data: f.dt_txt,
    }))
    return { hourly, daily };
};

// Function to get and format weather data
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon , timezone }  = formattedCurrentWeather  
  
  // Get forecast weather data and format it
  const formattedForecastWeather = await getWeatherData("forecast", { 
    lat, 
    lon, 
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));
  
  // Return combined current and forecast weather data
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
