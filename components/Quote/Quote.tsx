import { Inter } from "next/font/google";

import styles from "@/styles/quote.module.scss";

const inter = Inter({
  subsets: ["latin"],
});

const Quote = () => {
  return (
    <>
      <div
        className={`${inter.className} ${styles["quote-background-wrapper"]}`}
      >
        <div className={styles["quote-background"]}></div>
        <div className={styles["quote-wrapper"]}>
          <div className={styles["quote"]}>
            <span className={styles["qoutation-mark"]}>“</span>
            <span>
              Well, this is the reason. We bow to the inevitable. We&apos;re not
              wheat, we&apos;re buckwheat! When a storm comes along it flattens
              ripe wheat because it&apos;s dry and can&apos;t bend with the
              wind. But ripe buckwheat&apos;s got sap in it and it bends. And
              when the wind has passed, it springs up almost as straight and
              strong as before. We aren&apos;t a stiff-necked tribe. We&apos;re
              mighty limber when a hard wind&apos;s blowing, because we know it
              pays to be limber. When trouble comes we bow to the inevitable
              without any mouthing, and we work and we smile and we bide our
              time... That, my child, is the secret of the survival.
            </span>
            <span className={styles["qoutation-mark"]}>”</span>
          </div>
          <div className={styles["author"]}>
            -gone with the wind, Margaret Mitchell
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
