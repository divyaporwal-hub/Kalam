import React from "react";
import "../../styles/BlogFooter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComments, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

const BlogFooter = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="likeContainer">
          <div className="likeCount">0</div>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
        <div className="commentSection">
        <div className="commentCount">0</div>
        <FontAwesomeIcon icon={faComments} />
        </div>
        <div className="shareSection">
           <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </>
  );
};

export default BlogFooter;
