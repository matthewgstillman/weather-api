import "./App.css";
import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import OpenWeather from "./components/OpenWeather";
import Fahrenheit from "./components/OpenWeather";
import FormComponent from "./components/FormComponent";
import FiveDayForecast from "./components/FiveDayForecast";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

// import Weather from "./components/Weather";

function App(cityName, stateName) {
  const [city, setCity] = useState("Salt Lake City");

  const [usState, setUsState] = useState("UT");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(
      `Form Data: City is: ${JSON.stringify(
        data.cityName
      )}\nState is: ${JSON.stringify(data.stateName)}`
    );
    // alert(JSON.stringify(data));
    setCity(data.cityName);
    setUsState(data.stateName);
    // console.log(`State Name from data is: ${data.stateName}`);
    cityName = city;
    stateName = usState;
  };

  console.log(
    `city: ${JSON.stringify(city)}, usState: ${JSON.stringify(usState)}`
  );

  // cityName = city;
  // stateName = usState;

  console.log(
    `City NAME: ${JSON.stringify(cityName)} State NAME: ${JSON.stringify(
      stateName
    )}`
  );

  return (
    <div>
      <Weather cityName={city} stateName={stateName} />
      {/* <OpenWeather cityName={cityName} /> */}
      <div className="App">
        <h1>Get Your Local Weather</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="cityName">City Name</label>
            <input placeholder="Enter Your City " {...register("cityName")} />
          </div>
          <div>
            <label htmlFor="stateName">State Name</label>
            {/* <input placeholder="Enter Your State " {...register("stateName")} /> */}
            <select name="stateName" {...register("stateName")}>
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="DC">DC</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
      {/* <FormComponent></FormComponent> */}
      {/* <Fahrenheit /> */}
      {/* <FiveDayForecast cityName={city} /> */}
      {/* <WeatherBit /> */}
    </div>
  );
}

export default App;
