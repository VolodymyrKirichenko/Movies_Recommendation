import React, { FC } from 'react';
import {
  Box, Button, Paper, TextField,
} from '@mui/material';
import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import { useIntl } from 'react-intl';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { MoviesFilterInput } from '../typedefs/typedefs';

interface Props{
  isClicked: boolean,
  refetch: () => void,
  filter: MoviesFilterInput,
  setPage: (page: number) => void,
  onClick: (value: boolean) => void,
  searchMovies: LazyQueryExecFunction<any, OperationVariables>,
}

export const SearchByTitleInput: FC<Props> = (props) => {
  const {
    filter,
    refetch,
    setPage,
    onClick,
    isClicked,
    searchMovies,
  } = props;

  const {
    searchKey,
    onSubmitForm,
    onSearchChange,
    handleClickReset,
    handleClickSubmit,
  } = useSearchMovie({
    filter, searchMovies, refetch, setPage, onClick,
  });

  const intl = useIntl();

  const isDisabledButton = !searchKey && !isClicked;

  return (
    <Box sx={{ mb: 2, pt: 2 }}>
      <Paper elevation={3}>
        <form onSubmit={onSubmitForm}>
          <Box sx={{ display: 'flex' }}>
            <TextField
              fullWidth
              size="small"
              type="text"
              value={searchKey}
              onChange={onSearchChange}
              placeholder={intl.formatMessage({ id: 'search_by_title_input' })}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{ width: '10%' }}
              onClick={handleClickSubmit}
            >
              Search
            </Button>

            <Button
              sx={{ width: '10%' }}
              variant="contained"
              disabled={isDisabledButton}
              onClick={handleClickReset}
            >
              Reset
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
