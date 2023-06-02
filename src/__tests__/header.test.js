import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/header";

describe("Header", () => {
  test("renders correctly", () => {
    render(<Header />);

    const titleElement = screen.getByText("Star Wars Universe");
    expect(titleElement).toBeInTheDocument();

    const searchElement = screen.getByPlaceholderText("Pesquisar Personagens");
    expect(searchElement).toBeInTheDocument();
  });
});
