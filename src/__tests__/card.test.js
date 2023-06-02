import React from "react";
import { render } from "@testing-library/react";
import Card from "../components/card/card";

describe("Card", () => {
  test("renders correctly", () => {
    const props = {
      image: "path/to/image",
      description1: "Description 1",
      title: "Card Title",
      description2: "Description 2",
      type: "movie",
      label1: "Label 1",
      label2: "Label 2",
    };

    const { getByText, getByAltText } = render(<Card {...props} />);

    const imageElement = getByAltText("Description 1");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toContain("path/to/image");

    const titleElement = getByText("Card Title");
    expect(titleElement).toBeInTheDocument();

    const description1Element = getByText("Description 1");
    expect(description1Element).toBeInTheDocument();

    const description2Element = getByText("Description 2");
    expect(description2Element).toBeInTheDocument();

    const label1Element = getByText("Label 1");
    expect(label1Element).toBeInTheDocument();

    const label2Element = getByText("Label 2");
    expect(label2Element).toBeInTheDocument();
  });
});
