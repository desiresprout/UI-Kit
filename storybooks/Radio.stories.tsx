import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '@components/Radio';

export default {
  title: 'components/Radio',
  argTypes: {
    label: {
      description: 'radio label',
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'select' },
    },
    value: {
      description: 'radio value',
      control: { type: 'text' },
    },
  },
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ label, value, disabled }) => {
  return <Radio label={label} disabled={disabled} value={value} />;
};

// export const defaultCheckBox = Template.bind({});
export const radioTemplate = Template.bind({});
export const disableTemplate = Template.bind({});

radioTemplate.args = {
  label: '라디오버튼',
  value: 1,
};

disableTemplate.args = {
  label: 'disabled 라디어버튼',
  disabled: true,
};
