import React, { Component } from "react";
// import Landing from "../components/Landing";
import react from 'react'
import NavBar from "../components/NavBar";
import ProjectList from '../components/ProjectList'

class Portfolio extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          <ProjectList/>
      </div >   
      );
  }

};

export default (Portfolio);
