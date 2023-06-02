import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

describe("LoadingSpinner", () => {
  test("renders correctly", () => {
    render(<LoadingSpinner />);

    const containerElement = screen.getByTestId("loading-spinner-container");
    expect(containerElement).toBeInTheDocument();

    const spinnerElement = screen.getByTestId("loading-spinner-spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
