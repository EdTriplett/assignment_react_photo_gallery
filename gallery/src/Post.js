import React, { Component } from "react";

const Post = () => {
  //TODO: CONVERT UNIX EPOCH TIME STUFFZ
  const { ...post } = post;
  console.log(username);
  return (
    <tr>
      <td>
        {username}
      </td>
      <td>
        {creation_time}
      </td>
      <td>
        {images.thumbnail}
      </td>
      <td>
        {likes.count}
      </td>
      <td>
        {comments.count}
      </td>
      <td>
        {hashtags.count}
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
