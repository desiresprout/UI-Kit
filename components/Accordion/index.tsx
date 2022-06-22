import React, { useState, useCallback, Children, FC } from 'react';
import AccordionPanel from './AccordionPanel';
import { styled } from '@utils/stitchesConfig';
import { AccordionContext } from './context';

interface AccordionProps {
  multiple?: boolean;
  onChange?: (index: number[]) => void;
  children: React.ReactNode;
}

const Accordion: FC<AccordionProps> = ({ multiple, onChange, children }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const getContext = useCallback(
    (currentIndex: number) => {
      const onPanelChange = (index: number) => {
        let nextActiveIndexes = [...(activeIndexes || [])];

        const nextActiveIndex = nextActiveIndexes.indexOf(index);

        if (nextActiveIndex > -1) {
          nextActiveIndexes.splice(nextActiveIndex, 1);
        } else if (multiple) {
          nextActiveIndexes.push(index);
        } else {
          nextActiveIndexes = [index];
        }

        setActiveIndexes(nextActiveIndexes);
        if (onChange) {
          onChange(nextActiveIndexes);
        }
      };
      return {
        multiple: multiple,
        isActive: activeIndexes.indexOf(currentIndex) > -1,
        onPanelChange: () => onPanelChange(currentIndex),
      };
    },
    [activeIndexes, multiple, onChange]
  );

  return (
    <StyledAccordion>
      {Children.toArray(children).map((child, index) => {
        return (
          <AccordionContext.Provider key={index} value={getContext(index)}>
            {child}
          </AccordionContext.Provider>
        );
      })}
    </StyledAccordion>
  );
};

const StyledAccordion = styled('div', {
  borderRadius: '2px',
  borderColor: '#fafafa',
  borderBottom: '0',
  border: '1px solid #d9d9d9',
  outline: 'none',
  backgroundColor: '#fafafa',
});

export { Accordion, AccordionPanel };
