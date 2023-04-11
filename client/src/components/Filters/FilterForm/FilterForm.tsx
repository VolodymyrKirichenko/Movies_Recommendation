import { FC } from 'react';
import { Box, Hidden } from '@mui/material';
import { Form } from 'react-final-form';
import { AllGenres } from '../Inputs/AllGenres/AllGenres';
import { SortField } from '../Inputs/SortField/SortField';
import { GenreField } from '../Inputs/GenreField/GenreField';
import { ReleaseYearField } from '../Inputs/ReleaseYearField/ReleaseYearField';
import { SortDirectionField } from '../Inputs/SortDirectionField/SortDirectionField';
import { SubmitField } from '../Inputs/SubmitField/SubmitField';
import { AdultField } from '../Inputs/AdultField/AdultField';
import { Genres, MoviesFilterInput } from '../../typedefs/typedefs';

interface Props {
  genresData: Genres,
  filter: MoviesFilterInput,
  onSubmit: (data: MoviesFilterInput) => void,
}

export const FilterForm: FC<Props> = (props) => {
  const { filter, onSubmit, genresData } = props;

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={filter}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <AllGenres
              data={genresData}
              onSubmit={onSubmit}
            />
          </Box>

          <Box sx={{
            gap: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <SortField />

              <GenreField data={genresData} />

              <ReleaseYearField />
            </Box>

            <Hidden only={['xs']}>
              <SortDirectionField />
            </Hidden>
          </Box>

          <Box sx={{
            m: 1,
            display: 'flex',
            gap: 5,
            justifyContent: 'space-between',
          }}
          >
            <Box sx={{
              gap: 5,
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <SubmitField />

              <AdultField />
            </Box>

            <Box sx={{ display: { sm: 'none', md: 'none' } }}>
              <SortDirectionField />
            </Box>
          </Box>
        </form>
      )}
    />
  );
};
