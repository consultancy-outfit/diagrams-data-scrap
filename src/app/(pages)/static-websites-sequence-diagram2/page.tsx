import { StaticWebsitesSequenceDiagramImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesSequenceDiagramPage = () => {
  return (
    <CommonPage
      pageTitle={`API Based Website`}
      src={StaticWebsitesSequenceDiagramImage1}
      backRoute="/static-websites2"
    />
  );
};

export default StaticWebsitesSequenceDiagramPage;
