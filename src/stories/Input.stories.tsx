import {Input} from './Input';
import {userEvent, within} from '@storybook/testing-library';
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
