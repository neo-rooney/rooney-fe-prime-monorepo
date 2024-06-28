import "@rooney/react-components-layout/style.css";

import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@rooney/react-components-layout";

const meta: Meta<typeof Text> = {
  title: "React Components/Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "안녕하세요!",
    fontSize: "xl",
  },
};
