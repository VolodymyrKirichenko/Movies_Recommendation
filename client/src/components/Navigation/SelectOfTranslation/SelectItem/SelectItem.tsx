import { FC } from 'react';
import { MenuItem } from '@mui/material';
import defaultContext from '../../../../context/appContext/defaultContext';

interface Props {
  state: typeof defaultContext,
  language: string,
  onChangeLanguage: (value: string) => void;
}

export const SelectItem: FC<Props> = (props) => {
  const {
    state,
    language,
    onChangeLanguage,
  } = props;

  return (
    <MenuItem
      value={language}
      disabled={state.locale === language}
      onClick={() => onChangeLanguage(language)}
    >
      {language}
    </MenuItem>
  );
};
