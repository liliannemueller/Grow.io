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
    return (
         <ThemeProvider theme={theme}>
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon /> {/* Menu icon to open the drawer */}
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
                <Link to="/home" style={{ color: theme.palette.primary.main }}>Home</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/meals" style={{ color: theme.palette.primary.main }}>Meals</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/exercises" style={{ color: theme.palette.primary.main }}>Exercises</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/account" style={{ color: theme.palette.primary.main }}>Account</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton>
                <Link to="/logout" style={{ color: theme.palette.primary.main }}>Logout</Link>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
    </ThemeProvider>
  );
}

