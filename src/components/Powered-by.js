import React from 'react';
import packageJSON from '../../package.json';

export default React.createClass({
  render() {
    let deps = Object.keys(packageJSON.dependencies).map((dep, i) => <li key={i}>{dep}</li>);
    let devDeps = Object.keys(packageJSON.devDependencies).map((dep, i) => <li key={i + 10}>{dep}</li>);

    return (
      <div>
        <h2>Powered by</h2>
        <a href='https://reactjs.org'><img src='dist/images/reactjs.png'/></a>
      </div>
    );
  }
});
