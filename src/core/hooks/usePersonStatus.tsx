import { useEffect, useState } from 'react';

import personFront from 'app/assets/images/ashFront.png';
import personLeftLeg from 'app/assets/images/ashLeftLeg.png';
import personRighttLeg from 'app/assets/images/ashRightLeg.png';
import personStop from 'app/assets/images/ashStop.png';

import { Person } from 'app/components/Person';
import { usePokemons } from './usePokemons';

export const usePersonStatus = () => {
  const { pokemons, loading } = usePokemons();

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

  const personStatus = () => {
    if (loading) {
      return <Person.Searching />;
    }

    if (pokemons.filter((pokemon) => pokemon).length < 6) {
      return <Person.Search />;
    }

    return <Person.Error />;
  };

  const personMove = {
    front: <img src={personFront} alt="person" data-testid="front-person" />,
    left: <img src={personLeftLeg} alt="person" />,
    right: <img src={personRighttLeg} alt="person" />,
    stop: <img src={personStop} alt="person" />,
  };

  return {
    personStatus,
    personMove: personMove[walk],
  };
};
