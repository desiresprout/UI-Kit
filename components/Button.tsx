import React, { FC, ComponentProps, useCallback } from 'react';
import { styled } from '@utils/stitchesConfig';

export interface ButtonProps extends ComponentProps<'button'> {
  label?: string;
  variant?: 'primary' | 'danger';
  size?: 'medium' | 'large';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled,
  onClick,
}) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
    },
    [onClick]
  );

  return (
    <StyledButton variant={variant} size={size} disabled={disabled} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',
  outline: 'none',
  color: '$fontColor',
  cursor: 'pointer',
  fontWeight: '$sm',
  variants: {
    size: {
      medium: {
        height: '32px',
        fontSize: '$md',
      },
      large: {
        height: '46px',
        fontSize: '$lg',
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        border: '2px solid $primary',
        padding: '4px 15px',
      },
      danger: {
        backgroundColor: '$danger',
        border: '2px solid $danger',
        padding: '6px 15px',
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

export default Button;
