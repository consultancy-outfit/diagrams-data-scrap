"use client";

import React from "react";
import { CommonBoxPage } from "@/components/common-box-page";
import { CompleteDevelopersflowtoScrapingdataImage1, CompleteDevelopersflowtoScrapingdataImage2 } from "@/assets";

const arrayData = [
  {
    "key": "complete-developers-flow-to-scraping-data-1",
    "link": "/technical-perspectives",
    "icon": CompleteDevelopersflowtoScrapingdataImage1,
    "title": "Technical"
  },
  {
    "key": "complete-developers-flow-to-scraping-data-2",
    "link": "/static-websites",
    "icon": CompleteDevelopersflowtoScrapingdataImage2,
    "title": "Non Technical"
  }
];

const CompleteDevelopersflowtoScrapingdataPage = () => {
  return (
    <CommonBoxPage
      mainTitle="Complete Developer's flow to Scraping data"
      arrayData={arrayData}
      backRoute='/complete-developers-flow-to-scraping-data'
    />
  );
};

export default CompleteDevelopersflowtoScrapingdataPage;
