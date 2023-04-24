import React, { FC } from 'react';
import { Box, Hidden } from '@mui/material';

interface Props {
  image: string,
}

export const AboutMovieMedia: FC<Props> = (props) => {
  const { image } = props;

  return (
    <>
      <Hidden only={['xs', 'sm']}>
        <Box sx={{ p: 2 }}>
          <img
            src={image}
            alt="movie"
          />
        </Box>
      </Hidden>

      <Box sx={{ p: 1, display: { md: 'none', lg: 'none', xl: 'none' } }}>
        <img
          width="180px"
          src={image}
          alt="movie"
        />
      </Box>
    </>
  );
};
