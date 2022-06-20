import React, { useState } from 'react';
import CheckBox from '@components/CheckBox';

export default {
  title: 'components/CheckBox',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  component: CheckBox,
};

export const CheckBoxTemplate = () => {
  const [isChecked, setChecked] = useState(true);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', height: '500px' }}>
      <CheckBox label={'label'} checked={isChecked} onChange={handleChange} />
      <CheckBox defaultChecked={isChecked} onChange={handleChange} />
    </div>
  );
};
