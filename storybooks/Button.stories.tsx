import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@components/Button';

export default {
  title: 'components/Button',
  argTypes: {
    label: {
      description: 'button title',
      control: { type: 'text' },
    },
    variant: {
      options: ['primary', 'danger'],
      description: 'button variant',
      control: { type: 'select' },
    },
    size: {
      options: ['medium', 'large'],
      description: 'button size',
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Error = Template.bind({});

Primary.args = {
  label: 'Primary',
  variant: 'primary',
  onClick: () => alert('클릭되었습니다'),
};

Error.args = {
  label: 'Danger',
  variant: 'danger',
  onClick: () => alert('클릭되었습니다'),
};
