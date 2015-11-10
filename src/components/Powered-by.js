import React from 'react';
import packageJSON from '../../package.json';

export default React.createClass({
  render() {
    let deps = Object.keys(packageJSON.dependencies).map((dep, i) => <li key={i}>{dep}</li>);
    let devDeps = Object.keys(packageJSON.devDependencies).map((dep, i) => <li key={i + 10}>{dep}</li>);

    return (
      <div>
        <h2>Powered by</h2>
        <a href="https://www.duraspace.org"><img src="http://www.duraspace.org/sites/duraspace.org/files/logo_horiz_100%20%281%29.png"/></a>
      </div>
    );
  }
});
