import { styled } from '@mui/material/styles';
import {
  Box, CardContent, Typography, Button,
} from '@mui/material';
import { FC, useMemo } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Movie } from '../../typedefs/typedefs';
import { useToggle } from '../../../hooks/useToggle';

const CardInfoStyle = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '35%',
}));

interface Props {
  movie: Movie,
  isPreviewMode: boolean,
}

export const CardInfo: FC<Props> = (props) => {
  const { isPreviewMode, movie } = props;

  const { handleChangeOpen, isOpen } = useToggle();

  const getGenres = useMemo(() => {
    if (!isPreviewMode && Array.isArray(movie.genres)) {
      return movie.genres.map((item) => item.name).join(', ');
    }

    return typeof movie.genres === 'string' && movie.genres;
  }, [isPreviewMode, movie.genres]);

  const voteAverage = Math.round(10 * movie.voteAverage) / 10;

  return (
    <CardInfoStyle>
      <Box>
        {movie.title.length > 40 ? (
          <Box>
            {movie.title.substring(0, 37)}

            <Button
              onClick={handleChangeOpen}
              color="primary"
              sx={{ minWidth: 'max-content', p: 0 }}
            >
              ...
            </Button>

            <Dialog open={isOpen} onClose={handleChangeOpen}>

              <DialogTitle>Full Title</DialogTitle>

              <DialogContent>
                {movie.title}
              </DialogContent>
            </Dialog>
          </Box>
        ) : (
          <Box>
            {movie.title}
          </Box>
        )}

        <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
          {getGenres}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 12 }}
          gutterBottom
        >
          {movie.releaseDate}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
          {!isPreviewMode
            ? `${movie.runtime}m`
            : `${voteAverage}`
          }
        </Typography>
      </Box>
    </CardInfoStyle>
  );
};
