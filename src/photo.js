import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

class DisplayPhotos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts:[]
    }
  }

  componentDidMount(){
    var posts = [];
    axios.get(`https://api.mlab.com/api/1/databases/joygram_api/collections/photos/?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p`)
      .then(response => {
        response.data.forEach(obj => posts.push(obj));
        this.setState({ posts: posts })
      });
  }

  photoStep(){
    return this.state.posts.map(function(item){
      return <div className="frame">
                <img className="photos button-hover" src={item.url}/>
                <div className="info">
                  <p>{item.description}
                  <p>{item.comments} {item.likes}</p>
                  </p>
                </div>
              </div>
    })
  }

  render() {
    return (
      <div className="photocontainer">
        {this.photoStep()}
      </div>
    );
  }
}

export default DisplayPhotos;
