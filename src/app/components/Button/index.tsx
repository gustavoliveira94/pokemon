import React from 'react';

import * as S from './styled';

interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, type }) => (
  <S.ButtonWrapper
    type={type}
    className={`${icon ? 'icon' : ''}`}
    onClick={onClick}
  >
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
