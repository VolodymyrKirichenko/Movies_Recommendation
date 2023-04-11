import { FC } from 'react';
import { Box, Drawer } from '@mui/material';
import { ListOfPages } from '../ListOfPages/ListOfPages';

interface Props {
  isDrawerOpen: boolean,
  onChangeDrawer: () => void,
}

export const NavDrawer: FC<Props> = (props) => {
  const { isDrawerOpen, onChangeDrawer } = props;

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={onChangeDrawer}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <ListOfPages />
      </Box>
    </Drawer>
  );
};
