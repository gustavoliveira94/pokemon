import { configureStore } from '@reduxjs/toolkit';

import pokemonsSlice from './slices/pokemons';
import modalsSlice from './slices/modal';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    modal: modalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
