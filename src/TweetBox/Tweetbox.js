import React, { useState } from "react";
import "./Tweetbox.scss";
import { Avatar, Button } from "@material-ui/core";
import db from "../Firebase";

function Tweetbox() {
  const [tweetMesage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Lenin Rivera",
      username: "whiskeyLover",
      verified: true,
      text: tweetMesage,
      image: tweetImage,
      avatar:
        "https://media.istockphoto.com/photos/strong-man-doing-deadlift-training-in-gym-picture-id838386570?k=6&m=838386570&s=612x612&w=0&h=KJeJiMjaikS0oy8ZzmdjocnfisgN3ru55cLKGnYQ6NA=",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1222657003350319106/f7QwpKjF_400x400.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMesage}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
