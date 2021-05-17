import React from "react";
import "./widgets.scss";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      {/* Search */}
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetsContainer">
        {/* Whats happening */}
        <h2>What's Happening? </h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
      </div>
      {/* who to follow */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="cleverqazi"
        option={{ height: 400 }}
      />

      <TwitterShareButton
        url={"https://facebook.com/cleverprogrammer"}
        options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
      />
    </div>
  );
}

export default Widgets;
