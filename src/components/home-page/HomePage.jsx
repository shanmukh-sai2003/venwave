import Disclamer from "./Disclamer";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import LetsTalk from "./LetsTalk";
import NavBar from "./NavBar";
import OurPurpose from "./OurPurpose";

function HomePage() {
  return (
    <>
        <NavBar />
        <OurPurpose />
        <HowItWorks />
        <Disclamer />
        <LetsTalk />
        <Footer />
    </>
  );
}

export default HomePage;
