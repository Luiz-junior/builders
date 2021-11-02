import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";

import Header from "./header";

describe("<Header />", () => {
  it("should render Header component correctly", () => {
    render(<Header city="Barueri" />);
  });

  it("should have content in components", () => {
    const { getByTestId } = render(<Header city="Barueri" />);

    expect(getByTestId("place-img")).toHaveProp("source");
    expect(getByTestId("avatar-img")).toHaveProp("source");
  });
});
