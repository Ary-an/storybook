import { Box } from "@material-ui/core";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/center/Center";

// addDecorator((story) => <Center>{story()}</Center>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <Center>
      <Box m={12}>
        <Story />
      </Box>
    </Center>
  ),
];
