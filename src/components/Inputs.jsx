// Inputs.jsx
import { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";

// Inputs component
const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState("");
  
  // handle on click when user clicks search icon button
  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  
  // handle on click when user clicks on the current location button
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const {latitude, longitude} = position.coords;
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">

      {/* Input and buttons container */}
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input 
        value = {city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text" 
        placeholder="Search by city..." 
        className="text-xl text-gray-500 font-light p-2 w-full shadow-xl focus:outline-none 
        capitalize placeholder:lowercase" 
        />

        {/* Search icon button */}
        <BiSearch 
        size={30} 
        className="cursor-pointer transition ease-out hover:scale-125" 
        onClick={handleSearchClick}
        />

        {/* Current location icon button */}
        <BiCurrentLocation 
        size={30} 
        className= "cursor-pointer transition ease-out hover:scale-125" 
        onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl transition ease-out hover:scale-125" onClick={()=> setUnits("metric")}>
          °C
        </button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button className="text-2xl transition ease-out hover:scale-125" onClick={()=> setUnits("imperial")}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs