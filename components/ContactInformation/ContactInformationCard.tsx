import Image from "next/image";
import { CONTACT_INFORMATION, CONTACT_INFORMATION_ACTION } from "./data";
import styles from "@/styles/ContactInformationCard.module.scss";
const ContactInformationCard = ({
  info,
}: {
  info: (typeof CONTACT_INFORMATION)[0];
}) => {
  const { category, members, action } = info;
  const showInfo = action === CONTACT_INFORMATION_ACTION.copy;

  return (
    <>
      <div className={styles["contact-information-card-header"]}>
        {category}
      </div>
      <div className={styles["contact-information-card-members"]}>
        {members.map(({ id, info, logo, platform }) => {
          return (
            <div key={id} className={styles["contact-information-wrapper"]}>
              <div className={styles["contact-information-logo-wrapper"]}>
                <Image
                  alt={`logo of ${platform}`}
                  src={logo}
                  width={10}
                  height={10}
                />
              </div>
              <div className={styles["contact-information-info-wrapper"]}>
                <div className={styles["contact-information-platform"]}>
                  {platform}
                </div>
                {showInfo && (
                  <div className={styles["contact-information-info"]}>
                    {info}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactInformationCard;
