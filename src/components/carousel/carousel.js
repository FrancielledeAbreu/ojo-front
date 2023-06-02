import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

//locals
import Card from "../card/card";
import { imageMapping } from "../../utils/images";

//styles
import { Button, Container, Main } from "./carousel.style";

const Carousel = ({ data, type, label1, label2 }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 3;
    setStartIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  const visibleData = data.slice(startIndex, startIndex + 3);

  return (
    <Main>
      <Container>
        {visibleData.map((item, index) => (
          <div>
            <Card
              key={index}
              label1={label1}
              label2={label2}
              image={imageMapping[item.episode_id]}
              description2={type === "movie" ? item.director : item.height}
              title={type === "movie" ? item.title : item.name}
              description1={type === "movie" ? item.created : item.birth_year}
              type={type}
            />
            {type === "movie" && (
              <Link to={`/movie-details/${item.episode_id}`} target="blanck">
                Details
              </Link>
            )}
          </div>
        ))}
      </Container>

      <Button onClick={handleNext} data-testid="next-button">
        <FaArrowRight size={24} color="#ffffff" />
      </Button>
    </Main>
  );
};

export default Carousel;
