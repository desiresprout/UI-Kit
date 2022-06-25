import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch from '@components/Switch';

export default {
  title: 'components/Switch',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
      <Switch defaultChecked={true} label={'토글 스위치'} />
      <Switch />
    </div>
  );
};

export const SwitchTemplate = Template.bind({});
