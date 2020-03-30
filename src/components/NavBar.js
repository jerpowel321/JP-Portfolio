import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import grey from '@material-ui/core/colors/grey';

const black = grey[900];


const NavBar = () => {
    return(
        <AppBar style={{backgroundColor: black}} position="sticky" >
            <Toolbar>
                <Typography variant="h6" color="inherit" >
                    Jennifer Powell Portfolio
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;

