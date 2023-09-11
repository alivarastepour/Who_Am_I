import styles from "@/styles/experienceCard.module.scss";
import { EXPERIENCE_DATA } from "./data";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "800"],
});

const ExperienceCard = ({ info }: { info: (typeof EXPERIENCE_DATA)[0] }) => {
  const {
    company: { industry, homepage, logo, name, about },
    location: { region, type },
    description,
    duration: { georgian, jalali },
    id,
    techStack,
  } = info;
  return (
    <>
      <div
        className={`${styles["experience-card-wrapper"]} ${montserrat.className}`}
      >
        <div className={styles["exprience-card-logo-wrapper"]}>
          {/* <a href={homepage} target="_blank">
            <Image
              alt={`current logo of ${name} company.`}
              src={logo}
              width={200}
              height={100}
            />
          </a> */}
        </div>
        <div className={styles["exprience-card-info-wrapper"]}>
          <div className={styles["company-info"]}>
            <div className={styles["company-name"]}>{name}</div>
            <div className={styles["company-industry"]}>{industry}</div>
            <div className={styles["company-about"]}>{about}</div>
          </div>
          <div className={styles["location-duration-info"]}>
            <div className={styles["locaiton-info"]}>
              <div className={styles["location-region"]}>{region}</div>
              <div className={styles["location-type"]}>{type}</div>
            </div>
            <div className={styles["duration-info"]}>
              <div className={styles["duration-jalali-info"]}>{jalali}</div>
              <div className={styles["duration-georgian-info"]}>
                ~ {georgian}
              </div>
            </div>
          </div>
          <div className={styles["description"]}>{description}</div>
          <div className={styles["tech-stach"]}>
            {techStack.map((item: string) => {
              return <div className={styles["tech-stach-item"]}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
