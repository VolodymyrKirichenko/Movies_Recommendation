import { FC } from 'react';
import {
  Box, Hidden,
  List,
  ListItem,
} from '@mui/material';
import { Form } from 'react-final-form';
import { SortDirectionField } from '../Inputs/SortDirectionField/SortDirectionField';
import { AllGenres } from '../Inputs/AllGenres/AllGenres';
import { AdultField } from '../Inputs/AdultField/AdultField';
import { Genre, MoviesFilterInput } from '../../typedefs/typedefs';
import { ReleaseYearField } from '../Inputs/ReleaseYearField/ReleaseYearField';
import { GenreField } from '../Inputs/GenreField/GenreField';
import { SortField } from '../Inputs/SortField/SortField';
import { SubmitField } from '../Inputs/SubmitField/SubmitField';

interface Props {
  filter: MoviesFilterInput,
  onSubmit: (data: MoviesFilterInput) => void,
  genresData: {
    genres: Genre[];
  }
}

export const FilterList: FC<Props> = (props) => {
  const {
    filter,
    genresData,
    onSubmit,
  } = props;

  return (
    <Box
      sx={{ width: '100%' }}
      role="presentation"
    >
      <List sx={{
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <ListItem disablePadding>
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
        </ListItem>
      </List>
    </Box>
  );
};
