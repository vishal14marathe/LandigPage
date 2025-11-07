import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>TTM</h3>
            <p>Total Transport Management - Advanced fleet management solutions for modern businesses.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Twitter">t</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Solutions</h3>
            <div className="footer-links">
              <a href="#">Fleet Management</a>
              <a href="#">ELD Compliance</a>
              <a href="#">Vehicle Tracking</a>
              <a href="#">Fuel Management</a>
              <a href="#">Driver Safety</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <div className="footer-links">
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <div className="footer-links">
              <a href="#">Help Center</a>
              <a href="#">Documentation</a>
              <a href="#">API Reference</a>
              <a href="#">System Status</a>
              <a href="#">Contact Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 TTM - Total Transport Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer