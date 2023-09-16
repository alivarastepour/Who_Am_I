import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/allInOne.module.scss";
import { Montserrat as Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
});

const AllInOne = () => {
  const AllInOneWrapperID = "all-in-one-wrapper";
  const companyName = "Parsimap";
  useIntersection({
    parentId: AllInOneWrapperID,
    observables: [
      { className: "all-in-one-sliding-feature-1", id: "feature-container-1" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-1",
      },
      { className: "all-in-one-sliding-feature-2", id: "feature-container-2" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-2",
      },
      { className: "all-in-one-sliding-feature-3", id: "feature-container-3" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-3",
      },
      { className: "all-in-one-sliding-feature-4", id: "feature-container-4" },
      {
        className: "border-expansion",
        id: "feature-container-border-container-4",
      },
      { className: "all-in-one-sliding-title", id: "all-in-one-title" },
      {
        className: "all-in-one-fade-in-background",
        id: "all-in-one-background-wrapper",
      },
    ],
  });
  return (
    <>
      <div
        id={"all-in-one-wrapper"}
        className={`${styles["all-in-one-wrapper"]} ${inter.className}`}
      >
        <div
          id={"all-in-one-background-wrapper"}
          className={styles["all-in-one-background-wrapper"]}
        ></div>
        <div
          id={"all-in-one-title"}
          className={`${styles["all-in-one-title"]} ${inter.className}`}
        >
          explore different sections for more
        </div>
        <div
          id="feature-container-1"
          className={`${styles["feature-container"]} ${styles["feature-container-1"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Exprience</div>
            <div className={`${styles["description"]} description`}>
              I&apos;m currently working as a web front-end developer at
              <a
                className={styles["company-homepage"]}
                target="_blank"
                href="https://parsimap.ir"
              >
                {companyName}
              </a>
              . In addition to that, I&apos;ve always kept an open eye on
              freelancing positions and have taken on a few projects. I also
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
              it is one thing to read about someone, another thing to actually
              know someone; so ask around, or let&apos;s hope we&apos;ll meet
              someday.
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

export default AllInOne;
