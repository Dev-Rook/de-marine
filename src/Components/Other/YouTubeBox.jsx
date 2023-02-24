import React from "react";

import "../../Styles/Global.scss";
import "../../Styles/Imported-Styles/YTPlayIcon.css";
import Styles from "../../Styles/Component-Styles/YouTubeBox.module.scss";

const Image = "Dog Water";

const YouTubeBox = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.YT_Box}>
        <img src={Image} alt="" className={Styles.BG_Content} />
        {/* <video src={""} className={Styles.BG_Content}></video> */}
        <a
          id="play-video"
          className="video-play-button"
          href={`https://youtube.com`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default YouTubeBox;
