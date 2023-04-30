import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPokemonAdapter } from 'contracts/adapters/pokemon';
import { RootState } from '..';

export interface PokemonsState {
  pokemon: IPokemonAdapter;
  pokemons: IPokemonAdapter[];
  loading: boolean;
}

const initialState: PokemonsState = {
  pokemon: {} as IPokemonAdapter,
  pokemons: [] as IPokemonAdapter[],
  loading: false,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state) => {
      return {
        ...state,
        pokemons: [...state.pokemons, state.pokemon],
      };
    },
    setPokemon: (state, action: PayloadAction<IPokemonAdapter>) => {
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    },
    setLoading: (
      state,
      action: PayloadAction<Pick<PokemonsState, 'loading'>>,
    ) => {
      return {
        ...state,
        loading: action.payload.loading,
      };
    },
  },
});

export const { setPokemons, setLoading, setPokemon } = pokemonsSlice.actions;

export const pokemonsSelector = (state: RootState) => ({
  pokemons: state.pokemons.pokemons,
});

export const pokemonSelector = (state: RootState) => ({
  pokemon: state.pokemons.pokemon,
  loading: state.pokemons.loading,
});

export default pokemonsSlice.reducer;