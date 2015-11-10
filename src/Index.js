import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import SignIn from './components/SignIn';
import About from './components/About';
import createBrowserHistory from 'history/lib/createBrowserHistory';


window.React = React;


ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Route path='/' component={App}>
      <Route path='about' component={About}/>
      <Route path='poweredby' component={PoweredBy}/>
      <Route path='signin' component={SignIn}/>
    </Route>
  </Router>
  , document.getElementById('content')
);
