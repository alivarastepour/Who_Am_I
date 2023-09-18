import { Montserrat } from "next/font/google";

import styles from "@/styles/allInOne.module.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
});
    
const AllInOnePresenter = () => {
  return (
    <>
      <div
        id={"all-in-one-wrapper"}
        className={`${styles["all-in-one-wrapper"]} ${montserrat.className}`}
      >
        <div
          id={"all-in-one-background-wrapper"}
          className={styles["all-in-one-background-wrapper"]}
        ></div>
        <div
          id={"all-in-one-title"}
          className={`${styles["all-in-one-title"]} ${montserrat.className}`}
        >
          explore different sections for more
        </div>
        <div
          id="feature-container-1"
          className={`${styles["feature-container"]} ${styles["feature-container-1"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Experience</div>
            <div className={`${styles["description"]} description`}>
              I&apos;m currently working as a web front-end developer at
              <a
                className={styles["company-homepage"]}
                target="_blank"
                href="https://parsimap.ir"
              >
                {"Parsimap"}
              </a>
              . Alongside my full-time role, I&apos;ve always kept an open eye
              on freelancing positions and have taken on a few projects. I also
              love open-source contribution although nowadays i don&apos;t get
              to do that a lot. As helping people is always a pleasure for me, i
              was a Teaching assistant for a couple of times in SBU and a course
              mentor in an e-learning platform.{" "}
              <a href="#exprerience-header">Read more</a>.
            </div>
          </div>
          <div
            id={"feature-container-border-container-1"}
            className={`${styles["feature-container-border-container-1"]} ${styles["feature-container-border-container"]}`}
          ></div>
        </div>
        <div
          id="feature-container-2"
          className={`${styles["feature-container"]} ${styles["feature-container-2"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Soft Skills</div>
            <div className={`${styles["description"]} description`}>
              With a commitment to consistency and a genuine passion for
              development, I find immense satisfaction in sharing my knowledge
              and helping fellow developers thrive. My caring nature extends to
              our project outputs, where I consistently strive for excellence.
              Whether through mentorship or personal dedication, I aim to
              contribute positively to our team and the success of our projects.
            </div>
          </div>
          <div
            id={"feature-container-border-container-2"}
            className={`${styles["feature-container-border-container-2"]} ${styles["feature-container-border-container"]}`}
          ></div>
        </div>
        <div
          id="feature-container-3"
          className={`${styles["feature-container"]} ${styles["feature-container-3"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Technical Skills</div>
            <div className={`${styles["description"]} description`}>
              As my primary enthusiasm is web front-end development, my tech
              stack includes JavaScript and TypeScript as programming languages,
              ReactJS and NextJS as frameworks, MUI and CSS preprocessors as
              styling tools, and Redux as a state management tool. I think
              it&apos;s worth mentioning that although fancy tools have made DX
              much easier, putting them into proper use requires a solid
              knowledge of basic concepts. So, I don&apos;t limit myself to any
              specific tool, which makes me open to new technologies.
              <a href="#skills-header">Read more</a>.
            </div>
          </div>
          <div
            id={"feature-container-border-container-3"}
            className={`${styles["feature-container-border-container-3"]} ${styles["feature-container-border-container"]}`}
          ></div>
        </div>
        <div
          id="feature-container-4"
          className={`${styles["feature-container"]} ${styles["feature-container-4"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Education</div>
            <div className={`${styles["description"]} description`}>
              For the time being, I&apos;m a senior CE student at Shahid
              Beheshti University of Tehran. Being in this community has played
              a crucial role in my career. I&apos;ve met a lot of wonderful
              people who have taught me - directly or indirectly - how to be a
              better both in my profession and in real life.
            </div>
          </div>
          <div
            id={"feature-container-border-container-4"}
            className={`${styles["feature-container-border-container-4"]} ${styles["feature-container-border-container"]}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AllInOnePresenter;
