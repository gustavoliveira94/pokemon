import React from 'react';

import * as S from './styled';

interface InputTextProps {
  className: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

const InputText: React.FC<InputTextProps> = ({
  className,
  label,
  type,
  placeholder,
  name,
}) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input type={type} placeholder={placeholder} name={name} />
  </S.InputTextWrapper>
);

export default InputText;
