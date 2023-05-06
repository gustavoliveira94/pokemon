import { render } from 'config/tests/helper';

import FieldStats from 'app/components/Modal/common/FieldStats';

const stats = {
  defense: 10,
  attack: 20,
  'special-attack': 30,
  'special-defense': 50,
  speed: 100,
};

const statsValue = Object.entries(stats).map((stat) => {
  return {
    name: String(stat[0]),
    value: String(stat[1]),
  };
});

describe('Testing component <FieldStats /> ', () => {
  it('Should click capture button', () => {
    const { getByText } = render(<FieldStats statsValue={statsValue} />);

    expect(getByText('Defesa'));
    expect(getByText('10'));
    expect(getByText('Ataque'));
    expect(getByText('20'));
    expect(getByText('Defesa Especial'));
    expect(getByText('50'));
    expect(getByText('Ataque Especial'));
    expect(getByText('30'));
    expect(getByText('Velocidade'));
    expect(getByText('100'));
  });
});
