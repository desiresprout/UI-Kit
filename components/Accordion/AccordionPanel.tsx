import React, { useContext, FC } from 'react';
import { styled } from '@utils/stitchesConfig';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AccordionContext } from './context';

interface AccordionPanelProps {
  title?: string;
  children?: React.ReactNode;
}

export const AccordionPanel: FC<AccordionPanelProps> = ({ title, children }) => {
  const { multiple, isActive, onPanelChange } = useContext(AccordionContext);

  return (
    <StyledAccordionPanel tabIndex={0}>
      <h3>
        <button type="button" aria-expanded={isActive} onClick={onPanelChange}>
          <span>{title}</span>
          {isActive ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
        </button>
      </h3>
      {
        <StyledContent isActive={isActive} {...(multiple ? { role: 'region' } : undefined)}>
          {children}
        </StyledContent>
      }
    </StyledAccordionPanel>
  );
};

const StyledAccordionPanel = styled('div', {
  borderBottom: '1px solid #d9d9d9',
  h3: {
    borderRadius: '5px 5px 0 0',
    lineHeight: '1.4',
    fontSize: '1.125rem',
  },

  button: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: '1rem',
    padding: '1em 1.5em',
    textAlign: 'left',
    background: 'none',
    outline: 'none',
    border: 'none',
  },
});

const StyledContent = styled('div', {
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'all 0.2s ease-in-out',
  variants: {
    isActive: {
      true: {
        padding: '1em 1.5em',
        maxHeight: '300px',
        overflow: 'initial',
      },
    },
  },
});

export default AccordionPanel;
