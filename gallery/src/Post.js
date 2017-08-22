import React, { Component } from "react";
import { data } from "./photos.js";
const post = data[0];

const Post = () => {
  //TODO: CONVERT UNIX EPOCH TIME STUFFZ
  const { username, creation_time, images, likes, comments, tags, filter } = post;
//  console.log(username);
  return (
    <tr>
      <td>
        {username}
      </td>
      <td>
        {creation_time}
      </td>
      <td>
        <img src={images.thumbnail.url} />
      </td>
      <td>
        {likes.count}
      </td>
      <td>
        {comments.count}
      </td>
      <td>
        {tags}
      </td>
      <td>
        {filter}
      </td>
    </tr>
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
