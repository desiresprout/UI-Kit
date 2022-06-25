import React, { useState, FC, ComponentProps } from 'react';
import { styled } from '@utils/stitchesConfig';

interface SwitchProps extends Omit<ComponentProps<'label'>, 'onChange'> {
  label?: string;
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

const Switch: FC<SwitchProps> = ({ defaultChecked, label }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Container>
      <StyledSwitch className="switch" checked={checked}>
        <input type="checkbox" onChange={onClick} />
        <StyledHandle checked={checked} className="handle" />
      </StyledSwitch>
      <span className="label">{label}</span>
    </Container>
  );
};

const Container = styled('label', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: '27px',
  cursor: 'pointer',
  '& .label': {
    marginLeft: '10px',
    fontWeight: 400,
    fontSize: '1.3rem',
    lineHeight: '1.5',
  },
});

const StyledSwitch = styled('span', {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '32px',
  borderRadius: '27px',
  backgroundColor: '$colors$borderColor',
  cursor: 'pointer',
  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
      },
    },
  },
  '&.switch': {
    display: 'inline-flex',
    width: '58px',
    height: '38px',
    padding: '12px',
    input: {
      opacity: 0,
    },
  },
});

const StyledHandle = styled('span', {
  position: 'absolute',
  width: '40px',
  height: '40px',
  borderRadius: '25px',
  backgroundColor: 'white',
  left: '0px',
  boxShadow: '0px 0px 0.5px 0.5px $colors$disabledFontColor',
  transition: 'all 0.2s',
  variants: {
    checked: {
      true: {
        left: 'calc(100% - 40px)',
      },
    },
  },
});

export default Switch;
