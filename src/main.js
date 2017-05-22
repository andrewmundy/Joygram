import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import Userpage from './userpage';
import Photo from './photo';
import User from './userpage';
import Nav from './nav.js';
import DisplayPhotos from './photo.js';

class Main extends Component {
  render() {
    return (
      <div className="body">
        <Nav className="nav"/>
        <Route className="user_header" exact path="/" component={User} />
        <div>
          {/* later routes to be used  */}
          <Switch>
            <Route path="/:username" component={Userpage} />
            <Route path="/:username:photo" component={Photo} />
          </Switch>
        </div>
        <DisplayPhotos/>
      </div>
    );
  }
}

export default Main;
