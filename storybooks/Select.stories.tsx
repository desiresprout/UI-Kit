import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '@components/Select';

const options = [
  {
    label: '에이',
    value: 'a',
  },
  {
    label: '비',
    value: 'b',
  },
];

export default {
  title: 'components/Select',
  argTypes: {
    options: {
      options: ['비', '에이'],
      description: 'button variant',
      control: { type: 'select' },
    },
  },
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
// export const Error = Template.bind({});

Primary.args = {
  options,
};
