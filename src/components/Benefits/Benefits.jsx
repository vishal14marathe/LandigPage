import React from 'react'
import './Benefits.css'

const Benefits = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Reduce Operational Costs',
      description: 'Optimize routes, reduce fuel consumption, and minimize vehicle downtime with predictive maintenance.'
    },
    {
      icon: '⏱️',
      title: 'Increase Productivity',
      description: 'Automate administrative tasks, streamline workflows, and provide drivers with tools to work more efficiently.'
    },
    {
      icon: '🛡️',
      title: 'Enhance Safety & Compliance',
      description: 'Ensure regulatory compliance and improve safety with real-time monitoring and driver behavior analysis.'
    },
    {
      icon: '📈',
      title: 'Data-Driven Decisions',
      description: 'Access comprehensive analytics and reporting to make informed decisions that drive business growth.'
    }
  ]

  return (
    <section className="section benefits" id="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-visual">
            <div className="benefits-placeholder">
              TTM Benefits Visualization
            </div>
          </div>
          <div className="benefits-text">
            <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
              <span className="section-subtitle">Why Choose TTM</span>
              <h2 className="section-title">Transform Your Fleet Operations</h2>
            </div>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <span>{benefit.icon}</span>
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits