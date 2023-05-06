import { useState } from 'react';
import {
  Checkbox,
  ListItemIcon,
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  Select,
  Box,
  Chip,
} from '@mui/material';

import * as S from './styled';

interface MultiSelect {
  limitSelected?: number;
  placeholder?: string;
  name?: string;
  options: {
    text: string;
    value: string;
  }[];
  onChange?: (e: SelectChangeEvent<string[]>) => void;
  error?: string;
  translate?: { [key: string]: string };
}

const MultiSelect: React.FC<MultiSelect> = ({
  options,
  onChange,
  limitSelected,
  error,
  placeholder,
  translate,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange?.([...event.target.value] as unknown as SelectChangeEvent<
      string[]
    >);
    setSelected([...event.target.value]);
  };

  return (
    <S.FormControl error={Boolean(error)} id="control">
      <S.InputLabel id="demo-multiple-chip-label">{placeholder}</S.InputLabel>
      <Select
        data-testid="multi-select"
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(select) => {
          return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {select.map((value) => (
                <Chip key={value} label={translate?.[value] || value} />
              ))}
            </Box>
          );
        }}
        input={<S.OutlinedInput id="select-multiple-chip" />}
      >
        {options.map((option) => (
          <MenuItem
            data-testid="option"
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
      {Boolean(error) && <S.Error>{error}</S.Error>}
    </S.FormControl>
  );
};

export default MultiSelect;
