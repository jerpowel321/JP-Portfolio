import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const black = grey[900];

const NavBar = () => {
    return(
        <AppBar position="sticky" >
            <Toolbar>
                <Typography variant="h2" color="inherit">
                    React & Material UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;

