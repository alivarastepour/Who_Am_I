import styles from "@/styles/header.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import Logo from "@/public/logo.png";
const inter = Inter({
  subsets: ["latin"],
});

const Header = () => {
  return (
    <>
      <div className={`${styles["header-wrapper"]} ${inter.className}`}>
        <div className={styles["logo-wrapper"]}>
          <div className={styles["logo-image-wrapper"]}>
            <div className={styles["logo-image"]}>
              <Image
                alt="site logo; contains ali varaste pour's initials tied to each other"
                src={Logo}
                width={60}
                height={40}
              />
            </div>
          </div>
          <div className={styles["logo-text-wrapper"]}>
            <div className={styles["logo-text"]}>
              <div>Ali</div>
              <div>Varaste</div>
              <div>Pour</div>
            </div>
          </div>
        </div>
        <div className={styles["language-toggle-wrapper"]}>
          <div className={styles["language-toggle"]}>EN</div>
        </div>
      </div>
    </>
  );
};
export default Header;
