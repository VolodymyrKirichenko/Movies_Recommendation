import { FC, useMemo } from 'react';
import { MenuItem } from '@mui/material';
import Flag from 'react-world-flags';
import defaultContext from '../../../../context/appContext/defaultContext';

interface Props {
  state: typeof defaultContext,
  language: string,
  handleClick: () => void,
}

export const SelectItem: FC<Props> = (props) => {
  const {
    state,
    language,
    handleClick,
  } = props;

  const text = useMemo(() => (
    language === 'en-us' ? 'USA' : 'UKR'
  ), [language]);

  return (
    <MenuItem
      value={language}
      disabled={state.locale === language}
      onClick={handleClick}
    >
      <Flag code={text} height="16" />
    </MenuItem>
  );
};
