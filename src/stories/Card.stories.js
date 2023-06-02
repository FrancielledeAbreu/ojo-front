import Card from "../components/card/card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    image: {
      control: "text",
      defaultValue: "/image.jpg",
    },
    description1: {
      control: "text",
      defaultValue: "Description 1",
    },
    title: {
      control: "text",
      defaultValue: "Card Title",
    },
    description2: {
      control: "text",
      defaultValue: "Description 2",
    },
    type: {
      control: "text",
      defaultValue: "movie",
    },
    label1: {
      control: "text",
      defaultValue: "Label 1",
    },
    label2: {
      control: "text",
      defaultValue: "Label 2",
    },
  },
};

export const Default = (args) => <Card {...args} />;
Default.storyName = "Default";
