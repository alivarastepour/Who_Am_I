import styles from "@/styles/whoAmI.module.scss";
import { Paytone_One, Bricolage_Grotesque } from "next/font/google";
import { useEffect } from "react";
import { handleHeaderInViewport } from "./util";
import { useIntersection } from "@/hooks/useIntersection";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });
const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const WhoAmI = () => {
  const whoAmIWrapperID: string = "who-am-i-wrapper";
  useIntersection({
    observables: [
      { className: "sliding-header", id: "who-am-i-title" },
      { className: "sliding-body", id: "who-am-i-body" },
    ],
    parentId: whoAmIWrapperID,
  });
  // useEffect(() => {
  //   const observer = handleHeaderInViewport(whoAmIWrapperID);

  //   return () => {
  //     if (observer) observer.disconnect();
  //   };
  // }, []);
  return (
    <>
      <div className={styles["who-am-i-grid-wrapper"]}>
        <div className={styles["who-am-i-wrapper"]} id={whoAmIWrapperID}>
          <div
            className={`${styles["header"]} ${paytoneOne.className}`}
            id={"who-am-i-title"}
          >
            who am i?
          </div>
          <div
            id={"who-am-i-body"}
            className={`${styles["body"]}  ${bricolage_Grotesque.className}`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil
            eum nulla eligendi nesciunt maiores quam nam numquam adipisci
            nostrum. Architecto quae fugiat necessitatibus qui inventore.
            Voluptatum quod dolorum ex debitis? Temporibus aliquid facere, eos
            dignissimos consequuntur vitae explicabo deleniti, commodi deserunt
            eius accusantium odio facilis aperiam magnam debitis! Esse
            consectetur doloremque itaque perspiciatis voluptate atque excepturi
            aliquam quod numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate sed fugit qui aperiam sapiente, voluptas
            ex, enim veritatis autem, facilis rerum delectus? Minus aspernatur
            rerum temporibus in vel, explicabo, eveniet corrupti blanditiis ab
            autem molestias nihil, ea qui distinctio exercitationem!
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
