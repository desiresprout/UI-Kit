import React, { FC } from 'react';
import { styled } from '@utils/stitchesConfig';
import { IOption } from './types';

interface OptionProps {
  options: IOption[];
  isOptionOpen: boolean;
  onSelectOption: (label: string, value: string) => void;
}

const Option: FC<OptionProps> = ({ options, isOptionOpen, onSelectOption }) => {
  const handleClick =
    (label: string, value: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      onSelectOption(label, value);
      e.stopPropagation();
    };

  return (
    <StyledOption isOptionOpen={isOptionOpen}>
      <ul>
        {options.map((option, idx) => (
          <li key={idx} tabIndex={idx} onClick={handleClick(option.label, option.value)}>
            {option.label}
          </li>
        ))}
      </ul>
    </StyledOption>
  );
};

const StyledOption = styled('div', {
  position: 'absolute',
  top: '100%',
  width: '100%',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 11px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  variants: {
    isOptionOpen: {
      true: {
        zIndex: '20',
      },
      false: {
        zIndex: 'auto',
      },
    },
  },
  ul: {
    background: '#fff',
  },
  li: {
    listStyle: 'none',
    padding: '15px 15px',
    color: 'black',
    userSelect: 'none',

    '&:hover': {
      cursor: 'pointer',
      background: '#deebff',
      color: 'rgba(10, 20, 20, 0.9)',
      fontWeight: '400',
    },

    '&:last-child': {
      borderBottom: '0 none',
    },
  },
});

export default Option;
