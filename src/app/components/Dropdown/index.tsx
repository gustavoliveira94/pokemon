import chevron from 'app/assets/images/chevronDownBlack.png';

import * as S from './styled';

interface DropdownPageProps {
  label?: string;
  name?: string;
  options: {
    text: string;
    value: string;
  }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownPage: React.FC<DropdownPageProps> = ({
  label,
  options,
  onChange,
  value,
  name,
}) => {
  return (
    <S.DropdownWrapper>
      {label && <S.Label>{label}</S.Label>}

      <S.DropdownContent>
        <S.Select onChange={onChange} name={name} id={name} value={value}>
          <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
          {options &&
            options.map((option, index) => (
              <S.DropdownOption key={index} value={option.value}>
                {option.text}
              </S.DropdownOption>
            ))}
        </S.Select>
        <S.DropdownIcon src={chevron} alt="Chevron" />
      </S.DropdownContent>
    </S.DropdownWrapper>
  );
};

export default DropdownPage;
