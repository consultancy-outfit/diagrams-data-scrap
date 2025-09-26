import { WebsiteBehindFormImage } from "@/assets";
import { CommonPage } from "@/components";

const WebsiteBehindFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Website Behind Form`}
      src={WebsiteBehindFormImage}
      backRoute="/technical-perspectives"
      isButton={true}
      buttonRoute="website-behind-form-sequence"
      buttonTitle="Sequence Process"
    />
  );
};

export default WebsiteBehindFormPage;
