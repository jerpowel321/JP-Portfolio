import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'
import Container from '@material-ui/core/Container'

class Portfolio extends Component {
  
  
  render() {
    return (
      <div>
          <NavBar />
          {/* <div className="bg"></div> */}
          <Container maxWidth="lg">
          <ProjectList />
          </Container>

      </div >
    );
  }

};

export default (Portfolio);
