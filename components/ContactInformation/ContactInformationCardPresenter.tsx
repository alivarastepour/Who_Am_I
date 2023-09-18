import { Montserrat } from "next/font/google";
import Image from "next/image";

import styles from "@/styles/ContactInformationCard.module.scss";
import { IContactInformationCardPresenterProps } from "@/interfaces/IContactInformationCardPresenterProps";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const ContactInformationCardPresenter = ({
  handleCopyLink,
  members,
  mouseOutHandler,
  openLink,
  copyVisible,
  showInfo,
}: IContactInformationCardPresenterProps) => {
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

export default ContactInformationCardPresenter;
