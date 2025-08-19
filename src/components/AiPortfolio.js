import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/aiPortfolio.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

const useSmoothScroll = () => {
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">AI<span>Portfolio</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["home", "about", "projects", "skills", "contact"].map((id) => (
              <li className="nav-item" key={id}>
                <a className="nav-link" href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <h1 className="fw-bold display-4">Innovative <span className="highlight">AI Solutions</span></h1>
          <p className="lead my-4">Showcasing cutting-edge artificial intelligence projects and applications.</p>
          <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
        </div>
        <div className="col-md-6 d-flex justify-content-center" data-aos="fade-left">
          <div className="hero-image">
            <div className="cube">
              <div className="face front"></div>
              <div className="face back"></div>
              <div className="face right"></div>
              <div className="face left"></div>
              <div className="face top"></div>
              <div className="face bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-waves">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H0Z"></path></svg>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about-section py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">About My AI Journey</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c" alt="AI" className="img-fluid rounded-3 shadow" />
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="about-content">
            <h3>Passionate About Artificial Intelligence</h3>
            <p>Exploring the vast potential of artificial intelligence to solve real-world problems with machine learning, NLP, and computer vision.</p>
            <div className="stats-container mt-4">
              <div className="row">
                {[{ label: "Projects", value: "15+" }, { label: "Years", value: "5+" }, { label: "Clients", value: "10+" }].map((s) => (
                  <div className="col-4" key={s.label}>
                    <div className="stat-item">
                      <h4>{s.value}</h4>
                      <p>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard = ({ img, title, description, tech }) => (
  <div className="col-lg-4 col-md-6 mb-4" data-aos="zoom-in">
    <div className="project-card">
      <div className="project-image">
        {img && <img src={img} alt={title} className="img-fluid" />}
        <div className="overlay">
          <button type="button" className="btn btn-outline-light">View Details</button>
        </div>
      </div>
      <div className="project-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tech-stack">
          {tech.map((t) => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="projects-section py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">Featured AI Projects</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row">
        <ProjectCard img="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" title="Natural Language Processing" description="Sentiment analysis with 95% accuracy." tech={["Python", "BERT", "TensorFlow"]} />
        <ProjectCard img="https://images.unsplash.com/photo-1531746790731-6c087fecd65a" title="Computer Vision" description="Real-time object detection app." tech={["PyTorch", "OpenCV", "YOLO"]} />
        <ProjectCard img="https://images.unsplash.com/photo-1551288049-bebda4e38f71" title="Predictive Analytics" description="Forecasting market trends with ML." tech={["Scikit-learn", "Pandas", "XGBoost"]} />
        <ProjectCard img="" title="New Project" description="Add description here." tech={[]} />
        <ProjectCard img="" title="New Project" description="Add description here." tech={[]} />
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="skills-section py-5">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" data-aos="fade-right">
          <div className="skills-content">
            <h3>AI & Machine Learning</h3>
            <p>Expertise across ML, NLP, and CV for solving real-world problems.</p>
            <div className="skill-category mt-4">
              <h5>Machine Learning</h5>
              <div className="skill-tags">
                <span className="skill-tag">Supervised Learning</span>
                <span className="skill-tag">Unsupervised Learning</span>
                <span className="skill-tag">Reinforcement Learning</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <div className="skills-content">
            <h3>Programming & Tools</h3>
            <div className="skill-tags">
              {["Python", "JavaScript", "React", "Node.js", "TensorFlow", "PyTorch", "Docker", "AWS"].map((s) => <span className="skill-tag" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [alert, setAlert] = useState(null);
  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (!name || !email || !subject || !message) {
      setAlert({ type: "danger", message: "Please fill in all fields." });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setAlert({ type: "danger", message: "Please enter a valid email address." });
      return;
    }
    try {
      const scriptURL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("subject", subject);
      fd.append("message", message);
      const response = await fetch(scriptURL, { method: "POST", body: fd });
      if (response.ok) {
        setAlert({ type: "success", message: "Your message has been sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setAlert({ type: "danger", message: "Failed to send message. Please try again later." });
      }
    } catch {
      setAlert({ type: "danger", message: "An error occurred. Please try again later." });
    }
    setTimeout(() => setAlert(null), 5000);
  };
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
            <div className="section-divider"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form-container" data-aos="zoom-in">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="form-floating">
                    <textarea className="form-control" id="message" placeholder="Your Message" style={{ height: "150px" }} value={form.message} onChange={handleChange}></textarea>
                    <label htmlFor="message">Your Message</label>
                  </div>
                </div>
                {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-center" data-aos="fade-up">
            <div className="contact-info"><div className="contact-icon"><FaEnvelope /></div><h4>Email</h4><p>contact@aiportfolio.com</p></div>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-info"><div className="contact-icon"><FaPhone /></div><h4>Phone</h4><p>+1 (555) 123-4567</p></div>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="contact-info"><div className="contact-icon"><FaMapMarkerAlt /></div><h4>Location</h4><p>San Francisco, CA</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 text-center text-md-start">
          <span className="copyright">© 2025 AI Portfolio. All Rights Reserved.</span>
        </div>
        <div className="col-md-4 text-center">
          <a className="footer-brand" href="#home">AI<span>Portfolio</span></a>
        </div>
        <div className="col-md-4 text-center text-md-end">
          <ul className="social-icons">
            <li><a href="#"><FaGithub /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const BackToTop = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const toggle = () => setActive(window.scrollY > 300);
    toggle();
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return (
    <a href="#home" className={`back-to-top ${active ? "active" : ""}`} aria-label="Back to top"><FaArrowUp /></a>
  );
};

const AIPortfolio = () => {
  useSmoothScroll();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default AIPortfolio;
