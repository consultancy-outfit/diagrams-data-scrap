import { WebsitesWithPaginationInfiniteScrollImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WebsitesWithPaginationInfiniteScrollPage = () => {
  return (
    <CommonPage
      pageTitle={`Websites with Pagination/ infinite Scroll`}
      src={WebsitesWithPaginationInfiniteScrollImage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="/websites-with-pagination-infinite-scroll-section1"
      buttonTitle="Sequence Process"
    />
  );
};

export default WebsitesWithPaginationInfiniteScrollPage;
