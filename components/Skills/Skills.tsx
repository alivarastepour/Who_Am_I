import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/skills.module.scss";
import { Montserrat } from "next/font/google";
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
        <div
          id="skills-header"
          className={`${monrserrat.className} ${styles["skills-header"]}`}
        >
          {[
            "t",
            "e",
            "c",
            "h",
            "n",
            "i",
            "c",
            "a",
            "l",
            " ",
            "s",
            "k",
            "i",
            "l",
            "l",
            "s",
          ].map((letter, index) => {
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
    </>
  );
};

export default Skills;
