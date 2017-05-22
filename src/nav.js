import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <div>logo</div>
        <div>search</div>
        <div>social</div>
      </div>

    );
  }
}

export default Nav;
