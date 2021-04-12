import React from "react";
import { useSelector } from "react-redux";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img src="./icons/edit.svg" alt="edit" />
          <img src="./icons/delete.svg" alt="delete" />
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      <p>{post.content}</p>

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
