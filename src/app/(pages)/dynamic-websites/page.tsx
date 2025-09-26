"use client";
import { DynamicWebsitesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DynamicWebsitesPage1 = () => {
  return (
    <CommonPage
      isButton={true}
      buttonRoute="/full-developer-oriented-flow-for-dynamic-website-scraping"
      buttonTitle="Sequence Process"
      pageTitle={`Dynamic Websites`}
      src={DynamicWebsitesImage}
      backRoute="/technical-perspectives"
    />
  );
};

export default DynamicWebsitesPage1;
