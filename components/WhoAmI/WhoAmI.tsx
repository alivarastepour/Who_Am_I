import styles from "@/styles/whoAmI.module.scss";
import { Paytone_One } from "next/font/google";

const paytoneOne = Paytone_One({ subsets: ["latin"], weight: ["400"] });

const WhoAmI = () => {
  return (
    <>
      <div className={styles["who-am-i-wrapper"]}>
        <div className={`${styles["header"]} ${paytoneOne.className}`}>
          who am i?
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
