import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from "./pages/portfolio"


function App() {
  return (
    <Router>
    <Route exact path="/" component={Portfolio}/>
    </Router>
  );
}

export default App;
