import React, { Component } from "react";
import Post from "./Post.js";
import { data } from "./photos.js";
const post = data[0];

class Gallery extends Component {
  constructor() {
    super();
    // this.state = {users: users}
    this.state = { post: post };
  }

  render() {
    return (
      <div className="container">
        <Post post={this.state.post} key={this.state.post.id} />
      </div>
    );
  }
}
