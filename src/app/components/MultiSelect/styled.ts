import styled from 'styled-components';

import { FormControl as Control } from '@mui/material';

export const Error = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #ff3d71;
`;

export const FormControl = styled(Control)<{ error: boolean }>`
  ${({ error }) =>
    error
      ? `.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select {
    border: 2px solid rgb(255, 61, 113);
  }`
      : null}
`;
