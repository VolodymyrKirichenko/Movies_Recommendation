import { FC } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Form } from 'react-final-form';
import { AllGenres } from '../Inputs/AllGenres/AllGenres';
import { AdultField } from '../Inputs/AdultField/AdultField';
import { MoviesFilterInput } from '../../typedefs/typedefs';
import { YearField } from '../Inputs/YearField/YearField';
import { ReleaseYearField } from '../Inputs/ReleaseYearField/ReleaseYearField';
import { GenreField } from '../Inputs/GenreField/GenreField';
import { SortField } from '../Inputs/SortField/SortField';
import { SubmitField } from '../Inputs/SubmitField/SubmitField';

interface Props {
  filter: any,
  onSubmit: (data: MoviesFilterInput) => void,
  genresData: any,
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
          <ListItemButton>
            <ListItemText primary="Filters" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <Form
            onSubmit={onSubmit}
            initialValues={filter}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box>
                  <AllGenres
                    data={genresData}
                    onSubmit={onSubmit}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <SortField />

                  <GenreField data={genresData} />

                  <YearField />

                  <ReleaseYearField />
                </Box>

                <Box sx={{ m: 1, display: 'flex', gap: 5 }}>
                  <SubmitField />

                  <AdultField />
                </Box>
              </form>
            )}
          />
        </ListItem>
      </List>
    </Box>
  );
};
