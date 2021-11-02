import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import Weather from "./weather";

const mockData = {
  temp: 28,
  tempMin: 23,
  tempMax: 30,
  weatherDescription: "tempestade",
};

describe("<Weather />", () => {
  it("should render Weather component correctly", () => {
    render(<Weather {...mockData} />);
  });

  it("should have content in components", () => {
    const { queryByText, getByTestId } = render(<Weather {...mockData} />);

    expect(queryByText("Bom dia user!")).not.toBeNull();
    expect(getByTestId("weather-img")).toHaveProp("source");
    expect(getByTestId("temp-text")).not.toBeEmpty();
    expect(getByTestId("description-text")).not.toBeEmpty();
    expect(getByTestId("temp-min-max-text")).not.toBeEmpty();
  });
});
