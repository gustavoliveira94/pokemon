import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface IModalState {
  open: boolean;
  name: 'Capture' | 'Status' | 'Create' | '';
}

const initialState: IModalState = {
  open: false,
  name: '' as IModalState['name'],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IModalState>) => {
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
        name: '' as IModalState['name'],
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalSelector = (state: RootState) => state.modal;

export default modalSlice.reducer;
