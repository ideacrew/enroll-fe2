import type { Meta, StoryObj } from '@storybook/angular';
import { EmployeesComponent } from './employees.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EmployeesComponent> = {
  component: EmployeesComponent,
  title: 'PageThreeComponent',
};
export default meta;
type Story = StoryObj<EmployeesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/page-three works!/gi)).toBeTruthy();
  },
};
