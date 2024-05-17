// App.jsx
import { useEffect, useState } from "react";
import TopButtons from "./components/TopButtons"; 
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TempetatureDetails from "./components/TempetatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Render the weather app
const App = () => {
  const [query, setQuery] = useState({ q: "Dublin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  
  // Function to fetch weather data
  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Successfully fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
  };

  // useEffect to fetch weather data when the query or units change
  useEffect(() => { 
    getWeather(); 
  }, [query, units]);

  // Function to format the background based on the temperature
  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700"; // Default background if no weather data
    
    const temp = weather.temp;
    
    if (units === "metric") {
      if (temp >= 0 && temp < 10) return "from-gray-800 to-gray-300"; // 0°C to 10°C
      else if (temp >= 10 && temp < 20) return "from-cyan-600 to-blue-700"; // 10°C to 20°C
      else if (temp >= 20 && temp < 30) return "from-yellow-700 to-orange-500"; // 20°C to 30°C
      else if (temp >= 30) return "from-red-700 to-orange-500"; // 30°C and above
    } else {
      if (temp >= 32 && temp < 50) return "from-blue-700 to-blue-500"; // 32°F to 50°F
      else if (temp >= 50 && temp < 68) return "from-green-700 to-green-500"; // 50°F to 68°F
      else if (temp >= 68 && temp < 86) return "from-yellow-700 to-yellow-500"; // 68°F to 86°F
      else if (temp >= 86) return "from-red-700 to-red-500"; // 86°F and above
    }
  };

  return (
    <div className="bg-main-bg py-6 bg-cover bg-center h-screen">
    <div className={`mx-auto max-w-screen-lg py-5 px-32 bg-gradient-to-br 
    shadow-lg shadow-black from-cyan-500 to-blue-700 ${ formatBackground() }`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
       
      {weather && (
       <>
        <TimeLocation weather={weather} />
        <TempetatureDetails weather={weather} units={units}/>
        <Forecast title="3 hour forecast" data={weather.hourly} />
        <Forecast title="Daily forecast" data={weather.daily} />
      </>
     )}
     <ToastContainer autoClose={1500} hideProgressBar={true} theme="colored"/>
   </div>
   </div>
  );
};

export default App;