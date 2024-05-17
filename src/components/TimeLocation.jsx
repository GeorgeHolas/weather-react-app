// TimeLocation.jsx
import React from "react";

// TimeLocation component
const TimeLocation = ({ weather }) => {
  // Return null if weather data is not available
  if (!weather) return null;

  // Destructure the weather object to get format, name, and country
  const { format, name, country } = weather;

  return (
    <div>
      {/* Date and time display */}
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{format}</p>
      </div>

      {/* Location display */}
      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeLocation;