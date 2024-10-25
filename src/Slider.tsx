// Slider.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  initialValue = min,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <SliderContainer>
      <StyledInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <ValueLabel>{value}</ValueLabel>
    </SliderContainer>
  );
};

// Styled Components
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  transition: background 0.3s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background-color: #3498db;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background-color: #3498db;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

const ValueLabel = styled.span`
  font-size: 1rem;
  color: #333;
`;

export default Slider;
