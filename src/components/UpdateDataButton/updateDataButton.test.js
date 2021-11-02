import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import UpdateDataButton from "./updateDataButton";

describe("<UpdateDataButton />", () => {
  const mockFn = jest.fn();

  it("should render UpdateDataButton component correctly", () => {
    render(<UpdateDataButton handleUpdateData={mockFn} />);
  });

  it("should press UpdateDataButton", () => {
    const { getByText, getByTestId } = render(
      <UpdateDataButton handleUpdateData={mockFn} />
    );

    const textButton = getByText("Atualizar");
    const button = getByTestId("update-button");

    fireEvent.press(button);

    expect(textButton).not.toBeNull();
    expect(mockFn).toHaveBeenCalled();
  });
});
