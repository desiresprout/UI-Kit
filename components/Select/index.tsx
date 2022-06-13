import React, { useState, useEffect, forwardRef, FC, useRef, useCallback } from 'react';
import { css } from '@utils/stitchesConfig';
import Control from '@components/Select/Control';
import Option from '@components/Select/Option';
import useOnClickOutside from '@hooks/useOutsideClick';
import { IoIosArrowDown } from 'react-icons/io';
import { IOption } from './types';

interface SelectProps {
  options: IOption[];
  onChange?: (label: string, value: string) => void;
}

const Select: FC<SelectProps> = forwardRef(function Select({ options, onChange }) {
  const [isOptionOpen, setOptionOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOption = useCallback(() => {
    setOptionOpen((prev) => !prev);
  }, [isOptionOpen]);

  const _setLabel = useCallback(
    (label: string) => {
      setSelectedLabel(label);
      toggleOption();
    },
    [selectedLabel]
  );

  const onSelectOption = (label: string, value: string) => {
    _setLabel(label);
    onChange?.(label, value);
  };

  useOnClickOutside(selectRef, toggleOption, isOptionOpen);

  useEffect(() => {
    setSelectedLabel(options[0].label);
  }, []);

  return (
    <div className={container()} ref={selectRef}>
      <Control onMouseDown={toggleOption} isOptionOpen={isOptionOpen}>
        <span>{selectedLabel}</span>
        <IoIosArrowDown />
      </Control>
      {isOptionOpen && (
        <Option isOptionOpen={isOptionOpen} options={options} onSelectOption={onSelectOption} />
      )}
    </div>
  );
});

const container = css({
  position: 'relative',
});

export default Select;
