import { StaticWebsitesSequenceDiagramImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesSequenceDiagramPage = () => {
  return (
    <CommonPage
      pageTitle={`Non Technical Scrapping flow`}
      src={StaticWebsitesSequenceDiagramImage}
      backRoute="/static-websites"
    />
  );
};

export default StaticWebsitesSequenceDiagramPage;
