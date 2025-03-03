import React, { useRef } from "react";
import AboutUs from './components/aboutus/about';
import Footer from './components/footer/Footer';
import HeroSection from './components/jumbotron/Jumbotron';
import Navbar from './components/navbar/Navbar';
import RegistrationSection from './components/registration/Registration';
import FlyerSection from './components/flyer/Flyer';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const flyerRef = useRef(null);
  const registrationRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = {
    hero: heroRef,
    about: aboutRef,
    flyer: flyerRef,
    registration: registrationRef,
    footer: footerRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <div ref={flyerRef}>
        <FlyerSection />
      </div>
      {/* <div ref={registrationRef}>
        <RegistrationSection />
      </div> */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
