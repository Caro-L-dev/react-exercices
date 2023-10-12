import { useState } from "react";
import Form from "./Form";

export default function ThirdModule() {
  const [weather, setWeather] = useState([]);
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

  async function fetchData(event: React.FormEvent) {
    event.preventDefault();
    const apiData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => data);
    setWeather({
      data: apiData,
    });
  }
  return (
    <>
      <h3>Application Météo</h3>
      <Form getWeather={fetchData} />
      {console.log(weather.data)}
    </>
  );
}
