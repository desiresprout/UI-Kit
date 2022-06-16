import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Alert from '@components/Alert';

export default {
  title: 'components/Alert',
  argTypes: {
    type: {
      description: 'Alert type',
      control: { type: 'select' },
    },
    description: {
      description: 'Alert description',
      control: { type: 'text' },
    },
  },
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Alert type={'error'} {...args} />
      <Alert type={'success'} {...args} />
      <Alert type={'info'} {...args} />
      <Alert type={'warning'} {...args} />
    </div>
  );
};

export const AlertTemplate = Template.bind({});

AlertTemplate.args = {
  message: 'This is an alert message',
  description: 'This is an description',
};
