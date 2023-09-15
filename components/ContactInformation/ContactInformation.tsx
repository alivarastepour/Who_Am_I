import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/contactInformation.module.scss";
import { Montserrat } from "next/font/google";
const monrserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});
const ContactInformation = () => {
  useIntersection({
    observables: [
      { className: styles["lamp-effect"], id: "contact-information-header" },
    ],
    parentId: "contact-information-header",
  });
  return (
    <>
      <div className={styles["contact-information-wrapper"]}>
        <div
          id="contact-information-header"
          className={`${monrserrat.className} ${styles["contact-information-header"]}`}
        >
          <div className={styles["header-first"]}>
            {["c", "o", "n", "t", "a", "c", "t"].map((letter, index) => {
              const indicator = `${letter}-${index}`;
              return (
                <span
                  key={indicator}
                  className={`${styles[indicator]} ${letter}`}
                >
                  {letter}
                </span>
              );
            })}
          </div>

          <div className={styles["header-second"]}>
            {["i", "n", "f", "o", "r", "m", "a", "t", "i", "o", "n"].map(
              (letter, index) => {
                const indicator = `${letter}-${index}`;
                return (
                  <span
                    key={indicator}
                    className={`${styles[indicator]} ${letter}`}
                  >
                    {letter}
                  </span>
                );
              }
            )}
          </div>
        </div>
        <div className={styles["contact-information-content"]}>
            
        </div>
      </div>
    </>
  );
};
export default ContactInformation;