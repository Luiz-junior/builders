import Constants from "expo-constants";

import api from "../../services/api";

export const getWeather = (latitude, longitude) => {
  const paramsUrl = `weather?lat=${latitude}&lon=${longitude}&lang=pt_br&units=metric&appid=${Constants.manifest.extra.apiKey}`;

  return async (dispatch) => {
    const response = await api.get(paramsUrl);

    try {
      dispatch({
        type: "GET_WEATHER",
        response: response.data,
        loading: false,
      });
    } catch (error) {
      dispatch({ type: "ERROR", errorStatus: response.data, loading: false });
    }
  };
};

export const onUpdateData = () => {
  return {
    type: "UPDATE_DATA",
  };
};
