import React from 'react'
import './CTA.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta-title">Ready to Optimize Your Fleet?</h2>
        <p className="cta-description">
          Join thousands of companies that trust TTM to manage their fleets efficiently and cost-effectively.
        </p>
        <a href="#contact" className="btn cta-btn">Request a Demo</a>
      </div>
    </section>
  )
}

export default CTA