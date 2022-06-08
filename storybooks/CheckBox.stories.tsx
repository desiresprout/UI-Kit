import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '@components/CheckBox';

export default {
  title: 'components/CheckBox',
  argTypes: {
    label: {
      description: 'checkbox label',
      control: { type: 'text' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'select' },
    },
  },
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = ({ disabled, label, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const onChange = (checkedValue: boolean) => {
    setChecked(checkedValue);
  };

  return <CheckBox checked={checked} disabled={disabled} onChange={onChange} label={label} />;
};

export const defaultCheckBox = Template.bind({});
export const checkBox = Template.bind({});
export const disableCheckBox = Template.bind({});

defaultCheckBox.args = {
  label: 'checkbox',
};

checkBox.args = {
  defaultChecked: true,
  label: 'checkbox123123123213',
};

disableCheckBox.args = {
  checked: true,
  label: 'checkbox',
  disabled: true,
};
