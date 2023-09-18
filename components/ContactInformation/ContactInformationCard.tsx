import { useState } from "react";

import ContactInformationCardPresenter from "./ContactInformationCardPresenter";

import { IContactInformationDataItem } from "@/interfaces/IContactInformationDataItem";

const ContactInformationCard = ({
  info,
}: {
  info: IContactInformationDataItem;
}) => {
  const { members, action } = info;
  const showInfo = action === "copy";

  const [copyVisible, setCopyVisible] = useState(true);

  function mouseOutHandler() {
    if (!showInfo) return;
    setCopyVisible(true);
  }

  function openLink(link: string) {
    if (typeof window === "undefined" || showInfo) return;
    window.open(link, "_blank");
  }

  function handleCopyLink(link: string) {
    function handleCopy() {
      if (typeof window === "undefined") return;
      window.navigator.clipboard.writeText(link);
    }

    function toggleCopyButton() {
      setCopyVisible(false);
      setTimeout(() => setCopyVisible(true), 1000);
    }

    handleCopy();
    toggleCopyButton();
  }

  return (
    <ContactInformationCardPresenter
      handleCopyLink={handleCopyLink}
      members={members}
      mouseOutHandler={mouseOutHandler}
      openLink={openLink}
      copyVisible={copyVisible}
      showInfo={showInfo}
    />
  );
};

export default ContactInformationCard;
