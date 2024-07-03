import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/logo.png';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Success Stories', href: '/successstories' },
  {
    text: 'Work With Me',
    href: '/workwithme',
    submenu: [
      {
        text: 'Real Life 1:1 Training',
        href: '/workwithme/reallife1on1training',
      },
      { text: 'Remote 1:1 Training', href: '/programs/remote1on1training' },
    ],
  },
  { text: 'Contact', href: '/contact' },
  { text: 'Media', href: '/media' },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    if (scrollTop > 100) {
      setScrollPosition(scrollTop);
    } else {
      setScrollPosition(0);
    }
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', backgroundColor: 'primary.main' }}>
      <img src={Logo} alt='yooo' style={{ height: '150px', width: '150px' }} />
      <Divider sx={{ backgroundColor: 'primary.main' }} />
      <List sx={{ backgroundColor: 'primary.main' }}>
        {navItems.map((item) =>
          item.submenu ? (
            <ListItem>
              <NavLink
                className='menu_link'
                style={{
                  fontFamily: 'Birds',
                  textTransform: 'none',
                }}
                onClick={handleSubmenuOpen}
              >
                {item.text}
              </NavLink>
              <Menu
                anchorEl={submenuAnchorEl}
                open={Boolean(submenuAnchorEl)}
                onClose={handleSubmenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {item.submenu.map((submenuItem) => (
                  <MenuItem
                    key={submenuItem.href}
                    onClick={() => {
                      handleSubmenuClose();
                      handleDrawerToggle();
                    }}
                    component={NavLink}
                    to={submenuItem.href}
                    sx={{ height: '50px' }}
                  >
                    {submenuItem.text}
                  </MenuItem>
                ))}
              </Menu>
            </ListItem>
          ) : (
            <ListItem onClick={handleDrawerToggle}>
              <NavLink
                key={item.href}
                className='menu_link'
                style={{ fontFamily: 'Birds', textTransform: 'none' }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: {
              xl: '20em',
              lg: '12em',
              md: '5em',
              sm: '2em',
              xs: '1em',
            },
            marginRight: {
              xl: '20em',
              lg: '12em',
              md: '5em',
              sm: '2em',
              xs: '1em',
            },
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#1B1E1E' }} />
          </IconButton>
          <Box
            alt='yooo'
            sx={{
              display: 'block',
              height: '100px',
              width: '100px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: '0',
                lg: '0',
                xl: '0',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            {navItems.map((item) =>
              item.submenu ? (
                <>
                  <NavLink
                    className='menu_link'
                    style={{
                      fontFamily: 'Birds',
                      textTransform: 'none',
                    }}
                    onClick={handleSubmenuOpen}
                  >
                    {item.text}
                  </NavLink>
                  <Menu
                    anchorEl={submenuAnchorEl}
                    open={Boolean(submenuAnchorEl)}
                    onClose={handleSubmenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {item.submenu.map((submenuItem) => (
                      <MenuItem
                        key={submenuItem.href}
                        onClick={handleSubmenuClose}
                        component={NavLink}
                        to={submenuItem.href}
                        sx={{ height: '50px' }}
                      >
                        {submenuItem.text}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <NavLink
                  key={item.href}
                  className='menu_link'
                  style={{ fontFamily: 'Birds', textTransform: 'none' }}
                  to={item.href}
                >
                  {item.text}
                </NavLink>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ backgroundColor: '#E4DCC0' }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'primary.main',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
