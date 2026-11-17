import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
  const services = [
    ['01', 'Relocation Survey', 'Verification of existing property boundaries.'],
    ['02', 'Subdivision Survey', 'Division of land into smaller parcels.'],
    ['03', 'Topographic Survey', 'Mapping of land features and elevations.'],
    ['04', 'Verification Survey', 'Checking property boundaries and measurements.'],
    ['05', 'As-Built Survey', 'Survey of existing structures and improvements.'],
    ['06', 'Land Titling Assistance', 'Assistance with land survey documentation.']
  ]

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">MY<span>GEO.</span></Link>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to="/apply" className="nav-button">Apply Now</Link>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">GEODETIC ENGINEERING SERVICES</span>
            <h1>Your Land.<br />Our Expertise.<br /><span>Accurate Results.</span></h1>
            <p>
              Professional land surveying services made accessible.
              Submit your survey application online and let us help
              you with your property surveying needs.
            </p>
            <div className="hero-actions">
              <Link to="/apply" className="primary-btn">Apply for Survey ?</Link>
              <a href="#services" className="secondary-btn">Explore Services</a>
            </div>
            <div className="hero-note">Professional • Reliable • Accurate</div>
          </div>
          <div className="hero-visual">
            <div className="survey-card">
              <div className="survey-icon">?</div>
              <span>LAND SURVEYING</span>
              <h3>Precision in Every Measurement.</h3>
              <div className="coordinates">14°36' N &nbsp; 121°00' E</div>
            </div>
            <div className="floating-label">GEODETIC ENGINEERING</div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Our Surveying Services</h2>
            <p>Choose the service that matches your land surveying needs.</p>
          </div>
          <div className="service-grid">
            {services.map(([number, name, description]) => (
              <article className="service-card" key={number}>
                <span className="service-number">{number}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to="/apply">Request service ?</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">ABOUT MY GEO</span>
          <h2>Making land surveying applications easier.</h2>
          <p>
            My Geo provides an online platform where clients can
            submit land surveying requests, upload requirements,
            and monitor the progress of their applications.
          </p>
          <Link to="/apply" className="primary-btn">Start Your Application ?</Link>
        </section>
      </main>

      <footer id="contact">
        <h2>MY<span>GEO.</span></h2>
        <p>Land Surveying Service Application System</p>
        <p>© 2026 My Geo. All rights reserved.</p>
      </footer>
    </>
  )
}

function Apply() {
  return (
    <main className="apply-section">
      <span className="eyebrow">CLIENT APPLICATION</span>
      <h1>Apply for a Land Survey</h1>
      <p>Online survey application will be available here.</p>
      <Link to="/" className="primary-btn">Back to Home</Link>
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  )
}
