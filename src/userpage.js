import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
// import photocount from './photo.js'

var userId= 'users/592213f99755453e100191cf'

//class User
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username:null,
      avatar:null,
      description:null,
      following:null,
      followers:null,
      url:null,
      photos:null
    }
  }

  //for the time being we are pulling the userID
  componentWillMount(){
    var userId= 'users/592213f99755453e100191cf'
    axios.get(`https://api.mlab.com/api/1/databases/joygram_api/collections/${userId}?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p`)
    .then(response => {
      this.setState({
        username: response.data.username,
        avatar: response.data.avatar,
        description: response.data.description,
        following:response.data.following,
        followers:response.data.followers,
        url:response.data.url,
        photos:response.data.photos
      })
    })
  }

  render() {
    return (
      <div>
        <img className="avatar" src={this.state.avatar}/>
        <div className="user_header">
          <div><h1><b>{this.state.username}</b></h1>
          <p className="description"><b>{this.state.description}</b> <a href={this.state.url}>{this.state.url}</a></p>
              <a href=""><b>{this.state.following}</b> following</a>
              <a href=""><b>{this.state.followers}</b> followers</a>
              <a href=""><b>{this.state.photos}</b> photos</a>
          </div>
        </div>
      </div>

    );
  }
}

export default User;
