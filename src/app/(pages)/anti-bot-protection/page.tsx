import { AntiBotProtectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AntiBotProtectionPage = () => {
  return (
    <CommonPage
      pageTitle={`Websites Scraps with Anti-bot Protection`}
      src={AntiBotProtectionImage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="sequence-diagram-anti-bot-protection"
      buttonTitle="Sequence Process"
    />
  );
};

export default AntiBotProtectionPage;
