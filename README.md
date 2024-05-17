# Weather App

This is a React application that fetches and displays weather data for various locations using the OpenWeatherMap API. The app allows users to search for a specific location or select from a list of pre-defined cities. It displays the current weather conditions, temperature details, and forecasts for the next few hours and days.

## Technologies Used

- React
- Luxon (for date and time formatting)
- react-toastify (for displaying notifications)
- Tailwind CSS (for styling)
- Vite (build tool)

## Components

- **TopButtons.jsx**: Renders a list of buttons for pre-defined cities. When a button is clicked, it updates the search query.
- **Inputs.jsx**: Renders an input field for searching locations and a button to toggle between metric and imperial units.
- **TimeLocation.jsx**: Displays the current time and location based on the fetched weather data.
- **TempetatureDetails.jsx**: Displays temperature details such as current temperature, feels like temperature, minimum and maximum temperatures, and humidity.
- **Forecast.jsx**: Renders hourly and daily weather forecasts.

## Services

- **WeatherService.js**: Contains functions for fetching weather data from the OpenWeatherMap API, formatting the data, and generating URLs for weather icons.

## Main App Component

- **App.jsx**: The main component that handles the application state, fetches weather data based on the search query and units, and renders the other components with the fetched data.

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/weather-app.git`
2. Navigate to the project directory: `cd weather-app`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your OpenWeatherMap API key: `VITE_OPENWEATHER_API_KEY=your_api_key_here`
 to obtain your api key go to: (https://openweathermap.org/)
5. Start the development server: `npm run dev`

## Usage

- Open the application in your browser at `http://localhost:3000` (or the URL provided by the development server).
- You can either:
  - Click on one of the pre-defined city buttons to fetch weather data for that location.
  - Type a location in the search input field and press Enter to fetch weather data for that location.
- The app will display the current weather conditions, temperature details, and hourly and daily forecasts for the selected location.
- You can toggle between metric and imperial units by clicking the "°C" or "°F" button.

## Dependencies

- **luxon**: A library for working with dates and times.
- **react-toastify**: A library for displaying notifications.
- **react-icons**: A library for using icons in React components.

The project also uses several development dependencies for linting, formatting, and building the application.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License.
