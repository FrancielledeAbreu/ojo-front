import React from "react";
import { render } from "@testing-library/react";
import Typography from "../components/typography/typography";

describe("Typography", () => {
  test("renders correctly", () => {
    const text = "Example Text";
    const { getByTestId, getByText } = render(
      <Typography text={text} data-testid="typography" />
    );

    const typographyElement = getByTestId("typography");
    expect(typographyElement).toBeInTheDocument();

    const textElement = getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
