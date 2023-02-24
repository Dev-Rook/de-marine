import React, {useState} from "react";
import { Link } from "react-router-dom";

import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/StaffSection.module.scss";

import StaffData from "../Data/Personel.json"

const StaffSection = () => {
  const [data] = useState(StaffData)
  return (
    <div className={"Section"}>
      <div className={"Section_Title_Container"}>
        <p className={"Question"}></p>
        <p className={"Section_Title"}>Company Staff</p>
      </div>

      <div className={Styles.Content_Container}>
        {data &&
          data.slice(0, 3).map((value) => {
            return (
              <a
                href={value.Link}
                rel={"noreferrer"}
                target={"_blank"}
                key={value.id}
              >
                <div className={Styles.Card}>
                  <div className={Styles.Preview_Container}>
                    <img src={value.Icon} alt="" className={Styles.Preview} />
                  </div>

                  <div className={Styles.Description_Container}>
                    <p className={Styles.Title}>{value.Name}</p>
                    <p className={Styles.Title}>{value.Title}</p>
                    <p className={Styles.Description}>{value.Bio}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      {/* <Link to={"/services"}>
        <button className={Styles.ViewMoreButton}>View All</button>
      </Link> */}
    </div>
  );
};

export default StaffSection;
