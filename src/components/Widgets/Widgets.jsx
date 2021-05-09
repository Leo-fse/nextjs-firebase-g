import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets flex-3">
      <div className="widgets__input flex items-center bg-gray-100 p-2 rounded-2xl mt-2 ml-5">
        <SearchIcon className="widgets__searchIcon text-gray-500" />
        <input
          className="border-0 bg-gray-100"
          placeholder="Search Twitter"
          type="text"
        />
      </div>

      <div className="widgets__widgetContainer mt-4 ml-5 p-5 rounded-2xl bg-widgets">
        <h2 className="font-extrabold text-xl">Whats happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
