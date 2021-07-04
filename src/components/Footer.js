import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
function Footer() {

const goBackToTop = () => {
  window.scrollTo(0, 0);
}
  return (  
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          join the Adventure newletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button onClick={goBackToTop}
            buttonStyle='btn--outline' Link_i="/sign-up" >Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2> About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="footer-link-items">
            <h2> Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassador</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              BOUKY <i className="fab fa-typo3" />
            </Link>
        </div>
        <small className="website-rights">Boukymen © 2021</small>
        <div className="social-icons">
        <Link 
          className="social-icon-link facebook"
          to="/" 
          target="_blank" 
          aria-label="Facebook" >
            <i className="fab fa-facebook-f"></i>  
          </Link>
          <Link 
          className="social-icon-link instagram"
          to="/" 
          target="_blank" 
          aria-label="Instagram" >
            <i className="fab fa-instagram"></i>  
          </Link>

          <Link 
          className="social-icon-link youtube"
          to="/" 
          target="_blank" 
          aria-label="Youtube" >
            <i className="fab fa-youtube"></i>  
          </Link>

          <Link 
          className="social-icon-link twitter"
          to="/" 
          target="_blank" 
          aria-label="Twitter" >
            <i className="fab fa-twitter"></i>  
          </Link>

          <Link 
          className="social-icon-link linkedin"
          to="/" 
          target="_blank" 
          aria-label="Linkedin" >
            <i className="fab fa-linkedin"></i>  
          </Link>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
