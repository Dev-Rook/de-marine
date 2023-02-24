import React, { useState, useEffect } from "react";
import "../Styles/Global.scss"
import Styles from "../Styles/Section-Styles/ProjectsSection.module.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import ProjectData from "../Data/Projects.json";

const ProjectsSection = () => {


  const [data, setData] = useState(ProjectData);

  return (
    <div className={"Section"}>
      <div
        className={Styles.Section_Title_Container}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className={Styles.Large_Text}>Projects</p>
      </div>

      <div className={Styles.Content_Container}>
        {data?.slice(0, 3).map((value) => {
          return (
            <div
              className={Styles.Project_Card}
              key={value?.id}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={Styles.Image_Container}>
                <img src={value?.Image} alt="" className={Styles.Image} />
              </div>

              <div className={Styles.Information_Section}>
                <p className={Styles.Title}>{value?.Title}</p>
                {/* <p className={Styles.Small_Text}>{value?.Description}</p> */}
              </div>

              {/* <div className={Styles.Stack_Container}>
                <div className={Styles.Stack}>{value.Stacks.stack_2}</div>
                <div className={Styles.Stack}>{value.Stacks.stack_1}</div>
                <div className={Styles.Stack}>{value.Stacks.stack_3}</div>
              </div> */}

              <div className={Styles.Bottom}>
                <a
                  href={value?.Links?.Code}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <GitHubIcon sx={{ fontSize: 30, color: "white" }} />
                </a>
                <a
                  href={value?.Links?.Demo}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <LaunchIcon sx={{ fontSize: 30, color: "white" }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;