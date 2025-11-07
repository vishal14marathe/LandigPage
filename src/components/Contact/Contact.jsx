import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    fleetSize: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! Our team will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      company: '',
      fleetSize: '',
      message: ''
    })
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions about our fleet management solutions? Our team is here to help you find the right tools for your business.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Our Location</h3>
                  <p>Oak Hills, CA, USA</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email Address</h3>
                  <p>info@ttm.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-control"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="fleetSize">Fleet Size</label>
                <select
                  id="fleetSize"
                  name="fleetSize"
                  className="form-control"
                  value={formData.fleetSize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select fleet size</option>
                  <option value="1-10">1-10 vehicles</option>
                  <option value="11-25">11-25 vehicles</option>
                  <option value="26-50">26-50 vehicles</option>
                  <option value="51-100">51-100 vehicles</option>
                  <option value="100+">100+ vehicles</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Request Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact