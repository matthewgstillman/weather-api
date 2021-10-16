import React, { useState } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const OpenWeather = () => {
  const [coords, setCoords] = useState({
    lat: "40.773543",
    lng: "-111.874551",
  });

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: process.env.REACT_APP_API_KEY,
    lat: coords.lat,
    lon: coords.lng,
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };

  return (
    <ReactWeather
      theme={customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Salt Lake City"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
  );
};

export default OpenWeather;
