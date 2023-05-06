import React from 'react';

import * as S from './styled';

interface ButtonProps {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  onClick?: () => void;
  onlyIcon?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  onClick,
  type,
  onlyIcon,
  disabled,
}) => (
  <S.ButtonWrapper
    type={type}
    className={`${icon ? 'icon' : ''}`}
    onClick={onClick}
    data-testid="button"
    disabled={disabled}
  >
    {!onlyIcon ? <S.Text>{text}</S.Text> : null}
    {icon ? <S.Icon data-testid="icon" src={icon} /> : null}
  </S.ButtonWrapper>
);

export default Button;
