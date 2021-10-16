import React from "react";
import ReactWeather, { useWeatherBit } from "react-open-weather";

const WeeatherBit = () => {
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "YOUR-API-KEY",
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "M", // values are (M,S,I)
  });

  return (
    <div>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Munich"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
      />
    </div>
  );
};

export default WeeatherBit;
