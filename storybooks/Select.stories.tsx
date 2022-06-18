import React from 'react';
import Select from '@components/Select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default {
  title: 'components/Select',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  component: Select,
};

export const Template = () => {
  const onChange = (label: string, value: string) => {
    console.log(label);
    console.log(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Select options={options} />
      <Select defaultValue={options[0]} options={options} onChange={onChange} />
    </div>
  );
};
