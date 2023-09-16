import Image from "next/image";
import { CONTACT_INFORMATION, CONTACT_INFORMATION_ACTION } from "./data";
import styles from "@/styles/ContactInformationCard.module.scss";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const ContactInformationCard = ({
  info,
}: {
  info: (typeof CONTACT_INFORMATION)[0];
}) => {
  const { members, action } = info;
  const showInfo = action === CONTACT_INFORMATION_ACTION.copy;

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
    <>
      <div
        onMouseOut={mouseOutHandler}
        className={`${montserrat.className} ${styles["contact-information-card-wrapper"]}`}
      >
        <div className={styles["contact-information-card-members"]}>
          {members.map(({ id, info, logo, platform }) => {
            const shorthandPlatform = platform.replaceAll(" ", "");
            return (
              <div
                style={{
                  cursor: showInfo ? "default" : "pointer",
                }}
                key={id}
                className={`${styles[`${shorthandPlatform}-wrapper`]} ${
                  styles["contact-information-member-wrapper"]
                }`}
                onClick={() => openLink(info)}
              >
                <div className={styles["contact-information-logo-wrapper"]}>
                  <Image
                    className={styles[shorthandPlatform]}
                    alt={`logo of ${platform}`}
                    src={logo}
                    layout="fill"
                    quality={100}
                  />
                </div>
                <div className={styles["contact-information-info-wrapper"]}>
                  <div className={styles["contact-information-platform"]}>
                    {platform}
                  </div>
                  {showInfo && (
                    <div className={styles["contact-information-info"]}>
                      {info}
                      <Image
                        className={styles["copy-button"]}
                        width={20}
                        height={20}
                        src={copyVisible ? "/copy-icon.png" : "/tick-icon.png"}
                        alt="copy the content of contact information"
                        onClick={() => handleCopyLink(info)}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactInformationCard;
