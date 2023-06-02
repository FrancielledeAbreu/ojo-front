import React, { useState } from "react";

//locals
import Card from "../card/card";
import { imageMapping } from "../../utils/images";

const Carousel = ({ data, type }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = startIndex + 3;
    setStartIndex(nextIndex >= data.length ? 0 : nextIndex);
  };

  const visibleData = data.slice(startIndex, startIndex + 3);

  return (
    <div>
      {visibleData.map((item, index) => (
        <Card
          key={index}
          image={imageMapping[item.episode_id]}
          name={type === "movie" ? item.director : item.name}
          title={item.title}
          date={item.created}
          type={type}
        />
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
