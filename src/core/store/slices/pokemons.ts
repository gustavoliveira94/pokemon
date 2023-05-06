import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPokemonAdapter } from 'core/utils/adapters/pokemon';
import { RootState } from '..';

export interface PokemonsState {
  pokemon: IPokemonAdapter;
  pokemons: IPokemonAdapter[];
  loading: boolean;
}

const initialState: PokemonsState = {
  pokemon: {} as IPokemonAdapter,
  pokemons: ['', '', '', '', '', ''] as unknown as IPokemonAdapter[],
  loading: false,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    capturePokemon: (state) => {
      let pokemons = [...state.pokemons];

      const checkQuantitiesPokemons =
        state.pokemons.filter((pokemon) => pokemon).length < 6;

      if (checkQuantitiesPokemons) {
        const mergePokemons = [...state.pokemons.slice(1), state.pokemon];

        pokemons = mergePokemons;
      }

      return {
        ...state,
        pokemons: [...pokemons],
        loading: false,
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
    dropPokemon: (state, action: PayloadAction<{ id: number }>) => {
      const drop = state.pokemons.filter(
        (pokemon) => pokemon.id !== action.payload.id,
      );

      drop.unshift('' as unknown as IPokemonAdapter);

      return {
        ...state,
        pokemons: [...drop],
      };
    },
    selectPokemon: (state, action: PayloadAction<{ id: number }>) => {
      const selectPokemon = state.pokemons.filter(
        (pokemon) => pokemon.id === action.payload.id,
      );

      return {
        ...state,
        pokemon: selectPokemon[0],
      };
    },
    editPokemon: (
      state,
      action: PayloadAction<{ id: number; name: string }>,
    ) => {
      const indexPokemon = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.id;
      });

      const pokemon = {
        ...state.pokemons[indexPokemon],
        name: action.payload.name,
      };

      const pokemons = [...state.pokemons];
      pokemons.splice(indexPokemon, 1, pokemon);

      return {
        ...state,
        pokemon,
        pokemons,
      };
    },
    createPokemon: (state, action: PayloadAction<IPokemonAdapter>) => {
      let pokemons = [...state.pokemons];

      const checkQuantitiesPokemons =
        state.pokemons.filter((pokemon) => pokemon).length < 6;

      if (checkQuantitiesPokemons) {
        const mergePokemons = [...state.pokemons.slice(1), action.payload];

        pokemons = mergePokemons;
      }

      return {
        ...state,
        pokemons,
      };
    },
  },
});

export const {
  capturePokemon,
  setLoading,
  setPokemon,
  dropPokemon,
  selectPokemon,
  editPokemon,
  createPokemon,
} = pokemonsSlice.actions;

export const pokemonsSelector = (state: RootState) => ({
  pokemons: state.pokemons.pokemons,
});

export const pokemonSelector = (state: RootState) => ({
  pokemon: state.pokemons.pokemon,
  loading: state.pokemons.loading,
});

export default pokemonsSlice.reducer;
