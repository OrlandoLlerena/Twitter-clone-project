import React from "react";
import "./feed.scss";
import TweetBox from "../TweetBox/Tweetbox";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        {/* Tweet box */}
        <TweetBox />

        {/* post */}
        <Post />

        {/* post */}
        {/* post */}
        {/* post */}
      </div>
    </div>
  );
}

export default Feed;
