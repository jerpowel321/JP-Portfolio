import React, { Component } from "react";
// import Landing from "../components/Landing";
import react from 'react'
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import theme from '../components/Theme';

class Portfolio extends Component {
  render() {
    return (
      <div>
           {/* <MuiThemeProvider theme={theme}> */}
           <NavBar/>
          <ProjectList/>
           {/* </MuiThemeProvider> */}
        
      </div >   
      );
  }

};

export default (Portfolio);
