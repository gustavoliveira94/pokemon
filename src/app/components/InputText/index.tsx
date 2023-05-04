import React from 'react';

import * as S from './styled';

interface InputTextProps {
  className?: string;
  label?: string;
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputTextProps> = ({
  className,
  label,
  type,
  placeholder,
  name,
  value,
  error,
  onChange,
}) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input
      error={Boolean(error)}
      id={name}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />

    {error && <S.Error>{error}</S.Error>}
  </S.InputTextWrapper>
);

export default InputText;
