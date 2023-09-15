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
  const { category, members, action } = info;
  const showInfo = action === CONTACT_INFORMATION_ACTION.copy;

  const [copyVisible, setCopyVisible] = useState(true);
  return (
    <>
      <div
        onMouseOut={() => {
          if (!showInfo) return;
          setCopyVisible(true);
        }}
        className={`${montserrat.className} ${styles["contact-information-card-wrapper"]}`}
      >
        <div className={styles["contact-information-card-header"]}>
          {category}
        </div>
        <div className={styles["contact-information-card-members"]}>
          {members.map(({ id, info, logo, platform }) => {
            return (
              <div
                style={{
                  cursor: showInfo ? "default" : "pointer",
                }}
                key={id}
                className={styles["contact-information-member-wrapper"]}
                onClick={() => {
                  if (typeof window === "undefined" || showInfo) return;
                  window.open(info, "_blank");
                }}
              >
                <div className={styles["contact-information-logo-wrapper"]}>
                  <Image
                    className={styles[platform.replaceAll(" ", "")]}
                    alt={`logo of ${platform}`}
                    src={logo}
                    width={100}
                    height={100}
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
                        onClick={() => {
                          if (typeof window === "undefined") return;
                          setCopyVisible(false);
                          setTimeout(() => setCopyVisible(true), 1000);
                        }}
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
