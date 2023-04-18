import { Form } from 'react-final-form';
import Box from '@mui/material/Box';
import { useQuery } from '@apollo/client';
import React from 'react';
import { GENRES_QUERY } from '../queries';
import { ReleaseYearField } from '../Inputs/ReleaseYearField/ReleaseYearField';
import { GenreField } from '../Inputs/GenreField/GenreField';
import { AdultField } from '../Inputs/AdultField/AdultField';
import { SortField } from '../Inputs/SortField/SortField';
import { SortDirectionField } from '../Inputs/SortDirectionField/SortDirectionField';
import { SubmitField } from '../Inputs/SubmitField/SubmitField';
import { InitialValues, MoviesFilterInput } from '../../typedefs/typedefs';
import { HomeError } from '../../../pages/Home/HomeError/HomeError';
import { HomeLoader } from '../../../pages/Home/HomeLoader/HomeLoader';

export const FiltersMain = ({ onSubmit, initialValues }: {
  onSubmit: (data: MoviesFilterInput) => void,
  initialValues: InitialValues,
}) => {
  const { loading, error, data } = useQuery(GENRES_QUERY);

  if (loading) {
    return <HomeLoader />;
  }

  return (
    error ? (
      <HomeError text='No genres found' />
    ) : (
      <Box sx={{ padding: 2 }}>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
    )
  );
};
