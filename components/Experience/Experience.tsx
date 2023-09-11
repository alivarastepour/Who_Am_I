import styles from "@/styles/experience.module.scss";
import { EXPERIENCE_DATA } from "./data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <>
      <div className={styles["experience-wrapper"]}>
        {EXPERIENCE_DATA.map((item) => {
          return <ExperienceCard key={item.id} info={item} />;
        })}
      </div>
    </>
  );
};

export default Experience;
