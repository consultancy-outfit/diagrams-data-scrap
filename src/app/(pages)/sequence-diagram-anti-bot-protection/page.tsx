import { SequenceDiagramAntiBotProtectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SequenceDiagramAntiBotProtectionPage = () => {
  return (
    <CommonPage
      pageTitle={`Sequence Diagram`}
      src={SequenceDiagramAntiBotProtectionImage}
      backRoute="/anti-bot-protection"
    />
  );
};

export default SequenceDiagramAntiBotProtectionPage;
