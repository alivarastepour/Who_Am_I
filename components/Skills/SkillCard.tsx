import { Montserrat, Inter } from "next/font/google";

import styles from "@/styles/skillCard.module.scss";

import { SKILLS } from "./data";
import { ISkillItem } from "@/interfaces/ISkillItem";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
});

const SkillCard = ({ info }: { info: ISkillItem }) => {
  const { members, topic } = info;
  const identifier = `${topic.replaceAll(" ", "").toLowerCase()}-wrapper`;

  return (
    <div className={`${styles[identifier]} ${styles["skill-card-wrapper"]}`}>
      <div className={`${styles["skill-card-topic"]} ${montserrat.className}`}>
        {topic}
      </div>
      <div className={styles["skill-card-members-wrapper"]}>
        {members.map((member) => {
          return (
            <span
              className={`${inter.className} ${styles["skill-card-member"]}`}
              key={member}
            >
              {member}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
