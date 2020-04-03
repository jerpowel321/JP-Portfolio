import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from "./pages/portfolio";
import About from "./pages/about"
import { useRouterHistory, Router } from 'react-router'
import { createHistory } from 'history'

const history = useRouterHistory(createHistory)({
    basename: '/test'
  })

export default <Router history={history} >
  <Route path="/" component={App}>
    <IndexRoute component={Portfolio}/>
    {/* <Route path="/about" component={About}/> */}
  </Route>
</Router>
