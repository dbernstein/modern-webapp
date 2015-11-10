import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import { createHistory, useBasename } from 'history'


const history = useBasename(createHistory)({
	  basename: '/'
})

window.React = React;


ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/poweredby" component={PoweredBy}/>
    </Route>
  </Router>
  , document.getElementById('content')
);
