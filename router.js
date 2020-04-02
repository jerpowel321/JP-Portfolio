import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about"

export default <Router >
  <Route path="/" component={App}>
    <IndexRoute component={Portfolio}/>
    <Route path="demo" component={About}/>
  </Route>
</Router>
