import React, { Component } from "react";
import Post from "./Post.js";
const instagramResponse = require("./../photos.js");
const data = instagramResponse.data;
let userInput = {
  filter: "none",
  search: ""
};

const Showable = ({show, children}) => {
  if (!show) {
    return null
  }
  return <div>{children}</div>
}

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
//    const showPost = 

    return (
      <div className="container">
        <div className="card-deck">
          <div className="row">
            {this.state.posts.map(post => 
              // <Showable show={post.filter===this.state.selectedFilter}>
              <Post post={post} key={post.id} />
              // </Showable>
              )}
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
