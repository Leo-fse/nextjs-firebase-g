import { Avatar } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from "react";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post flex items-start border-b border-twitterColor pb-2">
      <div className="post_avatar p-5">
        <Avatar src="./Avatar/gunji.jpg"></Avatar>
      </div>
      <div className="post__body flex-1 p-2">
        <div className="post__header">
          <div className="post__headerText text-xs mb-1">
            <h3>
              Rafeh Qazi{" "}
              <span className="post__headerSpecial font-semibold text-xs text-gray-500">
                <VerifiedUserIcon className="post__badge text-xs text-twitterColor"></VerifiedUserIcon>
                @cleverqzi
              </span>
            </h3>
          </div>
          <div className="post__headerDescription mb-2 text-xs">
            <p>I challenge you to build a twitter clone</p>
          </div>
        </div>
        <img className="rounded-2xl" src="./gnjiAkiko.jpg" alt="" />
        <div className="post__footer flex justify-between mt-2">
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
