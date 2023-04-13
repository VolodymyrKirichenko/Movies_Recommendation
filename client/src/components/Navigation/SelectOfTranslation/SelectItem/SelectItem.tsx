import { FC } from 'react';
import { MenuItem } from '@mui/material';
import Flag from 'react-world-flags';
import defaultContext from '../../../../context/appContext/defaultContext';

interface Props {
  state: typeof defaultContext,
  language: string,
  onChangeLanguage: (value: string) => void;
  handleClose: () => void,
}

export const SelectItem: FC<Props> = (props) => {
  const {
    state,
    language,
    onChangeLanguage,
    handleClose,
  } = props;

  const text = language === 'en-us' ? 'USA' : 'UKR';

  return (
    <MenuItem
      value={language}
      disabled={state.locale === language}
      onClick={() => {
        onChangeLanguage(language);
        handleClose();
      }}
    >
      <Flag code={text} height="16" />
    </MenuItem>
  );
};
