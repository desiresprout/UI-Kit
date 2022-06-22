import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, AccordionPanel } from '@components/Accordion';

export default {
  title: 'components/Accordion',
  argTypes: {
    multiple: {
      options: [true, false],
    },
  },
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = ({ multiple }) => {
  const onChange = React.useCallback((index: number[]) => {
    console.log(index);
  }, []);

  return (
    <div>
      <Accordion multiple={multiple} onChange={onChange}>
        <AccordionPanel title="panel header1">
          <p>panel contents</p>
        </AccordionPanel>
        <AccordionPanel title="panel header2">
          <p>panel contents</p>
        </AccordionPanel>
        <AccordionPanel title="panel header3">
          <p>panel contents</p>
        </AccordionPanel>
        <AccordionPanel title="panel header3">
          <p>panel contents</p>
        </AccordionPanel>
        <AccordionPanel title="panel header3">
          <p>panel contents</p>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export const AccordionTemplate = Template.bind({});
export const AccordionMultipleTemplate = Template.bind({});

AccordionTemplate.args = {};
AccordionMultipleTemplate.args = {
  multiple: true,
};
