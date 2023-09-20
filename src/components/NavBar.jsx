import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "../styles/NavBar.scss";

function NavBar(props){
    return(
       <div>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemText>MENU</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
       </div>
    )
}

export default NavBar;