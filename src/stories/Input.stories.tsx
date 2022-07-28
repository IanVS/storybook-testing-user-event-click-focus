import {Input} from './Input';
import {within} from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import { StoryObj } from '@storybook/react';

export default {
  component: Input,
};

export const Focused: StoryObj = {
  play: async ({canvasElement}) => {
    const {findByRole} = within(canvasElement);
    await userEvent.click(await findByRole('textbox'));
    userEvent.paste('foo')
  }
}
