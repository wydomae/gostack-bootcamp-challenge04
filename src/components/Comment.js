import React from "react";
import PropTypes from "prop-types";

function Comment({ id, name, avatar, content }) {
  return (
    <div id={id} className="commentSection">
      <img src={avatar} alt={name} />
      <div className="commentContent">
        <p>
          <strong>{name}</strong> {content}
        </p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Comment;
