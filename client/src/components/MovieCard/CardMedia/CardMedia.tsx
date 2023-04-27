import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Movie } from '../../typedefs/typedefs';

const PlusIcon = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, .3)',
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
}));

interface Props {
  movie: Movie,
  isPreviewMode: boolean,
  onCardSelect: (movie: Movie) => void;
}

export const CardMediaFile: FC<Props> = (props) => {
  const { onCardSelect, movie, isPreviewMode } = props;

  return (
    <Box sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="300"
        image={movie.image}
        alt={movie.title}
      />

      {isPreviewMode && (
        <PlusIcon onClick={() => onCardSelect(movie)}>
          <AddBoxOutlinedIcon sx={{ fontSize: 40 }} />
        </PlusIcon>
      )}
    </Box>
  );
};
