import "@rooney/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "@rooney/react-components-layout";

const meta: Meta<typeof Heading> = {
  title: "React Components/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "안녕하세요!",
    fontSize: "xl",
  },
};
