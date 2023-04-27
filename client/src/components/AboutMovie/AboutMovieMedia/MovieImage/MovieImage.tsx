import { FC } from 'react';
import { Box, Hidden } from '@mui/material';

interface Props {
  image: string,
}

export const MovieImage: FC<Props> = (props) => {
  const { image } = props;

  return (
    <>
      <Hidden only={['xs', 'sm']}>
        <Box>
          <img
            src={image}
            alt="movie"
          />
        </Box>
      </Hidden>

      <Box sx={{ display: { md: 'none', lg: 'none', xl: 'none' } }}>
        <img
          width="180px"
          src={image}
          alt="movie"
        />
      </Box>
    </>
  );
};
