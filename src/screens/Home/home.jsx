import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { ToastAndroid } from "react-native";

import { Container } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { getWeather, onUpdateData } from "../../store/actions/weatherAction";

import Weather from "../../components/Weather/weather";
import UpdateDataButton from "../../components/UpdateDataButton/updateDataButton";
import Header from "../../components/Header/header";

const Home = ({ location }) => {
  const dispatch = useDispatch();

  const { weather, updateData } = useSelector((state) => state.weatherReducer);

  useEffect(() => {
    dispatch(getWeather(location.latitude, location.longitude));
  }, []);

  useEffect(() => {
    if (updateData) dispatch(getWeather(location.latitude, location.longitude));
  }, [updateData]);

  const handleUpdateData = () => {
    dispatch(onUpdateData());
  };

  return (
    <Container>
      {weather.main && (
        <>
          <Header city={weather.name} />
          <Weather
            temp={weather.main.temp}
            tempMin={weather.main.temp_min}
            tempMax={weather.main.temp_max}
            weatherDescription={weather.weather[0].description}
          />

          <UpdateDataButton handleUpdateData={handleUpdateData} />
          {updateData &&
            ToastAndroid.show(
              "Informações de clima atualizados :D",
              ToastAndroid.SHORT
            )}
        </>
      )}
    </Container>
  );
};

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
