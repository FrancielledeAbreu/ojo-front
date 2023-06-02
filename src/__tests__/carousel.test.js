import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createRoot } from "react-dom";
import Carousel from "../components/carousel/carousel";

describe("Carousel", () => {
  test("renders correctly", () => {
    const data = [
      {
        episode_id: 1,
        title: "Movie 1",
        director: "Director 1",
        created: "Created 1",
      },
      {
        episode_id: 2,
        title: "Movie 2",
        director: "Director 2",
        created: "Created 2",
      },
      {
        episode_id: 3,
        title: "Movie 3",
        director: "Director 3",
        created: "Created 3",
      },
    ];

    render(
      <Carousel data={data} type="movie" label1="Label 1" label2="Label 2" />
    );

    const movie1TitleElement = screen.getByText("Movie 1");
    expect(movie1TitleElement).toBeInTheDocument();

    const movie1DirectorElement = screen.getByText("Director 1");
    expect(movie1DirectorElement).toBeInTheDocument();

    const movie1CreatedElement = screen.getByText("Created 1");
    expect(movie1CreatedElement).toBeInTheDocument();

    const movie1ImageElement = screen.getByAltText("Created 1");
    expect(movie1ImageElement).toBeInTheDocument();

    const nextButtonElement = screen.getByTestId("next-button");
    fireEvent.click(nextButtonElement);

    const movie2TitleElement = screen.getByText("Movie 2");
    expect(movie2TitleElement).toBeInTheDocument();

    const movie2DirectorElement = screen.getByText("Director 2");
    expect(movie2DirectorElement).toBeInTheDocument();

    const movie2CreatedElement = screen.getByText("Created 2");
    expect(movie2CreatedElement).toBeInTheDocument();
  });
});
