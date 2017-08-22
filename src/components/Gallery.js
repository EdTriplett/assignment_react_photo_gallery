import React, { Component } from "react";
import Post from "./Post.js";
const instagramResponse = require("./../photos.js");
//console.log(instagramResponse)
const data = instagramResponse.data;
//fix in a second
// const post = data[1];
let userInput = {
  filter: "none",
  search: ""
};

class Gallery extends Component {
  constructor() {
    super();
    //TODO: make a row component thing for the gallery
    this.state = {
      posts: data,
      displayList: [],
      userInputs: userInput,
      selectedFilter: "",
      searchText: "",
      sortField: ""
      
    };
  }
  render() {
    return (
      <div className="container">
        <div className="card-deck">
          <div className="row">
            {this.state.posts.map(post => <Post post={post} key={post.id} />)}
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
