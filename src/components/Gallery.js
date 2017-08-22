import React, { Component } from "react";
import Post from "./Post.js";
const instagramResponse = require("./../photos.js");
const data = instagramResponse.data;
let userInput = {
  filter: "none",
  search: ""
};

class Gallery extends Component {
  constructor() {
    super();
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
