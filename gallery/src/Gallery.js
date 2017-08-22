import React, { Component } from "react";
import Post from "./Post.js";
const instagramResponse = require("./photos.js");
//console.log(instagramResponse)
const data = instagramResponse.data;
//fix in a second
// const post = data[1];

class Gallery extends Component {
  constructor() {
    super();
    this.state = { posts: data };
  }

  render() {
    return (
      <div className="container">
        {/* <table className="table table-bordered">
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
        </table> */}
        <div className="card-deck">
          {this.state.posts.map(post => <Post post={post} key={post.id} />)}
          {/* <Post post={this.state.post} key={this.state.post.id} /> */}
        </div>
      </div>
    );
  }
}
export default Gallery;
