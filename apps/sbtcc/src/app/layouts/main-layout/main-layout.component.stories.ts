import type { Meta, StoryObj } from '@storybook/angular';
import { MainLayoutComponent } from './main-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MainLayoutComponent> = {
  component: MainLayoutComponent,
  title: 'MainLayoutComponent',
};
export default meta;
type Story = StoryObj<MainLayoutComponent>;

export const Primary: Story = {
  name: 'Default',
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Small Business Tax Credit Calculator/gi),
    ).toBeTruthy();
  },
};
