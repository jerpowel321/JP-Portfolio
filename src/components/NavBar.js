import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';
// import { Typography } from '@material-ui/core';


const black = grey[900];
const white = grey[50];
let color = black


const NavBar = () => {
  return (
    <AppBar id="nav" style={{ backgroundColor: color }} position="sticky" >
      <Toolbar>
        <Grid container >
          <Grid item xs={6}>
            <Grid id="navigation" container justify="flex-start" style={{ fontWeight: "bold" }}>
              <p id="name" style={{ paddingRight: "30px", fontFamily: "Lato, sans-serif", color: "#FFFFFF" }}>
                Jennifer Powell
              </p>
              <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about" rel="noopener noreferrer">About</a>
              </Grid>
              <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about/#values" rel="noopener noreferrer">Values</a>
              </Grid>
              <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about/#skills" rel="noopener noreferrer">Skills</a>
              </Grid>
              <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/" rel="noopener noreferrer">Projects</a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="flex-end" >
              <a id="menu" ><i className="fas fa-2x fa-bars" style={{ color: white }}>
              </i>   </a>

              <Grid item style={{ paddingBottom: "20px", color: white, paddingTop: "20px" }}>
                <a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github hvr-grow" style={{ color: white, paddingRight: "12px" }}></i></a>
                <a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin hvr-grow" style={{ color: white, paddingRight: "12px" }}></i></a>
                <a href="https://www.dropbox.com/s/agp3gyvyaouykrs/JP_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf fa-2x ml hvr-grow nml" style={{ color: white, paddingRight: "12px" }}></i></a>
                <div id="littleMenu">
                <a style={{ color: white }} href="/about" rel="noopener noreferrer"><span>About</span></a>
                <a style={{ color: white }} href="/about/#values" rel="noopener noreferrer"><span>Values</span></a>
                <a style={{ color: white }} href="/about/#skills" rel="noopener noreferrer"><span>Skills</span></a>
                <a style={{ color: white }} href="/" rel="noopener noreferrer"><span>Projects</span></a>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}

export default NavBar;

