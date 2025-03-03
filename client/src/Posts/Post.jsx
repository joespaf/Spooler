import React from "react";

const Post = ({ title, content, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
      <hr />
    </div>
  );
};

export default Post;
