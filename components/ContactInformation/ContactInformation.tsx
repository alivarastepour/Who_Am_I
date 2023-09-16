import { useIntersection } from "@/hooks/useIntersection";
import styles from "@/styles/contactInformation.module.scss";
import { Montserrat, Raleway } from "next/font/google";
import { CONTACT_INFORMATION } from "./data";
import ContactInformationCard from "./ContactInformationCard";

const monrserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100"],
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
          {CONTACT_INFORMATION.map((item, index) => {
            return <ContactInformationCard info={item} key={index} />;
          })}

          <div
            className={`${raleway.className} ${styles["contact-information-text"]}`}
          >
            Give me a star, like a post or let&apos;s talk about your project;
            Each is fine.
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactInformation;
