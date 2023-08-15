import type { Meta, StoryObj } from '@storybook/angular';
import { PageTwoComponent } from './page-two.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PageTwoComponent> = {
  component: PageTwoComponent,
  title: 'PageTwoComponent',
};
export default meta;
type Story = StoryObj<PageTwoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/page-two works!/gi)).toBeTruthy();
  },
};
