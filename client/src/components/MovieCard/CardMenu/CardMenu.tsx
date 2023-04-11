import React, { FC, useState } from 'react';
import { Box, IconButton, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cn from 'classnames';

interface Props {
  children: JSX.Element,
}

export const CardMenu: FC<Props> = (props) => {
  const { children } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const ITEM_HEIGHT = 48;
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: 'maxContent' }}>
      <IconButton
        sx={{
          position: 'absolute',
          right: 5,
          top: 5,
          color: 'black',
          background: 'rgba(255, 255, 255, .3)',
          zIndex: 5,
        }}
        aria-label="more"
        id="long-button"
        aria-controls={cn({
          'long-menu': open,
        })}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{ 'aria-labelledby': 'long-button' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        {children}
      </Menu>
    </Box>
  );
};
