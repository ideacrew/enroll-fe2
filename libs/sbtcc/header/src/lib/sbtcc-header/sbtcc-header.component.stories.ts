// import type { Meta, StoryObj } from '@storybook/angular';
// import imageFile from '../assets/covermelogo.svg';
// import { SbtccHeaderComponent } from './sbtcc-header.component';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

// const meta: Meta<typeof SbtccHeaderComponent> = {
//   component: SbtccHeaderComponent,
//   title: 'SbtccHeaderComponent',
// };
// export default meta;
// type Story = StoryObj<typeof SbtccHeaderComponent>;

// const image = {
//   src: imageFile,
//   alt: 'Cover Me Logo',
// };

// // Assume image.png is located in the "public" directory.
// export const WithAnImage: Story = {
//   render: () => <img src="/covermelogo.svg" alt="{image.alt}" />,
// };

// export const Primary: Story = {
//   args: {},
// };

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(
//       canvas.getByText(/Small Business Tax Credit Calculator/gi),
//     ).toBeTruthy();
//   },
// };

import type { Meta, StoryObj } from '@storybook/angular';
import { SbtccHeaderComponent } from './sbtcc-header.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SbtccHeaderComponent> = {
  component: SbtccHeaderComponent,
};

export default meta;
type Story = StoryObj<SbtccHeaderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(
      canvas.getByText(/Small Business Tax Credit Calculator/gi),
    ).toBeTruthy();
  },
};

const image = {
  src: 'covermelogo.svg',
  alt: 'Cover Me Logo',
};

export const WithAnImage: Story = {
  render: () => ({
    props: {
      src: image.src,
      alt: image.alt,
    },
    template: `<img src="{{src}}" alt="{{alt}}" />`,
  }),
};
