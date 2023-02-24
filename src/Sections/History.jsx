import React from "react";

import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/History.module.scss";

import TimelineAlternate from "../Components/Other/TimeLineAlternate";
import TimelineRight from "../Components/Other/TimeLineRight";

const History = () => {
  return (
    <div className={"Section"}>
      <div className={"Section_Title_Container"}>
        <p className={"Question"}>History</p>
        <p className={"Section_Title"}>Company Timeline</p>
      </div>

      <div className={Styles.Timeline_Alternate}>
        <TimelineAlternate />
      </div>

      <div className={Styles.Timeline_Right}>
        <TimelineRight />
      </div>
    </div>
  );
};

export default History;
