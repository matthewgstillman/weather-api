import React, { useEffect, useState } from "react";

const FiveDayForecast = (cityName) => {
  console.log(cityName);
  const [location, setLocation] = useState("Salt Lake City");
  const [forecast, setForecast] = useState([
    {
      date: "",
      time: "",
      current: "",
      feelsLike: "",
    },
  ]);

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;

  useEffect(() => {
    // getDate();
    fetch(url)
      .then((res) => res.json())
      .then((data) => setForecast(data));
  }, [url]);
  //   console.log(`Forecast: ${Object.keys(forecast)}`);

  const weatherList = forecast["list"];
  console.log(weatherList);
  weatherList.map((item) => {
    console.log(`Item: ${item}`);
    const date = item["dt_txt"].substring(6, 10);
    const hour = item["dt_txt"].substring(11, 16);
    console.log(`Date: ${date}, Hour: ${hour}`);
    const hourlyTemp = Math.round(item["main"]["temp"]);
    console.log(`Hourly Temp: ${hourlyTemp}`);
    const hourlyFeelsLike = Math.round(item["main"]["feels_like"]);
    setForecast([
      {
        date: date,
        time: hour,
        current: hourlyTemp,
        feelsLike: hourlyFeelsLike,
      },
    ]);
  });
  console.log(`Weather List Keys: ${Object.keys(weatherList)}`);
  const weatherListDT = weatherList[0]["dt"];
  const mainList = weatherList["main"];
  console.log(`Main List: ${mainList}`);
  return (
    <div>
      <h3>Forecast</h3>
    </div>
  );
};

export default FiveDayForecast;
