import React, { FC } from 'react';
import {
  Box, Button, CardMedia, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { FormattedMessage } from 'react-intl';
import { Movie } from '../../../typedefs/typedefs';

interface Props {
  movie: Movie,
}

export const CardTooltip: FC<Props> = (props) => {
  const { movie } = props;

  const HtmlTooltip = styled(({ className, ...p }: TooltipProps) => (
    <Tooltip {...p} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: '25vw',
      fontSize: theme.typography.pxToRem(14),
      border: '1px solid #dadde9',
    },
  }));

  return (
    <Box sx={{ display: 'flex', pl: 2 }}>
      <HtmlTooltip
        title={(
          <Box sx={{ display: 'flex', gap: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: 200 }}
              image={movie.image}
              alt={movie.title}
            />

            <Box>
              <Typography color="blue" fontWeight="bold">{movie.title}</Typography>

              <strong>{movie.overview}</strong>
            </Box>
          </Box>
        )}
        placement="bottom"
      >
        <Button sx={{ p: 0 }}>
          <FormattedMessage id="description" />
        </Button>
      </HtmlTooltip>
    </Box>
  );
};
