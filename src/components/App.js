import React from 'react';
import { Link }  from 'react-router';
import packageJSON from '../../package.json';
import AWS from 'aws-sdk';

export default React.createClass({
  returnSomething(something) {
    //this is only for testing purposes. Check /test/components/App-test.js
    return something;
  },
  render() {
    const version = packageJSON.version;
    console.log("AWS.SQS=" + new AWS.SQS());
    return (
      <div>
        <header>
          <h1>Modern Webapp {version}</h1>
          <Link to="/about">About</Link>
          <Link to="/poweredby">Powered by</Link>
        </header>
        <section>
          {this.props.children || 'Welcome to Modern Webapp'}
        </section>
      </div>
    )
  }
});
