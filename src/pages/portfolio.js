import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
import Container from '@material-ui/core/Container'
import Footer from "../components/Footer"
import grey from '@material-ui/core/colors/grey';
const lightgrey = grey[200];
const black = grey[900];
const white = grey[200];

class Portfolio extends Component {


  render() {
    return (
      <div className="blackbg">
        <NavBar />
        {/* <div style={{backgroundColor: black}} > */}
        <div className="bg"></div>
        <Container maxWidth="lg" >
          <div className="projectArea">
            <ProjectList />
          </div>
        </Container>
        <Footer />
      </div >
    );
  }

};

export default (Portfolio);
