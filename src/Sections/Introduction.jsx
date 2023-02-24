import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";
import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/Introduction.module.scss";

// import YouTubeBox from "../Components/Other/YouTubeBox";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Services from "../Data/Services.json";

const Introduction = () => {
  const { scrollUp } = useScrollUp();
  const [data] = useState(Services);
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        {/* <div className={Styles.Tech_Grid}>
          {data?.slice(0, 4).map((value) => {
            return (
              <div className={Styles.Card} key={value.id}>
                <img src={value.Icon} alt="Icon" className={Styles.Icon} />
                <p className={Styles.Title}>{value.Title}</p>
              </div>
            );
          })}
        </div> */}

        <div className={Styles.About_Container}>
          <p className={Styles.Brand}>D & E Marina</p>
          <p className={Styles.Question}>Who We Are</p>
          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            consectetur? Voluptates placeat nesciunt rem doloribus quae eos
            libero eveniet et.
          </p>

          {/* <Link to={"About"}>
            <button onClick={scrollUp} className={Styles.Read_More_Button}>
              Read More
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
