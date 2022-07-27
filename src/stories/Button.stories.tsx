import { ComponentMeta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event'

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


export const Primary: StoryObj = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({canvasElement}) => {
    const { getByRole } = within(canvasElement);
    await userEvent.click(getByRole('button'));
  }
};
