import { useSelector, useDispatch } from 'react-redux';

import {
  IModalState,
  modalSelector,
  openModal as modalOpen,
  closeModal as modalClose,
} from 'core/store/slices/modal';

export const useModal = () => {
  const dispatch = useDispatch();
  const { name: modalName, open } = useSelector(modalSelector);

  const openModal = (name: IModalState['name']) => {
    dispatch(modalOpen({ open: true, name }));
  };

  const closeModal = () => {
    dispatch(modalClose());
  };

  return {
    open,
    modalName,
    openModal,
    closeModal,
  };
};
