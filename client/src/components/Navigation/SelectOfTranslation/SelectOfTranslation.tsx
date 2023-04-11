import {
  FC, useCallback, useMemo, useState,
} from 'react';
import {
  Box,
  InputLabel,
  FormControl,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import defaultContext from '../../../context/appContext/defaultContext';
import { LOCALES } from '../../../context/appContext/const';
import { SelectItem } from './SelectItem/SelectItem';

interface Props {
  state: typeof defaultContext,
  onChangeLanguage: (value: string) => void;
}

export const SelectOfTranslation: FC<Props> = (props) => {
  const { onChangeLanguage, state } = props;

  const languageList = useMemo(() => (
    [LOCALES.UKRANIAN, LOCALES.ENGLISH]
  ), []);

  const [speech, setSpeech] = useState('');

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setSpeech(event.target.value);
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-select-small">Language</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={speech}
          label="Language"
          onChange={handleChange}
        >
          {languageList.map((language) => (
            <SelectItem
              key={language}
              state={state}
              language={language}
              onChangeLanguage={onChangeLanguage}
            />
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
