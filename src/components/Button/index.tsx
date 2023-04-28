import React from "react";

import * as S from "./styled";

interface ButtonProps {
  text?: string;
  icon?: string; 
  onClick: () => void;
  onlyIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, onlyIcon }) => (
  <S.ButtonWrapper className={`${icon ? "icon" : ""}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
