const initialState = {
  weather: [],
  updateData: false,
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, weather: action.response, loading: action.loading };
    case "UPDATE_DATA":
      return { ...state, updateData: true };
    default:
      return state;
  }
}
