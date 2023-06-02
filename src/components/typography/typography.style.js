import styled from "styled-components";

export const StyledWordWithLines = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
`;

export const Line = styled.span`
  flex-grow: 1;
  height: 3px;
  background-color: #000;
`;

export const Word = styled.span`
  padding: 0 10px;
`;
