import React, { Component } from "react";
// import { data } from "./photos.js";

const Post = ({ post }) => {
  //TODO: CONVERT UNIX EPOCH TIME STUFFZ
  const { user, created_time, images, likes, comments, tags, filter } = post;
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <a href={`${images.standard_resolution.url}`}>
          <img
            className="card-img-top"
            src={images.thumbnail.url}
            alt="post image card"
          />
        </a>
        <div className="card-body">
          <a href={`https://www.instagram.com/${user.username}/`}>
            <p className="card-text">
              Username: {user.username}
            </p>
          </a>
          <p className="card-text">
            Likes: {likes.count}
          </p>
          <p className="card-text">
            Comments: {comments.count}
          </p>
          <p className="card-text">
            Filter: {filter}
          </p>
          <p className="card-text">
            Tags: {"#" + tags.join(", #")}
          </p>
        </div>
        <div className="card-footer">
          <p className="card-text">
            <small className="muted">
              Posted at:{" "}
              {new Date(Number(created_time) * 1000).toLocaleString()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

//
// Username
// the time it was posted,
// the photo itself (is link)
// likes Count
// comments  Count
// Hashtags
// Filter used
export default Post;
