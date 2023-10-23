import "./Footer.css";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";
import { 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoMailOpenOutline, 
  IoCallOutline
} from "react-icons/io5";



const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h4>World of Wonders <br/> Travel & Tours</h4>
          <p>Plan and book your next adventure with ease on our all-in-one travel website.</p>
          <hr/>
          <div className="footer-links">
            <Link to="https://www.facebook.com/worldofwonderstravel">
              <IoLogoFacebook/>
            </Link>
            <Link to="https://www.instagram.com/worldofwonderstour/">
              <IoLogoInstagram />
            </Link>
            <Link to="mailto:worldofwonderstour@gmail.com">
              <IoMailOpenOutline />
            </Link>
            |
            <div className="phone-link">
              <IoCallOutline />
              <span className="number">09173251199</span>
            </div>
          </div>
        </div>
        <div className="footer-services">
          <h4>Top Destinations</h4>
          <main>
            <ul>
              <li>Bolinao</li>
              <li>Alaminos</li>
              <li>Lingayen</li>
              <li>Mangaterem</li>
              <li>Manaoag</li>
            </ul>
          </main>
        </div>
      </div>
      <div className="footer-contact">
        <h4>Contact us</h4>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;