import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import * as Colors from 'material-ui/styles/colors';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import TextField from 'material-ui/TextField';
// const black = {backgroundColor: grey[900]};

// const muiTheme = getMuiTheme({
//     palette: {
//       textColor: Colors.darkBlack,
//       primary1Color: Colors.white,
//       primary2Color: Colors.indigo700,
//       accent1Color: Colors.redA200,
//       pickerHeaderColor: Colors.darkBlack,
//       alternateTextColor: Colors.redA200
//     },
//     appBar: {
//       height: 60,
//     },
//   });

const NavBar = () => {
    return(
        <AppBar style={{backgroundColor: 'red'}} position="sticky" >
            <Toolbar>
                <Typography variant="h6" color="inherit" >
                    React & Material UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;

