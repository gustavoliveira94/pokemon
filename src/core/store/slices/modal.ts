import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface ModalState {
  open: boolean;
  name: 'Capture' | 'Edit' | '';
}

const initialState: ModalState = {
  open: false,
  name: '' as ModalState['name'],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalState>) => {
      return {
        ...state,
        open: action.payload.open,
        name: action.payload.name,
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        open: false,
        name: '' as ModalState['name'],
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalSelector = (state: RootState) => state.modal;

export default modalSlice.reducer;
