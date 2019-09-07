import React from "react";
import PropTypes from "prop-types";
import Comment from "../components/Comment";

function Post({ post, id, name, avatar, date, content }) {
  return (
    <div id={id} className="postSection">
      <div className="postWrapper">
        <div className="postHeader">
          <img src={avatar} alt={name} />
          <div className="postUser">
            <span className="name">{name}</span>
            <span className="date">{date}</span>
          </div>
        </div>
        <p className="postContent">{content}</p>
      </div>

      <section>
        {post[id - 1].comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            name={comment.author.name}
            avatar={comment.author.avatar}
            content={comment.content}
          />
        ))}
      </section>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Post;
