import { StaticWebsitesSequenceDiagramImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesSequenceDiagramPage = () => {
  return (
    <CommonPage
      pageTitle={`Static websites sequence diagram`}
      src={StaticWebsitesSequenceDiagramImage1}
      backRoute="/static-websites1"
    />
  );
};

export default StaticWebsitesSequenceDiagramPage;
