import React, { FC } from 'react';
import {
  Box, Button, Grid,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Genres, MoviesFilterInput } from '../../../typedefs/typedefs';

interface Props {
  data: Genres,
  onSubmit: (data: MoviesFilterInput) => void;
}

export const AllGenres: FC<Props> = (props) => {
  const { data, onSubmit } = props;

  const handleGenreClick = (id: number) => {
    const filterInput: MoviesFilterInput = {
      page: 1,
      sortBy: 'popularity',
      sortDirection: 'desc',
      includeAdult: false,
      genre: id,
    };

    onSubmit(filterInput);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container columns={{ xs: 6, sm: 12, md: 12 }}>
        {data.genres.map(({ name, id }) => (
          <Grid item xs={2} sm={3} md={2} key={id}>
            <Button
              variant="text"
              value={id}
              onClick={() => handleGenreClick(id)}
            >
              <FormattedMessage id={`genres.${name}`} />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
