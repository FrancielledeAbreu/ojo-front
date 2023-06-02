import React from "react";

//style
import { Container, Spinner } from "./loadingSpinner.style";

const LoadingSpinner = () => {
  return (
    <Container data-testid="loading-spinner-container">
      <Spinner data-testid="loading-spinner-spinner" />
    </Container>
  );
};

export default LoadingSpinner;
