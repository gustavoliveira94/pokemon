import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonState {
  pokemon: any;
}

const initialState: PokemonState = {
  pokemon: {},
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    getPokemon: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        pokemon: action.payload,
      };
    },
  },
});

export const { getPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
