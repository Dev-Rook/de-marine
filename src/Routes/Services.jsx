import React, { useState } from "react";

import "../Styles/Global.scss";
import Styles from "../Styles/Section-Styles/Offer.module.scss";

import Offer from "../Components/Other/OfferSection";
import HowWeDoIt from "../Sections/HowWeDoIt";

import ServiceData from "../Data/Services.json";

const Services = () => {
  const [data] = useState(ServiceData);
  return (
    <div className={"Section"}>
      <Offer />
      <HowWeDoIt />
    </div>
  );
};

export default Services;
