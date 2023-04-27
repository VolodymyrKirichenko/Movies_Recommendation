import React, { FC } from 'react';
import { Box, Hidden, Typography } from '@mui/material';

interface Props {
  title: string,
}

export const AboutMovieTitle: FC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <Hidden only={['lg', 'xl', 'md']}>
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: 'center', textShadow: '0px 0px 10px #fff' }}
          >
            {title}
          </Typography>
        </Box>
      </Hidden>

      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', textShadow: '0px 0px 10px #fff' }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};
