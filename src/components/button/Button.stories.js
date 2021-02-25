import React from "react";
import Center from "../center/Center";
import Button from "./Button";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary",
  children: "Primary Button",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Button",
};

export const SuccessA = Template.bind({});

SuccessA.args = {
  variant: "success",
  // children: "Success Button",
};

export const DangerA = Template.bind({});

DangerA.args = {
  variant: "danger",
  // children: "Danger Button",
};
