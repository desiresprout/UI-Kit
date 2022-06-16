import React, { FC, ComponentProps } from 'react';
import { styled } from '@utils/stitchesConfig';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiOutlineWarning } from 'react-icons/ai';

const iconMap = {
  error: BiErrorCircle,
  success: AiOutlineCheckCircle,
  info: AiOutlineInfoCircle,
  warning: AiOutlineWarning,
};

interface AlertProps extends ComponentProps<'div'> {
  type?: 'error' | 'success' | 'warning' | 'info';
  message?: string;
  description?: string;
}

interface IconNode {
  type: NonNullable<AlertProps['type']>;
}

const Alert: FC<AlertProps> = (props) => {
  const { type = 'error', message, description } = props;

  return (
    <AlertContainer type={type}>
      <IconContent type={type} />
      <MessageContainer>
        {message && <span>{message}</span>}
        {description && <span>{description}</span>}
      </MessageContainer>
    </AlertContainer>
  );
};

const AlertContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '6px 16px',
  borderRadius: '4px',
  variants: {
    type: {
      error: {
        border: '1px solid #ffccc7',
        backgroundColor: '#fff2f0',
      },
      success: {
        border: '1px solid #b7eb8f',
        backgroundColor: '#f6ffed',
      },
      info: {
        border: '1px solid #91d5ff',
        backgroundColor: '#e6f7ff',
      },
      warning: {
        border: '1px solid #ffe58f',
        backgroundColor: '#fffbe6',
      },
    },
  },
});
const IconContent: FC<IconNode> = ({ type }) => {
  const IconNode = iconMap[type];
  return (
    <IconContainer type={type}>
      <IconNode />
    </IconContainer>
  );
};

const IconContainer = styled('div', {
  display: 'flex',
  fontSize: '22px',
  padding: '7px 0px',
  marginRight: '12px',
  variants: {
    type: {
      error: {
        color: '#D32F2F',
      },
      success: {
        color: '#52c41a',
      },
      info: {
        color: '$primary',
      },
      warning: {
        color: '#faad14',
      },
    },
  },
});

const MessageContainer = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  wordBreak: 'break-word',

  '& > span:first-child': {
    fontSize: '16px',
    marginBottom: '4px',
  },
});

export default Alert;
