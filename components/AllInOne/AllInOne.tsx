import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/allInOne.module.scss";
// exprirence , skills(soft, tech), hobbies

const AllInOne = () => {
  const AllInOneWrapperID = "all-in-one-wrapper";
  useIntersection({
    parentId: AllInOneWrapperID,
    observables: [
      { className: "all-in-one-sliding-feature-1", id: "feature-container-1" },
      { className: "all-in-one-sliding-feature-2", id: "feature-container-2" },
      { className: "all-in-one-sliding-feature-3", id: "feature-container-3" },
      { className: "all-in-one-sliding-feature-4", id: "feature-container-4" },
      { className: "all-in-one-sliding-title", id: "all-in-one-title" },
      {
        className: "all-in-one-fade-in-background",
        id: "all-in-one-background-wrapper",
      },
    ],
  });
  return (
    <>
      <div id={"all-in-one-wrapper"} className={styles["all-in-one-wrapper"]}>
        <div
          id={"all-in-one-background-wrapper"}
          className={styles["all-in-one-background-wrapper"]}
        ></div>
        <div id={"all-in-one-title"} className={styles["all-in-one-title"]}>
          explore different sections for more
        </div>
        <div
          id="feature-container-1"
          className={`${styles["feature-container"]} ${styles["feature-container-1"]}`}
        ></div>
        <div
          id="feature-container-2"
          className={`${styles["feature-container"]} ${styles["feature-container-2"]}`}
        ></div>
        <div
          id="feature-container-3"
          className={`${styles["feature-container"]} ${styles["feature-container-3"]}`}
        ></div>
        <div
          id="feature-container-4"
          className={`${styles["feature-container"]} ${styles["feature-container-4"]}`}
        ></div>
      </div>
    </>
  );
};

export default AllInOne;
