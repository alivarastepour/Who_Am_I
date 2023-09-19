import { Montserrat } from "next/font/google";

import { useIntersection } from "@/hooks/useIntersection";

import styles from "@/styles/skills.module.scss";

import { SKILLS } from "./data";

import SkillCard from "./SkillCard";

const monrserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const Skills = () => {
  useIntersection({
    observables: [{ className: styles["lamp-effect"], id: "skills-header" }],
    parentId: "skills-header",
  });
  return (
    <>
      <div className={styles["skills-wrapper"]}>
        <div className={styles["skills-background-wrapper"]}></div>
        <div
          id="skills-header"
          className={`${monrserrat.className} ${styles["skills-header"]}`}
        >
          <div className={styles["header-first"]}>
            {["t", "e", "c", "h", "n", "i", "c", "a", "l"].map(
              (letter, index) => {
                const indicator = `${letter}-${index}`;
                return (
                  <span
                    key={indicator}
                    className={`${styles[indicator]} ${letter}`}
                  >
                    {letter}
                  </span>
                );
              }
            )}
          </div>

          <div className={styles["header-second"]}>
            {["s", "k", "i", "l", "l", "s"].map((letter, index) => {
              const indicator = `${letter}-${index}`;
              return (
                <span
                  key={indicator}
                  className={`${styles[indicator]} ${letter}`}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles["skills-content"]}>
          {SKILLS.map((skill) => {
            return <SkillCard key={skill.topic} info={skill} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
