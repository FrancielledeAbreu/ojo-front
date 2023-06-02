import Carousel from "../components/carousel/carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    data: [
      {
        episode_id: 1,
        title: "Movie 1",
        created: 2020,
        director: "Director",
      },
      {
        episode_id: 2,
        title: "Movie 2",
        created: 2020,
        director: "Director",
      },
      {
        episode_id: 3,
        title: "Movie 3",
        created: 2020,
        director: "Director",
      },
    ],
    type: "movie",
    label1: "Label 1",
    label2: "Label 2",
  },
};
