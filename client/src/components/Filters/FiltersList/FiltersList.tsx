import { FC } from 'react';
import {
  Box,
} from '@mui/material';
import { Genres, MoviesFilterInput } from '../../typedefs/typedefs';
import { FilterForm } from '../FilterForm/FilterForm';

interface Props {
  genresData: Genres,
  filter: MoviesFilterInput,
  onSubmit: (data: MoviesFilterInput) => void,
}

export const FilterList: FC<Props> = (props) => {
  const {
    filter,
    genresData,
    onSubmit,
  } = props;

  return (
    <Box sx={{ width: '100%' }} role="presentation">
      <Box sx={{
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <FilterForm
          genresData={genresData}
          filter={filter}
          onSubmit={onSubmit}
        />
      </Box>
    </Box>
  );
};
