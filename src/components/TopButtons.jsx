import React from 'react'

const TopButtons = ({setQuery}) => {
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
    ]

  return (
    <div className='flex items-center justify-around my-6'>
      {
        cities.map((city) => (
          <button
            key={city.id}
            className="text-lg font-medium hover:text-black px-3 py-2 rounded-nd transition ease-in"
            onClick={() => setQuery({q: city.title})}
          >
            {city.title}
            </button>
          ))
        }
    </div>
  );
};

export default TopButtons