import React, { useState, useEffect } from "react";
import "./feed.scss";
import TweetBox from "../TweetBox/Tweetbox";
import Post from "../Post/Post";
import db from "../Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <div>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}

        <Post
          displayName="Orlando Llerena"
          username="hulksmash"
          verified={true}
          text="Easy like Sunday Morning"
          avatar="https://pbs.twimg.com/profile_images/1222657003350319106/f7QwpKjF_400x400.jpg"
          image="https://media.giphy.com/media/PmGJCIL6mImz0LHoAH/giphy.gif"
        />
      </div>
    </div>
  );
}

export default Feed;
