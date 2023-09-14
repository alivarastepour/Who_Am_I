import styles from "@/styles/experience.module.scss";
import { EXPERIENCE_DATA } from "./data";
import ExperienceCard from "./ExperienceCard";
import { Montserrat } from "next/font/google";
import { useIntersection } from "@/hooks/useIntersection";
const monrserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});
const Experience = () => {
  useIntersection({
    observables: [
      { className: styles["lamp-effect"], id: "exprerience-header" },
    ],
    parentId: "exprerience-header",
  });

  return (
    <>
      <div className={styles["experience-wrapper"]}>
        <div
          id="exprerience-header"
          className={`${monrserrat.className} ${styles["exprerience-header"]}`}
        >
          {["e", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map(
            (letter: string, index) => {
              const identifier = `${letter}-${index}`;
              return (
                <span
                  className={`${styles[identifier]} ${styles[letter]}`}
                  key={identifier}
                >
                  {letter}
                </span>
              );
            }
          )}
        </div>
        <div className={styles["experience-content-wrapper"]}>
          {EXPERIENCE_DATA.map((item) => {
            return <ExperienceCard key={item.id} info={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
