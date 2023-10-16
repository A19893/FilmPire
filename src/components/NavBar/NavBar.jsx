import React from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            sx={{ ml: 1 }}
            onClick={() => {}}
          >
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search...'}
          <div>
           {!isAuthenticated ? 
           (
                <Button
                 color="inherit"
                 onClick={() => {}} 
                >
                 Login &nbsp; <AccountCircle />
                </Button>
            )
            :
            (
              //  <Button
              //   color= "inherit"
              //   component={Link}
              //   to={'/profile/:id'}
              //   >
              //   Profile
              //  </Button> 
            )
            }
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
