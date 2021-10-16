import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const FormComponent = (cityName) => {
  const [city, setCity] = useState("Salt Lake City");

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(`Data is: \n ${JSON.stringify(data.cityName)}`);
    alert(JSON.stringify(data));
    setCity(data.cityName);
    cityName = city;
  };

  return (
    <div>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="cityName">City Name</label>
            <input placeholder="Enter Your City " {...register("cityName")} />
          </div>
          <input type="submit" />
        </form>
        {city}
      </div>
    </div>
  );
};

export default FormComponent;
