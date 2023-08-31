import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import { Inter } from "next/font/google";
import WhoAmI from "../WhoAmI/WhoAmI";
import AllInOne from "../AllInOne/AllInOne";
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
      </div>
    </>
  );
};

export default HomePageWrapper;
