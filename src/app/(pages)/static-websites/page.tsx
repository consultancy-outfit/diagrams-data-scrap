import { StaticWebsitesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesPage = () => {
  return (
    <CommonPage
      pageTitle={`Static websites`}
      src={StaticWebsitesImage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="/static-websites-sequence-diagram"
      buttonTitle="Sequence Process"
    />
  );
};

export default StaticWebsitesPage;
