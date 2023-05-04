import { useState } from 'react';
import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  Select,
} from '@mui/material';

import * as S from './styled';

interface MultiSelect {
  limitSelected?: number;
  name: string;
  options: {
    text: string;
    value: string;
  }[];
  onChange?: (e: SelectChangeEvent<string[]>) => void;
  error?: string;
}

const MultiSelect: React.FC<MultiSelect> = ({
  options,
  onChange,
  limitSelected,
  error,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange?.([...event.target.value] as unknown as SelectChangeEvent<
      string[]
    >);
    setSelected([...event.target.value]);
  };

  return (
    <S.FormControl style={{ width: '100%' }} error={Boolean(error)}>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(select) => select.join(', ')}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={
              selected.length >= (limitSelected || Infinity) &&
              selected.indexOf(option.value) === -1
            }
          >
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option.value) > -1} />
            </ListItemIcon>
            <ListItemText primary={option.text.toUpperCase()} />
          </MenuItem>
        ))}
      </Select>
      {error && <S.Error>{error}</S.Error>}
    </S.FormControl>
  );
};

export default MultiSelect;
