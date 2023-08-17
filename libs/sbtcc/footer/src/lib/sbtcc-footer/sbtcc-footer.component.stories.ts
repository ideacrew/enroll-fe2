import type { Meta, StoryObj } from '@storybook/angular';
import { SbtccFooterComponent } from './sbtcc-footer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SbtccFooterComponent> = {
  component: SbtccFooterComponent,
  title: 'SbtccFooterComponent',
};
export default meta;
type Story = StoryObj<SbtccFooterComponent>;

export const Primary: Story = {
  name: 'default',
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/CoverME.gov - All Rights Reserved./gi),
    ).toBeTruthy();
  },
};
