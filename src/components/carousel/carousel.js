import React, { useState } from "react";

//locals
import Card from "../card/card";

const imageMapping = {
  1: require("../../assets/filmImages/episode_1.jpg"),
  2: require("../../assets/filmImages/episode_2.webp"),
  3: require("../../assets/filmImages/episode_3.jpg"),
  4: require("../../assets/filmImages/episode_4.webp"),
  5: require("../../assets/filmImages/episode_5.jpg"),
  6: require("../../assets/filmImages/episode_6.jpg"),
};

const Carousel = ({ data }) => {
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
          name={item.director}
          title={item.title}
          date={item.created}
        />
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
