import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import "../Styles/Global.scss";

// Page Section Imports Start
import Hero from "../Sections/Hero";
import Introduction from "../Sections/Introduction";
import YouTubeBox from "../Components/Other/YouTubeBox";
import Offer from "../Sections/Offer";
import WorkWithUs from "../Sections/WorkWithUs";
import ProjectsSection from "../Sections/ProjectsSection";
import History from "../Sections/History";
import StaffSection from "../Sections/StaffSection";
// Page Section Imports End

const Index = () => {
  return (
    <div className={"Page"}>
      <Hero />
      <Introduction />
      <YouTubeBox />
      <Offer />
      <ProjectsSection />
      <History />
      <StaffSection />
      <WorkWithUs />
    </div>
  );
};

export default Index;
