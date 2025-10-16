
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { theme } = useTheme();

  return (
    <div className="container-fluid p-0" style={{ fontSize: theme.fontSize }}>
      {/* Hero Section */}
      <section className="hero-section text-center" id="home">
        <div className="container">
          <h1>Care that fits your life.</h1>
          <p className="mt-3 mb-4">
            24/7 Excellence in patient care & medical services
            <br /> Book an appointment in minutes.
          </p>

          <Link
            to="/patients"
            className="btn btn-light btn-lg fw-bold shadow-sm bookAppointment"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-5"
        style={{ backgroundColor: theme.mode === 'dark' ? '#212529' : '#ffffff' }}
      >
        <div className="container">
          <section id="services" className="py-5">
            <div className="container">
              <h2 className="mb-4 text-center fw-bold">Our Medical Services</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 text-center p-3 shadow border-0">
                    <div className="services-icon mb-3"><i className="bi bi-heart-pulse"></i></div>
                    <h5>Cardiology</h5>
                    <p>Expert heart care from highly trained cardiologists.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 text-center p-3 shadow border-0">
                    <div className="services-icon mb-3"><i className="bi bi-hospital"></i></div>
                    <h5>Emergency</h5>
                    <p>World-class emergency department, always here for you.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 text-center p-3 shadow border-0">
                    <div className="services-icon mb-3"><i className="bi bi-lungs"></i></div>
                    <h5>Pulmonology</h5>
                    <p>Respiratory care for all ages and critical needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-4"
        style={{
          backgroundColor: theme.mode === 'dark' ? '#1c2526' : '#f1f3f5',
          color: theme.mode === 'dark' ? '#d1d3d5' : '#6c757d',
        }}
      >
        <div className="container">
          <p className="mb-0">&copy; 2025 Jarurat Care. All rights reserved.</p>
          <p className="mb-0">
            Contact us: <a href="mailto:support@jaruratcare.com" style={{ color: theme.primaryColor }}>support@jaruratcare.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
