"use client";

import React from "react";
import { CommonBoxPage } from "@/components/common-box-page";
import { TechnicalPerspectivesImage1, TechnicalPerspectivesImage2, TechnicalPerspectivesImage3, TechnicalPerspectivesImage4, TechnicalPerspectivesImage5, TechnicalPerspectivesImage6, TechnicalPerspectivesImage7, TechnicalPerspectivesImage8 } from "@/assets";

const arrayData = [
  {
    "key": "technical-perspectives-1",
    "link": "/dynamic-websites1",
    "icon": TechnicalPerspectivesImage1,
    "bgColor": "#16853F",
    "title": "Static Website "
  },
  {
    "key": "technical-perspectives-2",
    "link": "/api-based-websites",
    "icon": TechnicalPerspectivesImage2,
    "bgColor": "#16853F",
    "title": "API Based Websites "
  },
  {
    "key": "technical-perspectives-3",
    "link": "/website-behind-form",
    "icon": TechnicalPerspectivesImage3,
    "bgColor": "#16853F",
    "title": "Website behind Form"
  },
  {
    "key": "technical-perspectives-4",
    "link": "/websites-with-pagination-infinite-scroll",
    "icon": TechnicalPerspectivesImage4,
    "bgColor": "#16853F",
    "title": "Websites with Pagination/ infinite Scroll"
  },
  {
    "key": "technical-perspectives-5",
    "link": "/dynamic-website",
    "icon": TechnicalPerspectivesImage5,
    "bgColor": "#16853F",
    "title": "Dynamic Website"
  },
  {
    "key": "technical-perspectives-6",
    "link": "/anti-bot-protection",
    "icon": TechnicalPerspectivesImage6,
    "bgColor": "#16853F",
    "title": "Website with Anti- bot Protection"
  },
  {
    "key": "technical-perspectives-7",
    "link": "/deep-web-hidden-content",
    "icon": TechnicalPerspectivesImage7,
    "bgColor": "#16853F",
    "title": "Deep Web/ Hidden Content "
  },
  {
    "key": "technical-perspectives-8",
    "link": "/single-page-app",
    "icon": TechnicalPerspectivesImage8,
    "bgColor": "#16853F",
    "title": "Single Page App "
  }
];

const TechnicalPerspectivesPage = () => {
  return (
    <CommonBoxPage
      mainTitle="Technical Perspectives"
      arrayData={arrayData}
      backRoute='/complete-developers-flow-to-scraping-data'
    />
  );
};

export default TechnicalPerspectivesPage;
