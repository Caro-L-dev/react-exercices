interface WeatherProps {
  city?: string;
  country?: string;
  description?: string;
  error?: string;
  temperature?: string;
}

const Weather: React.FC<WeatherProps> = (props) => {
  const { city, country, description, error, temperature } = props;

  return (
    <>
      {city && country && (
        <p>
          {city}, {country}
        </p>
      )}
      {temperature && <p>{temperature}</p>}
      {description && <p>{description}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default Weather;
