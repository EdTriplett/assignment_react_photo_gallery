import React, { Component } from "react";
import Post from "./Post.js";
const instagramResponse = require("./photos.js");
//console.log(instagramResponse)
const data = instagramResponse.data;
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
        <table className="table table-bordered">
        <thead className="thead-inverse">
          <tr>
            <th>username</th>
            <th>creation_time</th>
            <th>thumbnail</th>
            <th># of Likes</th>
            <th># of Comments</th>
            <th>Tags</th>
            <th>Filter Used</th>
          </tr>
          </thead>
          <Post post={this.state.post} key={this.state.post.id} />
        </table>
      </div>
    );
  }
}
export default Gallery;
