import { useEffect, useState } from 'react';
import TopButtons from "./components/TopButtons"; 
import Inputs from "./components/Inputs";
import TimeLocation from "./components/TimeLocation";
import TempetatureDetails from "./components/TempetatureDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/WeatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "Dublin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };

  useEffect(() => { getWeather(); }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons setQuery={setQuery} />
      <Inputs />
       
      {weather && (
       <>
        <TimeLocation weather={weather} />
        <TempetatureDetails weather={weather} />
        <Forecast title="3 hour forecast" data={weather.hourly} />
        <Forecast title="Daily forecast" data={weather.daily} />
      </>
     )}
   </div>
  );
};

export default App;