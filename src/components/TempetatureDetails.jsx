// TempetatureDetails.jsx
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

// TempetatureDetails component
const TempetatureDetails = ({
  weather: { 
    details,
    feels_like, 
    humidity, 
    speed, 
    sunrise, 
    sunset, 
    temp,
    temp_max, 
    temp_min,
    icon, 
  },
  units,
}) => {
  // Array for vertical details (Real Feel, Humidity, Wind)
  const verticalDetails = [
    {
      id: 1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id: 2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id: 3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${ units === "metric" ? "km/h" : "mph" }`,
    },
  ];

  // Array for horizontal details (Sunrise, Sunset, High, Low)
  const horizontalDetails = [
    {
      id: 1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: sunrise,
    },
    {
      id: 2,
      Icon: GiSunset,
      title: "Sunset",
      value: sunset,
    },
    {
      id: 3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id: 4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];

  return (
    <div>
      {/* Weather details text */}
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>   
      </div>
      
      {/* Main temperature and icon container */}
      <div className="flex flex-row items-center justify-between py-3">
        <img 
          src={icon} 
          alt="weather icon" 
          className="w-20" 
        />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        
        {/* Vertical details container */}
        <div className="flex flex-col space-y-3 items-start">
          {verticalDetails.map(({id, Icon, title, value}) => (
            <div 
              key={id} 
              className="flex font-light text-small items-center justify-center"
            >
              <Icon size={18} className="mr-1" />
              {`${title}: `} 
              <span className="font-medium ml-1">{value}</span>
            </div>
          ))}    
        </div>
      </div>
      
      {/* Horizontal details container */}
      <div className="flex flex-row items-center justify-center space-x-10 text-sm py-3">
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className="flex flex-row items-center">
            <Icon size={30} />
            <p className="font-light mr-1">
              {`${title}: `}
              <span className="font-medium ml-1">{value}</span>
            </p>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default TempetatureDetails;