import Typography from "../components/typography/typography";

export default {
  title: "Components/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    text: "Movies",
  },
};
