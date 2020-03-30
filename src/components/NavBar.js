import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';


const black = grey[900];
const white = grey[50];
// const hotpink = pink[600];


const NavBar = () => {
  return (
    <AppBar style={{ backgroundColor: black }} position="sticky" >
      <Toolbar>
        <Grid container justify="flex-end" >
          <Grid item  style={{paddingBottom: "20px"}}>
            <a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github hvr-grow" style={{ color: white, paddingRight: "12px", paddingTop:"20px"}}></i></a>
            <a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin hvr-grow" style={{ color: white, paddingRight: "12px",paddingTop:"20px" }}></i></a>
            <a href="https://www.dropbox.com/s/p4cxz05omtwpikc/JenniferPowell_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf fa-2x ml hvr-grow nml" style={{ color: white, paddingRight: "12px",paddingTop:"20px" }}></i></a>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}

export default NavBar;

