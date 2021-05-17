import React from "react";
import "./Post.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
  displayName,
  username,
  verified,
  //   timestamp,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://picsum.photos/200" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              This Guy{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @hulksmash
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I'm building my twitter webpage and adding to my profolio</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/PmGJCIL6mImz0LHoAH/giphy.gif"
          alt="victory"
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
