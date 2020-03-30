import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about"


function App() {
  return (
    <Router>
    <Route exact path="/" component={Portfolio}/>
    <Route exact path="/about" component={About}/>
    </Router>
  );
}

export default App;
