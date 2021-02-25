const { Button } = require("@material-ui/core");

export default {
  title: "Materail/Button",
  components: Button,
  args: {
    variant: "contained",
    color: "primary",
  },
  argsType: {
    children: { control: "text" },
    variant: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Primary Button",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  color: "secondary",
  children: "Secondary Button",
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: "outlined",
  children: "Outlined Button",
};
