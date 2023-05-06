import styled from 'styled-components';

import {
  FormControl as Control,
  OutlinedInput as Outlined,
  InputLabel as Label,
} from '@mui/material';

export const Error = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #ff3d71;
`;

export const FormControl = styled(Control)<{ error: boolean }>`
  width: 100%;
  ${({ error }) =>
    error
      ? `.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    border: 2px solid rgb(255, 61, 113);
  }`
      : null}
`;

export const OutlinedInput = styled(Outlined)`
  background: #ffffff;
  border: 2px solid #e4e9f2;
  height: 50px;

  fieldset {
    border: none;
  }

  .css-w66kx-MuiChip-root {
    border-radius: 20px;
    height: 25px;

    span {
      font-weight: 600;
      font-size: 15px;
      color: #2e3a59;
      overflow: initial;
    }
  }
`;

export const InputLabel = styled(Label)`
  & {
    font-size: 15px !important;
    color: #c5cef4 !important;
    font-weight: 400 !important;
  }
`;
