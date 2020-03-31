import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import grey from '@material-ui/core/colors/grey';


const black = grey[900];
const white = grey[50];
let color = black


const NavBar = () => {
  return (
    <AppBar id="nav" style={{ backgroundColor: color }} position="sticky" >
      <Toolbar>
        <Grid container >
          <Grid item xs={6}>
            <Grid id="navigation" container justify="flex-start" style={{fontWeight:"bold"}}>
              <p style={{paddingTop: "5px", paddingRight: "30px", fontFamily: "Lato, sans-serif", fontWeight: "300" , fontSize: "20px", color: "#FFFFFF"}}>
                Jennifer Powell
              </p>
            <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about" rel="noopener noreferrer">About</a>
                </Grid>
              <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/" rel="noopener noreferrer">Projects</a>
                </Grid>
                <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about/#values" rel="noopener noreferrer">Values</a>
                </Grid>
                <Grid item style={{ paddingTop: "30px", paddingRight: "20px", color: white }}>
                <a style={{ color: white }} href="/about/#skills" rel="noopener noreferrer">Skills</a>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justify="flex-end" >
              <Grid item style={{ paddingBottom: "20px", paddingTop:"5px", color: white }}>
                <a href="https://github.com/jerpowel321" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github hvr-grow" style={{ color: white, paddingRight: "12px", paddingTop: "20px" }}></i></a>
                <a href="https://www.linkedin.com/in/jenniferrpowell/" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-linkedin hvr-grow" style={{ color: white, paddingRight: "12px", paddingTop: "20px" }}></i></a>
                <a href="https://www.dropbox.com/s/p4cxz05omtwpikc/JenniferPowell_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf fa-2x ml hvr-grow nml" style={{ color: white, paddingRight: "12px", paddingTop: "20px" }}></i></a>
                {/* <a href="https://www.dropbox.com/s/p4cxz05omtwpikc/JenniferPowell_Resume.pdf?dl=0" target="_blank" rel="noopener noreferrer" style={{ color: white, paddingRight: "12px",paddingTop:"20px" }}>Resume</a> */}
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}

export default NavBar;

