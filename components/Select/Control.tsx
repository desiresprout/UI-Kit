import React, { FC, ComponentProps } from 'react';
import { styled } from '@utils/stitchesConfig';

interface ControlProps extends ComponentProps<'div'> {
  isOptionOpen: boolean;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Control: FC<ControlProps> = ({ onMouseDown, isOptionOpen, children }) => {
  return (
    <StyledControl isOptionOpen={isOptionOpen} onMouseDown={onMouseDown}>
      {children}
    </StyledControl>
  );
};

const StyledControl = styled('div', {
  padding: '11px 14px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  variants: {
    isOptionOpen: {
      true: {
        border: '3px solid $primary',
        boxShadow: '0 0 0 1px $primary',
        zIndex: '10',
      },
      false: {
        border: '1px solid $borderColor',
        boxShadow: '0 0 0 1px $borderColor',
        zIndex: 'auto',
      },
    },
  },
  borderRadius: '4px',
  outline: 0,
  cursor: 'pointer',

  '& > div': {
    padding: '2px 8px',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
});

export default Control;
