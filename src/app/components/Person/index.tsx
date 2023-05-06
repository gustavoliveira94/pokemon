import { useEffect, useState } from 'react';

import { Ballon } from 'app/components/Ballon';

import personFront from 'app/assets/images/ashFront.png';
import personLeftLeg from 'app/assets/images/ashLeftLeg.png';
import personRighttLeg from 'app/assets/images/ashRightLeg.png';
import personStop from 'app/assets/images/ashStop.png';

import { useSearchPokemon } from 'core/hooks/useSearchPokemon';
import { useSearchPokemons } from 'core/hooks/useSearchPokemons';

import * as S from './styled';

interface PersonProps {
  ballon: JSX.Element;
}

const PersonComponent: React.FC<PersonProps> = ({ ballon }) => {
  const { searchPokemon, loading } = useSearchPokemon();
  const { pokemons } = useSearchPokemons();

  const [walk, setWalk] = useState<'left' | 'right' | 'stop' | 'front'>(
    'front',
  );

  useEffect(() => {
    const left = loading ? setInterval(() => setWalk('left'), 200) : 0;
    const right = loading ? setInterval(() => setWalk('right'), 400) : 0;
    const stop = loading ? setInterval(() => setWalk('stop'), 600) : 0;

    return () => {
      clearInterval(left);
      clearInterval(right);
      clearInterval(stop);
      setWalk('front');
    };
  }, [loading]);

  const handleSearchPokemon = () => {
    return pokemons.filter((pokemon) => pokemon).length < 6
      ? searchPokemon()
      : null;
  };

  const personMove = {
    front: <img src={personFront} alt="person" data-testid="front-person" />,
    left: <img src={personLeftLeg} alt="person" />,
    right: <img src={personRighttLeg} alt="person" />,
    stop: <img src={personStop} alt="person" />,
  };

  return (
    <S.Person
      loading={loading}
      onClick={() => handleSearchPokemon()}
      data-testid="person"
    >
      {ballon}
      {personMove[walk]}
    </S.Person>
  );
};

export const Person = {
  Search: () => <PersonComponent ballon={<Ballon.Search />} />,
  Searching: () => <PersonComponent ballon={<Ballon.Searching />} />,
  Error: () => <PersonComponent ballon={<Ballon.Error />} />,
};
