import './Registration.css'

function RegistrationSection() {
    return (
      <section className="registration-section">
        <div className="registration-container">
          {/* LEFT COLUMN: HEADER & DESCRIPTION */}
          <div className="registration-content">
            <h2>Register for the Event</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              accumsan, sapien sit amet imperdiet faucibus, lacus nisi gravida dui,
              et gravida eros orci eu urna. Duis feugiat, libero in posuere cursus,
              erat lorem dictum magna, nec elementum nunc odio ut lorem.
            </p>
          </div>
  
          {/* DIVIDER */}
          <div className="registration-divider"></div>
  
          {/* RIGHT COLUMN: RSVP BUTTON */}
          <div className="registration-button">
            <a href="#" className="btn-rsvp">RSVP Now</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default RegistrationSection;
  
  