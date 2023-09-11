import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import { Inter } from "next/font/google";
import AllInOne from "../AllInOne/AllInOne";
import WhoAmI from "../WhoAmI/WhoAmI";
import Experience from "../Experience/Experience";
const inter = Inter({
  subsets: ["latin"],
});
const HomePageWrapper = () => {
  return (
    <>
      <div className={inter.className}>
        <Header />
        <Quote />
        <WhoAmI />
        <AllInOne />
        <Experience />
      </div>
    </>
  );
};

export default HomePageWrapper;
