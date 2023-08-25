import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
const HomePageWrapper = () => {
  return (
    <>
      <div className={inter.className}>
        {/* <header> */}
        <Header />
        {/* </header> */}
        <Quote />
      </div>
    </>
  );
};

export default HomePageWrapper;
