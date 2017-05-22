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
      return <div><img className="photos" src={item.url}/></div>

        // <div>
        //   <img className="avatar" src={item.url}/>
        // </div>
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
