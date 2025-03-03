import img1 from "../../assets/DSC_1739.jpg"; // Adjust path as needed
import './Jumbotron.css'

function HeroSection() {
  // const videoRef = useRef(null);
  // const [isMuted, setIsMuted] = useState(true);

  // const toggleMute = () => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = !videoRef.current.muted;
  //     setIsMuted(videoRef.current.muted);
  //   }
  // };

  return (
    <section id="home" className="heroInner">
            <img src={img1} alt="Hero Image" id="hero-image" />
      {/* <video ref={videoRef} src={videoFile} autoPlay loop muted={isMuted} id="video" />
      <button onClick={toggleMute} className="mute-btn">
        {isMuted ? "🔇 Unmute" : "🔊 Mute"}
      </button> */}
    </section>
  );
}

export default HeroSection;


// "use client"; // for nextjs 13.4 
// import React from "react";
// import videoFile from '../../assets/sjhackathon.mp4'
// import './Jumbotron.css'

// const Header = () => {
//   return (
//     <div>
//         <div className="heroInner">
//             <video src={videoFile} autoPlay loop muted id='video' />
//           <span>
//             <h1>hero section with button</h1>
//             <a href="#" className="btn btn-light">
//               Explore Now
//             </a>
//           </span>
//         </div>
//     </div>
//   );
// };

// export default Header;