import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/DSC_1680.jpg";
import img2 from "../../assets/DSC_1706.jpg";
import img3 from "../../assets/DSC_1716.jpg";
import img4 from "../../assets/DSC_1721.jpg";
import img5 from "../../assets/DSC_1723.jpg";
import img6 from "../../assets/DSC_1739.jpg"
import img7 from "../../assets/DSC_1909.jpg";
import img8 from "../../assets/DSC_1918.jpg";
import './about.css'

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

function AboutSection() {
  return (
    <>
      {/* ABOUT SECTION */}
    <section id="about" className="about-section">
      <div className="container">
        <h2>About the Event</h2>
        <p>
          Join us for an <strong>innovative two-day event</strong> designed to
          harness the power of data and technology to address
          <strong> social justice issues in transportation</strong>. This{" "}
          <strong>hybrid experience</strong> consists of a{" "}
          <strong>Virtual Workshop</strong> (March 20, 2025) and an{" "}
          <strong>In-Person Hackathon & Pitch Competition</strong> (March 21,
          2025) at <strong>Belmont University and Fisk University</strong>.
        </p>

        {/* Two-Column Layout */}
        <div className="expectations">
          <h3>What to Expect</h3>
          <div className="expectation-columns">
            <div className="expectation-box">
              <h4>Virtual Workshop | March 20, 2025</h4>
              <ul>
                <li>Led by industry experts and tech leaders</li>
                <li>Step-by-step guidance on app development</li>
                <li>Discussions on transportation data & social justice</li>
                <li>Featured speakers from MongoDB, Black Wealth Data & more</li>
              </ul>
            </div>
            <div className="expectation-box">
              <h4>Hackathon & Pitch Competition | March 21, 2025</h4>
              <ul>
                <li>Morning kickoff with breakfast & opening remarks</li>
                <li>Hands-on problem-solving using real-world parking data</li>
                <li>Live pitch competition with expert judges</li>
                <li>Networking with tech leaders & policymakers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* FULL-WIDTH SLIDESHOW BELOW */}
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default AboutSection

