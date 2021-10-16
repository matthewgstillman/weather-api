import React from "react";

const Fahrenheit = () => {
  return (
    <div>
      <ReactWeather
        forecast="today"
        unit="imperial"
        apikey={process.env.REACT_APP_API_KEY}
        type="city"
        city="Salt Lake City"
      />
    </div>
  );
};

export default Fahrenheit;
