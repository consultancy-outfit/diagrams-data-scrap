import { SinglePage1, StaticWebsitesImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StaticWebsitesPage = () => {
  return (
    <CommonPage
      pageTitle={`Single-Page App`}
      src={SinglePage1}
      backRoute="/single-page-app"
    />
  );
};

export default StaticWebsitesPage;
