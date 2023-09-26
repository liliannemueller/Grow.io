import React, { useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu'; // Import the menu icon
import IconButton from '@mui/material/IconButton'; // Import IconButton
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Import ChevronLeftIcon
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../styles/variables.scss'


const theme = createTheme({
  palette: {
    // Customize colors
    primary: {
      main: '#caf8c4', //GREEN
    },
    secondary: {
      main: '#5B744B', //PINK
    },
  },
  typography: {
    // Customize typography
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem', // Change the font size for h1
    },
    // Add more typography customizations as needed
  },
  // Add more customizations here
});

export default function NavBar(props){
     const [open, setOpen] = useState(false);
      const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  } 
    return (
         <ThemeProvider theme={theme}>
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon /> 
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        style={{ backgroundColor: theme.palette.secondary.main }}
      >
        <div role="presentation">
          <IconButton onClick={toggleDrawer(false)}>
            {/* Close button inside the drawer */}
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <List style={{ backgroundColor: theme.palette.secondary.main }}>
            <ListItem>
              <ListItemButton >
                <Link to="/homepage" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Home</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/meals" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Meals</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/exercises" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Exercises</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/account" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>Account</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton style={{ color: theme.palette.primary.main }} onClick={logout}>Logout</ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
    </ThemeProvider>
  );
}

