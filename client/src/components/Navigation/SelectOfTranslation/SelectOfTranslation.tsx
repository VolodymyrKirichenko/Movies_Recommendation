import {
  FC, useCallback, useMemo, useState,
} from 'react';
import {
  Box,
  FormControl,
  InputLabel,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Flag from 'react-world-flags';
import defaultContext from '../../../context/appContext/defaultContext';
import { LOCALES } from '../../../context/appContext/const';
import { SelectItem } from './SelectItem/SelectItem';
import { useToggle } from '../../../hooks/useToggle';

interface Props {
  state: typeof defaultContext,
  onChangeLanguage: (value: string) => void;
}

export const SelectOfTranslation: FC<Props> = (props) => {
  const { onChangeLanguage, state } = props;

  const text = useMemo(() => {
    return state.locale === 'en-us' ? 'USA' : 'UKR';
  }, [state.locale]);

  const languageList = useMemo(() => (
    [LOCALES.UKRANIAN, LOCALES.ENGLISH]
  ), []);

  const [speech, setSpeech] = useState('');

  const { handleChangeOpen, isOpen } = useToggle();

  const handleChange = (event: SelectChangeEvent) => {
    setSpeech(event.target.value);
  };

  const handleClick = useCallback((lang: string) => {
    onChangeLanguage(lang);
    handleChangeOpen();
  }, [handleChangeOpen, onChangeLanguage]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: '70%' }} size="small">
        <InputLabel id="demo-select-small">
          <Flag code={text} height="16" />
        </InputLabel>

        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={speech}
          label="Language"
          onChange={handleChange}
          open={isOpen}
          onOpen={handleChangeOpen}
        >
          {languageList.map((language) => (
            <SelectItem
              key={language}
              state={state}
              language={language}
              handleClick={() => handleClick(language)}
            />
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
