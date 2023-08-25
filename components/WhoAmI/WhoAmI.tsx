import styles from "@/styles/whoAmI.module.scss";
import { Paytone_One } from "next/font/google";
import { useEffect } from "react";
import { handleHeaderInViewport } from "./util";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const WhoAmI = () => {
  const whoAmIWrapperID: string = "who-am-i-wrapper";
  useEffect(() => {
    const observer = handleHeaderInViewport(whoAmIWrapperID);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);
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
          <div className={styles["body"]}>
            HE was born on a cold winter day in Isfahan in 1380. At the
            beginning of his life, like all other children, HE tried to learn to
            walk and talk from his parents. Then HE went to school; Learned
            addition and multiplication, HE fell down, got up. Lost hope, found
            it. Then HE lost himself, with more delay this time, HE found it
            too. HE looked for his interests, went to various classes and after
            12 years left school and entered the university environment. These
            days, HE is busy reading books (HE is very interested in classic
            novels), watching series, improving social relations and most
            importantly, programming. and HE hopes to gain work experience in a
            real project by showing his skills any time soon.
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
