import React from "react";

//style
import { Container, DescriptionContainer, Image, Title } from "./card.style";

const Card = ({
  image,
  description1,
  title,
  description2,
  type,
  label1,
  label2,
}) => {
  return (
    <Container>
      {type === "movie" && <Image src={image} alt={description1} />}
      <Title>{title}</Title>
      <DescriptionContainer>
        <p>{label1}</p>
        <p>{description1}</p>
        <p>{label2}</p>
        <p>{description2}</p>
      </DescriptionContainer>
    </Container>
  );
};

export default Card;
