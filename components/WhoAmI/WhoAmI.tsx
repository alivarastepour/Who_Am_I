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
          The very first time I found something amusing and enjoyable to work
          with was when I was 7 or 8 years old. My dad bought a computer,
          nothing fancy, just good old Windows XP. Although it has been a long
          time since then, and I don't use my PC to draw 2D pictures of farms
          anymore (or do I?), my inner child is still fascinated when it hears a
          motherboard's beep. Let's not forget that sometime soon, kids are
          going to need new shoes (a.k.a the inner child). That's when I figured
          being interested in an ever-cutting-edge topic with endless paths to
          wander should be a gift from THEM. Still though, I think CS is not
          just a way to spend your free time or make some money, it is literally
          a way of living. Take an ML model for instance; it starts with minimum
          information and a lot of errors. Then it corrects itself in a way that
          it thinks is more accurate. This procedure goes on until the accuracy
          is acceptable or a maximum iteration is exceeded. The same goes for
          real life. We come to crossroads, we make decisions, we fail or get
          hurt, but the next time, we use the experience we have to make better
          decisions. this also goes on as long as we don't exceed our time on
          earth.
        </div>
      </div>
    </>
  );
};

export default WhoAmI;
