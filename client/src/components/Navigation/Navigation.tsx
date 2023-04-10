import {
  FC, useState, useContext, useCallback, useMemo,
} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  List,
  Link,
  AppBar,
  Drawer,
  Hidden,
  Button,
  Toolbar,
  ListItem,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { AppContext } from '../../context/appContext/appContext';
import { SelectOfTranslation } from './SelectOfTranslation/SelectOfTranslation';

export const Navigation: FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale: string) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, [dispatch]);

  const list = useMemo(() => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
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
    </Box>
  ), []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link component={RouterLink} to='/' sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'white', flexGrow: 1 }}>
              Movies recommendation
            </Typography>
          </Link>

          <SelectOfTranslation
            state={state}
            onChangeLanguage={setLanguage}
          />

          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button
              component={RouterLink}
              to='favorites'
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Favorites
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list}
      </Drawer>
    </Box>
  );
};
