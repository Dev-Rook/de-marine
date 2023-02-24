import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/Offer.module.scss";

import Offerdata from "../Data/Offer.json";

const Offer = () => {
  const [data, setData] = useState(Offerdata);
  return (
    <div className={"Section"}>
      <div className={"Section_Title_Container"}>
        <p className={"Question"}></p>
        <p className={"Section_Title"}>Company Services</p>
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
                    <p className={Styles.Title}>{value.Title}</p>
                    <p className={Styles.Description}>{value.Description}</p>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
      <Link to={"/services"}>
        <button className={Styles.ViewMoreButton}>View All</button>
      </Link>
    </div>
  );
};

export default Offer;
