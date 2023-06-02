import React from "react";
import { Line, StyledWordWithLines, Word } from "./typography.style";

const Typography = ({ text }) => {
  return (
    <StyledWordWithLines>
      <Line />
      <Word>{text}</Word>
      <Line />
    </StyledWordWithLines>
  );
};

export default Typography;
