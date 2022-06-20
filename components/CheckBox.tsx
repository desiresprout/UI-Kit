import React, { FC, ComponentProps, useCallback } from 'react';
import { styled } from '@utils/stitchesConfig';

export interface CheckBoxProps extends Omit<ComponentProps<'input'>, 'onChange'> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ label, checked, disabled, defaultChecked, onChange }) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const checkedValue = e.target.checked;
      onChange?.(checkedValue);
    },
    [onChange]
  );

  return (
    <CheckBoxContainer disabled={disabled}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <StyledCheckBox checked={checked} defaultChecked={defaultChecked} />
      <span className="label">{label}</span>
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  paddingLeft: '15px',
  fontSize: '14px',
  input: {
    height: 0,
    zIndex: 1,
    opacity: 0,
  },
  '& .label': {
    lineHeight: '1.5',
  },
  variants: {
    disabled: {
      true: {
        color: '$disabledFontColor',
        cursor: 'not-allowed',
        userSelect: 'none',
      },
    },
  },

  '&:disabled': {
    border: '1px solid $disabledBorderColor',
    backgroundColor: '$disabledBackgroundColor',
    color: '$disabledFontColor',
    cursor: 'not-allowed',
    userSelect: 'none',
  },
});

const StyledCheckBox = styled('span', {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'inline-block',
  width: '20px',
  height: '20px',
  border: '1px solid $disabledBorderColor',
  variants: {
    checked: {
      true: {
        background: '$primary',
        '&::after': {
          background: '$primary',
          content: ' ',
          display: 'block',
          width: '6px',
          height: '10px',
          transform: 'rotate(45deg)',
          position: 'absolute',
          left: '6px',
          top: '2px',
          border: '2px solid white',
          borderWidth: '0 2px 2px 0',
          transition: 'cubic-bezier(0.12,0.4,0.29,1.46) 0.1s',
        },
      },
    },
    defaultChecked: {
      true: {
        background: '$primary',
        '&::after': {
          content: ' ',
          display: 'block',
          width: '6px',
          height: '10px',
          transform: 'rotate(45deg)',
          position: 'absolute',
          left: '6px',
          top: '2px',
          border: '2px solid white',
          borderWidth: '0 2px 2px 0',
          transition: 'cubic-bezier(0.12,0.4,0.29,1.46) 0.1s',
        },
      },
    },
  },
});

export default CheckBox;
