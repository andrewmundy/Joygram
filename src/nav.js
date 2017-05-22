import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import logo from './LOGO2.png'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';

class Nav extends Component {
  render() {
    return (
      <div className="header">
        <img className="button-hover logo" src={logo}/>
        <input placeholder="search"></input>

        <div className="social">
          <i className="fa button-hover fa-compass" aria-hidden="true"></i>
          <i className="fa button-hover fa-heart-o" aria-hidden="true"></i>
          <i className="fa button-hover fa-user-o" aria-hidden="true"></i>
        </div>
      </div>

    );
  }
}

export default Nav;