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
  onChange: (e: React.ChangeEvent<HTMLInputElement> | number) => void;
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
}) => {
  const increase = () => {
    onChange?.(Number(value) + 1);
  };

  const decrease = () => {
    if (Number(value) <= 0) {
      return null;
    }

    onChange?.(Number(value) - 1);
  };

  return (
    <S.InputNumberWrapper className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.InputContent>
        <S.Input
          data-testid="input-number"
          id={name}
          value={value || ''}
          type="number"
          placeholder={placeholder}
          name={name}
          onChange={(e) => onChange?.(Number(e.target.value))}
          error={Boolean(error)}
        />

        {suffix && <S.InputSuffix>{suffix}</S.InputSuffix>}

        <S.InputActions>
          <S.Arrow
            src={chevron}
            className="increase"
            data-testid="increase"
            alt="Mais"
            onClick={() => increase()}
          />
          <S.Arrow
            src={chevron}
            data-testid="decrease"
            className="decrease"
            alt="Menos"
            onClick={() => decrease()}
          />
        </S.InputActions>
      </S.InputContent>

      {error && <S.Error>{error}</S.Error>}
    </S.InputNumberWrapper>
  );
};

export default InputNumber;
