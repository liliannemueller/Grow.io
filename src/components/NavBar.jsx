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

const theme = createTheme({
  palette: {
    // Customize colors
    primary: {
      main: '#CCFFc4', //GREEN
    },
    secondary: {
      main: '#FECDCD', //PINK
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
          <List>
            <ListItem>
              <ListItemButton>
                <Link to="/home">Home</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/meals">Meals</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/exercises">Exercises</Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link to="/account">Account</Link>
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
    </ThemeProvider>
  );
}

