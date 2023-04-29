import { Ballon } from 'app/components/Ballon';

import person from 'app/assets/images/ashFront.png';

import * as S from './styled';

const Person: React.FC = () => {
  return (
    <S.Person>
      <Ballon.Search />
      <img src={person} alt="person" />
    </S.Person>
  );
};

export default Person;
