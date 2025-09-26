import { StaticWebsitesImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesPage = () => {
  return (
    <CommonPage
      pageTitle={`API Based Website`}
      src={StaticWebsitesImage1}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="/static-websites-sequence-diagram1"
      buttonTitle="Sequence Process"
    />
  );
};

export default StaticWebsitesPage;
