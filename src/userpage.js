import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

var userId= 'users/592213f99755453e100191cf'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      avatar: null,
      description: null,
      photos:432,
      following:3212,
      followers:12,
      url:"http://andrewmundy.net"
    }
  }

  componentWillMount(){
    var userId= 'users/592213f99755453e100191cf'
    axios.get(`https://api.mlab.com/api/1/databases/joygram_api/collections/${userId}?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p`)
    .then(response => {
      this.setState({
        username: response.data.username,
        avatar: response.data.avatar,
        description: response.data.description,
      })
    })
  }

  render() {
    return (
      <div>
        <div className="user_header">
          <img className="avatar" src={this.state.avatar}/>
          <div><h1><b>{this.state.username}</b></h1>
          <p className="description"><b>{this.state.description}</b> {this.state.url}</p>
            <p>
              <b>{this.state.photos}</b> photos
              <b>{this.state.following}</b> following
              <b>{this.state.photos}</b> followers
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default User;
