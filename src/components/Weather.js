import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import FormComponent from "./FormComponent";

const Weather = (cityName) => {
  const [weatherData, setWeatherData] = useState([{}]);
  const [date, setDate] = useState("");
  // const [location, setLocation] = useState([
  //   {
  //     city: cityName,
  //     state: stateName,
  //   },
  // ]);

  // const urlState = cityName.stateName;
  // console.log(`URL State: ${urlState}`);

  console.log(`City Name from App.js: ${JSON.stringify(cityName)}`);

  // console.log(`Location: ${JSON.stringify(location)}`);

  console.log(
    `City Name: ${JSON.stringify(cityName)} State Name: ${JSON.stringify(
      cityName.stateName
    )}`
  );
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.cityName}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`;
  console.log(`URL: ${url}`);
  useEffect(() => {
    getDate();
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, [url]);

  const getDate = () => {
    let newDate = new Date();
    let dateString = newDate.toDateString();
    dateString = dateString.slice(0, 10);
    setDate(dateString);
    return dateString;
  };

  //Temperature, Pressure and Humidity
  const mainWeather = weatherData["main"];
  const temperature = Math.round(mainWeather["temp"]);
  const feelsLike = Math.round(mainWeather["feels_like"]);
  const lowTemp = Math.round(mainWeather["temp_min"]);
  const highTemp = Math.round(mainWeather["temp_max"]);
  const pressure = mainWeather["pressure"];
  const humidity = mainWeather["humidity"];

  // //   Weather Type
  const weatherType = weatherData["weather"][0];
  const weatherStatus = weatherType["main"];
  const weatherDescription = weatherType["description"];

  // //   Wind
  const wind = weatherData["wind"];
  const windSpeed = Math.round(wind["speed"]);
  const windDeg = wind["deg"];
  const windGust = wind["gust"];

  // //Visibility
  const visibility = weatherData["visibility"];

  return (
    <div>
      <h1>Weather</h1>
      <Container
        style={{ border: "2px solid black", backgroundColor: "#008080" }}
        fluid
      >
        <Row>
          <Col>
            <h2>{cityName.cityName}</h2>
            <h3>{date}</h3>
            <hr></hr>
            <h1>{temperature} F</h1>
            {weatherDescription}
            <hr></hr>
            <h3>Wind: {windSpeed} MPH</h3>
            <h3>Humidty: {humidity}%</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Weather;
