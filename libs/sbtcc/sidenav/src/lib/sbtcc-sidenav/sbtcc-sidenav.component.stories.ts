import type { Meta, StoryObj } from '@storybook/angular';
import { SbtccSidenavComponent } from './sbtcc-sidenav.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SbtccSidenavComponent> = {
  component: SbtccSidenavComponent,
  title: 'SbtccSidenavComponent',
};
export default meta;
type Story = StoryObj<SbtccSidenavComponent>;

export const Primary: Story = {
  name: 'default',
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Progress/gi)).toBeTruthy();
    expect(canvas.getByText(/Start Over/gi)).toBeTruthy();
    expect(canvas.getByText(/Return Home/gi)).toBeTruthy();
  },
};
