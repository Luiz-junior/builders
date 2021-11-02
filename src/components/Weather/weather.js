import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";

import { Container, HelloText, TemperatureText, TempMinAndMax } from "./styles";

const Weather = ({ temp, tempMin, tempMax, weatherDescription }) => {
  return (
    <Container>
      <HelloText>Bom dia user!</HelloText>
      <Image
        source={require("../../../assets/wheater-img.png")}
        testID="weather-img"
      />

      <TemperatureText testID="temp-text">{temp.toFixed(0)} °C</TemperatureText>

      <TempMinAndMax testID="description-text">
        {weatherDescription}
      </TempMinAndMax>
      <TempMinAndMax testID="temp-min-max-text">
        {tempMin.toFixed(0)}°C / {tempMax.toFixed(0)}°C
      </TempMinAndMax>
    </Container>
  );
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default Weather;
