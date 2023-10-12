import { useState, useEffect } from "react";
import axios from "axios";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    description: string;
  }[];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
}

const Weather = () => {
  const [APIKEY] = useState(import.meta.env.VITE_WEATHER_API_KEY);

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (city === "") return;

    // 401 error because it's an free trial.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data as WeatherData);
      })
      .catch((error) => {
        console.error("Une erreur s'est produite : ", error);
        setWeatherData(null);
      });
  }, [city, APIKEY]);

  return (
    <>
      <input
        className="border border-2 border-indigo-500"
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {weatherData && (
        <div>
          <h2>
            Météo pour {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temps : {weatherData.weather[0].description}</p>
          <p>Température : {weatherData.main.temp} °C</p>
          <p>Humidité : {weatherData.main.humidity} %</p>
          <p>Pression : {weatherData.main.pressure} hPa</p>
        </div>
      )}
    </>
  );
};

export default Weather;
