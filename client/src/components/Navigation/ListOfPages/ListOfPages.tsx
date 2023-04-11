import { FC } from 'react';
import {
  Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const ListOfPages: FC = () => {
  return (
    <List>
      <Link component={RouterLink} to='favorites'>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};
