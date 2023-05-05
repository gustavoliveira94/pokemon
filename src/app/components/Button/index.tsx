import React from 'react';

import * as S from './styled';

interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  type,
  onlyIcon,
}) => (
  <S.ButtonWrapper
    type={type}
    className={`${icon ? 'icon' : ''}`}
    onClick={onClick}
  >
    {!onlyIcon ? <S.Text>{text}</S.Text> : null}
    {icon ? <S.Icon data-testid="icon" src={icon} /> : null}
  </S.ButtonWrapper>
);

export default Button;
