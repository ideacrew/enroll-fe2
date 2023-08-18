import type { Meta, StoryObj } from '@storybook/angular';
import { TaxExemptionComponent } from './tax-exemption.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TaxExemptionComponent> = {
  component: TaxExemptionComponent,
  title: 'PageTwoComponent',
};
export default meta;
type Story = StoryObj<TaxExemptionComponent>;

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
