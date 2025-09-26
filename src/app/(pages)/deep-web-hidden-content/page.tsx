import { DeepWebHiddenContentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeepWebHiddenContentPage = () => {
  return (
    <CommonPage
      pageTitle={`Deep Web/ Hidden Content `}
      src={DeepWebHiddenContentImage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="/full-developer-oriented-flow-for-deep-web-hidden-content"
      buttonTitle="Sequence Process"
    />
  );
};

export default DeepWebHiddenContentPage;
