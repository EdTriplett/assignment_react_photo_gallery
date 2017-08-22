import React, { Component } from "react";
// import { data } from "./photos.js";

const Post = ({ post }) => {
  //TODO: CONVERT UNIX EPOCH TIME STUFFZ
  const { user, creation_time, images, likes, comments, tags, filter } = post;
  //  console.log(username);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={images.thumbnail.url}
        alt="post image card"
      />
      <div className="card-body">
        <p className="card-text">
          Username: {user.username}
        </p>
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
          Tags: {tags}
        </p>
        <p className="card-text">
          <small className="muted">
            {creation_time}
          </small>
        </p>
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
