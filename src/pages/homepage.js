import Navbar from "../components/navbar.js"
import DisplaySection from "../components/fp-display-section.js"
import useScrollDetect from "../hooks/useScrollDetect";
import JulebordCTA from "../components/JulebordCTA.js"
import Footer from "../components/footer.js"

const Homepage = () => {
  const hasScrolled = useScrollDetect();

  return (
    <div className="homepage">
      {hasScrolled && <Navbar />}
      <DisplaySection imageUrl={"/images/backgard-med-mennesker.jpeg"} />
      <JulebordCTA />
      <Footer />
    </div>
  );
};

export default Homepage;