import React from "react";

const TimeLocation = ({ weather }) => {
  if (!weather) return null;

  const { format, name, country } = weather;

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-xl font-extralight">{format}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-3xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeLocation;
