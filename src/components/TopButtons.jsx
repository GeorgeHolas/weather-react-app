// TopButtons.jsx
import React from 'react'

// TopButtons component
const TopButtons = ({ setQuery }) => {
  // Array of city objects with id and title
  const cities = [
    {
      id: 1,
      title: "London"
    },
    {
      id: 2,
      title: "Monterrey"
    },
    {
      id: 3,
      title: "Prague"
    },
    {
      id: 4,
      title: "Anchorage"
    },
    {
      id: 5,
      title: "Sydney"
    },
  ];

  return (
    // Container div for buttons
    <div className='flex items-center justify-around my-6'>
      {
        // Map over the cities array to create a button for each city
        cities.map((city) => (
          <button
            key={city.id}  // Unique key for each button
            className="text-lg font-medium hover:text-black px-3 py-2 rounded-md transition ease-in"  
            onClick={() => setQuery({ q: city.title })}  // Set query to the city title on click
          >
            {city.title} 
          </button>
        ))
      }
    </div>
  );
};

export default TopButtons;