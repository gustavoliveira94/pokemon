import React from 'react';

import chevron from 'app/assets/images/chevronDownBlack.png';

import * as S from './styled';

interface InputNumberProps {
  className?: string;
  label?: string;
  placeholder: string;
  name?: string;
  suffix?: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  className,
  label,
  placeholder,
  name,
  suffix,
  value,
  error,
  onChange,
}) => (
  <S.InputNumberWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.InputContent>
      <S.Input
        id={name}
        value={value}
        type="number"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        error={Boolean(error)}
      />

      {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

      <S.InputActions>
        <S.Arrow src={chevron} className="increase" alt="Mais" />
        <S.Arrow src={chevron} className="decrease" alt="Menos" />
      </S.InputActions>
    </S.InputContent>

    {error && <S.Error>{error}</S.Error>}
  </S.InputNumberWrapper>
);

export default InputNumber;
