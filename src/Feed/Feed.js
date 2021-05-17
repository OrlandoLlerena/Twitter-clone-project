import React from "react";
import "./feed.scss";
import TweetBox from "../TweetBox/Tweetbox";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
