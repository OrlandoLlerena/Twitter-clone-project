import React from "react";
import "./Tweetbox.scss";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://https://picsum.photos/" />
          <input placeholder="What's Happening?" type="text" />
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
