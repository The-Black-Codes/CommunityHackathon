import './Sponsorship.css'

function SponsorshipSection() {
    return (
      <section className="sponsorship-section">
        <div className="sponsorship-container">
          <h2>Our Sponsors</h2>
          <p>We are proud to be supported by these amazing partners.</p>
  
          {/* Sponsors Grid */}
          <div className="sponsors-grid">
            <div className="sponsor">
              <img src="https://via.placeholder.com/150" alt="Sponsor 1" />
              <p>Sponsor One</p>
            </div>
            <div className="sponsor">
              <img src="https://via.placeholder.com/150" alt="Sponsor 2" />
              <p>Sponsor Two</p>
            </div>
            <div className="sponsor">
              <img src="https://via.placeholder.com/150" alt="Sponsor 3" />
              <p>Sponsor Three</p>
            </div>
            <div className="sponsor">
              <img src="https://via.placeholder.com/150" alt="Sponsor 4" />
              <p>Sponsor Four</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default SponsorshipSection;
  