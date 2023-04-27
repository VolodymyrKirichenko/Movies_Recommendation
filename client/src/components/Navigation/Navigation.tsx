import React, {
  FC, useState, useContext, useCallback,
} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Link,
  AppBar,
  Hidden,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { AppContext } from '../../context/appContext/appContext';
import { SelectOfTranslation } from './SelectOfTranslation/SelectOfTranslation';
import { NavDrawer } from './NavDrawer/NavDrawer';

export const Navigation: FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale: string) => {
    dispatch({
      type: 'setLocale',
      locale,
    });
  }, [dispatch]);

  const handleChangeDrawer = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 70 }}>
          <Hidden only={['lg', 'xl']}>
            <IconButton
              onClick={handleChangeDrawer}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Link component={RouterLink} to='/' sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'white', flexGrow: 1 }}>
              <FormattedMessage id="navigation.home" />
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
              sx={{ color: 'white', display: 'block' }}
            >
              <FormattedMessage id="navigation.favorite" />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <NavDrawer
        isDrawerOpen={isDrawerOpen}
        onChangeDrawer={handleChangeDrawer}
      />
    </Box>
  );
};
