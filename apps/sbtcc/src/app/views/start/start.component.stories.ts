import type { Meta, StoryObj } from '@storybook/angular';
import { StartComponent } from './start.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StartComponent> = {
  component: StartComponent,
  title: 'HomeComponent',
};
export default meta;
type Story = StoryObj<StartComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/This is the Home View/gi)).toBeTruthy();
  },
};
