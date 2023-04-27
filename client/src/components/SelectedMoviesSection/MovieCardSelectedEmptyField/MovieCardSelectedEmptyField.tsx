import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { SelectedMovies } from '../SelectedMoviesSection';

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const MovieCardSelectedEmptyField: FC = () => {
  return (
    <SelectedMovies>
      <NoMovies>
        <Box
          component="img"
          sx={{
            width: '50%',
            opacity: '.6',
          }}
          alt="No images."
          src="images/noMovies.png"
        />

        <Typography variant="h5" mt={2}>
          <FormattedMessage id="no_selected_movies" />
        </Typography>
      </NoMovies>
    </SelectedMovies>
  );
};
