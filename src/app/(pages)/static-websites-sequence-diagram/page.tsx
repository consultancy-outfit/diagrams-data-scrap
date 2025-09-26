import { StaticWebsitesSequenceDiagramImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesSequenceDiagramPage = () => {
  return (
    <CommonPage
      pageTitle={`Static websites sequence diagram`}
      src={StaticWebsitesSequenceDiagramImage}
      backRoute="/static-websites"
    />
  );
};

export default StaticWebsitesSequenceDiagramPage;
