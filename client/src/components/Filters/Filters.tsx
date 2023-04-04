import { Form } from 'react-final-form';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import { Typography } from '@mui/material';
import { GENRES_QUERY } from './queries';
import { YearField } from './Inputs/YearField/YearField';
import { ReleaseYearField } from './Inputs/ReleaseYearField/ReleaseYearField';
import { GenreField } from './Inputs/GenreField/GenreField';
import { AdultField } from './Inputs/AdultField/AdultField';
import { SortField } from './Inputs/SortField/SortField';
import { SortDirectionField } from './Inputs/SortDirectionField/SortDirectionField';
import { SubmitField } from './Inputs/SubmitField/SubmitField';
// import { InitialValues, MoviesFilterInput } from '../typedefs/typedefs';

export const Filters = ({ onSubmit, initialValues }: {
  onSubmit: (data: any) => void,
  initialValues: any
}) => {
  const { loading, data } = useQuery(GENRES_QUERY);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <YearField />
                </Box>

                <Box mr={3}>
                  <ReleaseYearField />
                </Box>

                <Box mr={3}>
                  <GenreField data={data} />
                </Box>

                <AdultField />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <SortField />
                </Box>

                <SortDirectionField />
              </Box>
            </Box>

            <Box>
              <SubmitField />
            </Box>
          </form>
        )}
      />
    </Box>
  );
};
