import React from "react";
import { Link } from "react-router-dom";

import "../Styles/Global.scss";
import  "../Styles/Imported-Styles/WWU_Button.module.scss";
import Styles from "../Styles/Section-Styles/WorkWithUs.module.scss";

import Image from "../Assets/Images/DSC_0007 (1)-01.jpeg";

const WorkWithUs = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Container}>
        <div className={Styles.Background}>
          <div className={Styles.Diffuser}></div>
          <img src={Image} alt="" className={Styles.BackgroundImage} />
        </div>
        <div className={Styles.Content_Box}>
          <p className={Styles.Title}>This is the title</p>
          <p className={Styles.Text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium vero magnam nulla ex laborum voluptatum!
          </p>

          <Link to={"/Contact"}>
            <button className={Styles.WWU_Button}>Get In Touch</button>
            {/* <button className="button-86" role="button">Get In Touch</button> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
