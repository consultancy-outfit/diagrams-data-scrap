import { SinglePage, StaticWebsitesImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesPage = () => {
  return (
    <CommonPage
      pageTitle={`Static websites`}
      src={SinglePage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="/single-page-app-diagram"
      buttonTitle="Sequence Process"
    />
  );
};

export default StaticWebsitesPage;
