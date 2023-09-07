import styles from "@/styles/whoAmI.module.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});
const WhoAmI = () => {
  return (
    <>
      <div className={styles["who-am-i-wrapper"]}>
        <div
          id="who-am-i-background-wrapper"
          className={styles["who-am-i-background-wrapper"]}
        ></div>
        <div className={`${styles["body"]} ${montserrat.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          minima laboriosam harum nemo amet voluptates consequuntur deleniti
          distinctio unde cumque corporis culpa vel, animi qui aut rerum quas
          facere reiciendis doloremque ad, placeat veniam! Perferendis illum
          sunt rerum cupiditate, nihil delectus vero obcaecati, cum corporis rem
          qui quos ipsam ullam vitae a. Quis vitae repudiandae aspernatur.
          Architecto animi explicabo eveniet, voluptate magnam inventore dolorem
          quae, maiores expedita qui quis aliquid voluptas ad ea incidunt
          delectus quidem tempore similique est dignissimos perferendis?
          Possimus molestias excepturi non consequuntur quos voluptas quibusdam
          alias eum inventore obcaecati ipsam, corporis eius dolores, qui
          perferendis impedit?
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
