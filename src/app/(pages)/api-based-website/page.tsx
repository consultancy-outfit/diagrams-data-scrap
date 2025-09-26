import { ApiBasedWebsiteImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApiBasedWebsitePage = () => {
  return (
    <CommonPage
      pageTitle={`API Based Website`}
      src={ApiBasedWebsiteImage}
      backRoute="/complete-developers-flow-to-scraping-api-based-websites"
    />
  );
};

export default ApiBasedWebsitePage;
