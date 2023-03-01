import React, {useState} from "react";

import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/HowWeDoIt.module.scss";

const HowWeDoIt = () => {
  return (
    <div className={"Section"}>
      <div className={"Section_Title_Container"}>
        <p className={"Question"}></p>
        <p className={"Section_Title"}>How We DO It</p>
      </div>

      <div className={Styles.Content_Container}>

      </div>
    </div>
  );
};

export default HowWeDoIt;
