import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
import Container from '@material-ui/core/Container'
import Footer from "../components/Footer"
import About from "../components/About"
import grey from '@material-ui/core/colors/grey';

const black = grey[900];

class AboutPage extends Component {
  
  
  render() {
    return (
      <div>
          <NavBar />
          <div style={{backgroundColor: black, padding: "0px", margin: "0px"}}>
          <About/>
          </div>
          <Footer/>
      
      </div >
    );
  }

};

export default (AboutPage);
