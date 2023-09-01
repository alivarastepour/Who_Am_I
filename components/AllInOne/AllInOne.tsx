import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/allInOne.module.scss";
// exprirence , skills(soft, tech), hobbies
import { Montserrat as Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "800"],
});
const AllInOne = () => {
  const AllInOneWrapperID = "all-in-one-wrapper";
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
        <div id={"all-in-one-title"} className={styles["all-in-one-title"]}>
          explore different sections for more
        </div>
        <div
          id="feature-container-1"
          className={`${styles["feature-container"]} ${styles["feature-container-1"]}`}
        >
          <div className={styles["info-wrapper"]}>
            <div className={`${styles["title"]} title`}>Exprience</div>
            <div className={`${styles["description"]} description`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium placeat ex quia eveniet maiores temporibus
              reprehenderit, perferendis quas minima recusandae impedit dicta
              rerum quis. Ratione aliquam dicta cupiditate excepturi neque
              accusantium iste. Cumque aliquam nesciunt, impedit veniam atque
              pariatur tempora nostrum labore accusamus iste nulla adipisci
              eaque assumenda consequatur? Sint.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium placeat ex quia eveniet maiores temporibus
              reprehenderit, perferendis quas minima recusandae impedit dicta
              rerum quis. Ratione aliquam dicta cupiditate excepturi neque
              accusantium iste. Cumque aliquam nesciunt, impedit veniam atque
              pariatur tempora nostrum labore accusamus iste nulla adipisci
              eaque assumenda consequatur? Sint.
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium placeat ex quia eveniet maiores temporibus
              reprehenderit, perferendis quas minima recusandae impedit dicta
              rerum quis. Ratione aliquam dicta cupiditate excepturi neque
              accusantium iste. Cumque aliquam nesciunt, impedit veniam atque
              pariatur tempora nostrum labore accusamus iste nulla adipisci
              eaque assumenda consequatur? Sint.
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
            <div className={`${styles["title"]} title`}>Hobbies</div>
            <div className={`${styles["description"]} description`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium placeat ex quia eveniet maiores temporibus
              reprehenderit, perferendis quas minima recusandae impedit dicta
              rerum quis. Ratione aliquam dicta cupiditate excepturi neque
              accusantium iste. Cumque aliquam nesciunt, impedit veniam atque
              pariatur tempora nostrum labore accusamus iste nulla adipisci
              eaque assumenda consequatur? Sint.
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
