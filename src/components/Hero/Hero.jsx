import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">Fleet Management Platform</span>
            <h1 className="hero-title">
              Drive Your Fleet <span>Forward</span> with TTM
            </h1>
            <p className="hero-description">
              Complete fleet management solution with real-time tracking, ELD
              compliance, and data-driven insights to optimize your operations.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="#features" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Customer Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15%</span>
                <span className="stat-label">Fuel Savings</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="dashboard-placeholder">
                TTM Fleet Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
