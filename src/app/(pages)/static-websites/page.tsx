import { StaticWebsitesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesPage = () => {
  return (
    <CommonPage
      pageTitle={`Static websites`}
      src={StaticWebsitesImage}
      backRoute="/complete-developers-flow-to-scraping-data"
      isButton={true}
      buttonRoute="/static-websites-sequence-diagram"
      buttonTitle="Sequence Process"
    />
  );
};

export default StaticWebsitesPage;
