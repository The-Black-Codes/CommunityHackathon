import React from "react";
import "./Flyer.css";
import hack from "../../assets/Hackathon.png"; // Ensure to create this CSS file

const FlyerSection = () => {
  return (
    <section id="flyer" className="flyer-section">
      <div className="flyer-container">
        <img
          src={hack} // Replace with actual flyer image URL
          alt="Event Flyer"
          className="flyer-image"
        />
      </div>
    </section>
  );
};

export default FlyerSection;

  