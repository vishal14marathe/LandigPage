import React from 'react'
import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '📍',
      title: 'Real-Time Tracking',
      description: 'Monitor your vehicles in real-time with GPS tracking, route optimization, and geofencing capabilities.'
    },
    {
      icon: '📊',
      title: 'ELD Compliance',
      description: 'Stay compliant with FMCSA regulations with our certified Electronic Logging Devices and automated reporting.'
    },
    {
      icon: '⛽',
      title: 'Fuel Management',
      description: 'Reduce fuel costs with monitoring, idling alerts, and route optimization to maximize efficiency.'
    },
    {
      icon: '🔧',
      title: 'Maintenance Alerts',
      description: 'Prevent breakdowns with proactive maintenance scheduling based on vehicle diagnostics and usage.'
    },
    {
      icon: '📋',
      title: 'Automated Reporting',
      description: 'Generate compliance reports, performance analytics, and operational insights with automated tools.'
    },
    {
      icon: '🚨',
      title: 'Safety & Security',
      description: 'Enhance driver safety with behavior monitoring, collision detection, and real-time alerts.'
    }
  ]

  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Features</span>
          <h2 className="section-title">Everything You Need to Manage Your Fleet</h2>
          <p className="section-description">
            Comprehensive tools to track, manage, and optimize your fleet operations from a single platform.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features