import { Ballon } from 'app/components/Ballon';

import personFront from 'app/assets/images/ashFront.png';
import personLeftLeg from 'app/assets/images/ashLeftLeg.png';
import personRighttLeg from 'app/assets/images/ashRightLeg.png';
import personStop from 'app/assets/images/ashStop.png';

import { useSearchPokemon } from 'core/hooks/useSearchPokemon';

import { useEffect, useState } from 'react';
import * as S from './styled';

interface PersonProps {
  statusBallon: 'search' | 'searching' | 'error';
}

const Person: React.FC<PersonProps> = ({ statusBallon }) => {
  const { searchPokemon, loading } = useSearchPokemon();

  const [walk, setWalk] = useState<'left' | 'right' | 'stop' | 'front'>(
    'front',
  );

  const personWalking = () => {
    setTimeout(() => setWalk('left'), 200);
    setTimeout(() => setWalk('right'), 400);
    setTimeout(() => setWalk('stop'), 600);
  };

  useEffect(() => {
    if (loading) {
      personWalking();
    }
  }, [loading]);

  const ballon = {
    search: <Ballon.Search />,
    searching: <Ballon.Searching />,
    error: <Ballon.Error />,
  };

  const personMove = {
    front: <img src={personFront} alt="person" />,
    left: <img src={personLeftLeg} alt="person" />,
    right: <img src={personRighttLeg} alt="person" />,
    stop: <img src={personStop} alt="person" />,
  };

  return (
    <S.Person onClick={() => searchPokemon()}>
      {ballon[statusBallon]}
      {personMove[walk]}
    </S.Person>
  );
};

export default Person;
