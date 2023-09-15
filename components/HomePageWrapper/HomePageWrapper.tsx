import Header from "../Header/Header";
import Quote from "../Quote/Quote";
import AllInOne from "../AllInOne/AllInOne";
import WhoAmI from "../WhoAmI/WhoAmI";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import ContactInformation from "../ContactInformation/ContactInformation";

const HomePageWrapper = () => {
  return (
    <>
      <div>
        <Header />
        <Quote />
        <WhoAmI />
        <AllInOne />
        <Experience />
        <Skills />
        <ContactInformation />
      </div>
    </>
  );
};

export default HomePageWrapper;
