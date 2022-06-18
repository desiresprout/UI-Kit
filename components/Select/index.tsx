import React, { useState, forwardRef, FC, useRef, useCallback } from 'react';
import { css } from '@utils/stitchesConfig';
import Control from '@components/Select/Control';
import Option from '@components/Select/Option';
import useOnClickOutside from '@hooks/useOutsideClick';
import { IoIosArrowDown } from 'react-icons/io';
import { IOption } from './types';

interface SelectProps {
  defaultValue?: IOption;
  options: IOption[];
  onChange?: (label: string, value: string) => void;
}

const getOptionLabel = (option: IOption): string => {
  return option.label;
};

const Select: FC<SelectProps> = forwardRef(function Select({ defaultValue, options, onChange }) {
  const [isOptionOpen, setOptionOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(
    defaultValue ? getOptionLabel(defaultValue) : null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleOption = useCallback(() => {
    setOptionOpen((prev) => !prev);
  }, []);

  const _setLabel = useCallback(
    (label: string) => {
      setSelectedLabel(label);
      toggleOption();
    },
    [toggleOption]
  );

  const onSelectOption = (label: string, value: string) => {
    _setLabel(label);
    onChange?.(label, value);
  };

  useOnClickOutside(selectRef, toggleOption, isOptionOpen);

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
