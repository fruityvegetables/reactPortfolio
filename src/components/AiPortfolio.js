import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/aiPortfolio.css";

import plantstack from "./Project/plantstack.gif"
import SuperheroBnB from "./Project/SuperheroBnB.gif"
import CareerResourcesWiki from "./Project/CareerResourcesWiki.gif"
import noteTaker from "./Project/noteTaker.gif"

import gpt_biotech from "./Project/gpt_biotech.png"
import eth_comic from "./Project/eth_comic.jpg"
import crypto_network from "./Project/crypto_network.jpg"
import eth_pool from "./Project/eth_pool.jpg"
import web3_graffiti from "./Project/web3_graffiti.jpg"
import eth_brain from "./Project/eth_brain.jpg"
import cloud_head from "./Project/cloud_head.png"

import cloud_vid from "./midjourney_u1823883242_An_image_of_a_person_seeing_a_storm.mp4"


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
        <a className="navbar-brand" href="#home">Garrett Troyer's <span>Portfolio</span></a>
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
          <h1 className="fw-bold display-4">Web 3.0 & <span className="highlight">Machine Learning</span></h1>
          <p className="lead my-4">Welcome to Garrett's portfolio! I like to keep it simple. All images are AI generated, of course.</p>
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
          <h2 className="section-title" data-aos="fade-up">About Me</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <div className="about-image">
            <img src={gpt_biotech} alt="AI" className="img-fluid rounded-3 shadow" />
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <div className="about-content">
            <h3>Passionate About Artificial Intelligence, and how it can better our health.</h3>
            <p>My end goal is to work with AI to better the human body. Along the way, I've decided to pick up some Web 3 skills.</p>
            <p>Learning Web 3 to better understand modern finance and security.</p>
            <p>Learning AI to make everyone healthier with cybernetics.</p>
            <div className="stats-container mt-4">
              <div className="row">
                {[{ label: "Years", value: "5+" }, { label: "A.A.S. Computer Programming", value: "1" }, { label: "Coding Bootcamps", value: "2" }].map((s) => (
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
          <h2 className="section-title" data-aos="fade-up">Featured Web 3 Projects</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row">
        <ProjectCard img={eth_comic} title="Crazy Token CRZT" description="God-Mode activated cryptocurrency." tech={["Solidity", "OpenZeppelin"]} />
        <ProjectCard img={crypto_network} title="Escrow Contract" description="A deployable smart contract that acts as an escrow." tech={["Solidity", "OpenZeppelin", "Hardhat"]} />
        <ProjectCard img={eth_pool} title="Rewards Pool" description="Securely turns Ether donations into reward tokens" tech={["Solidity", "OpenZeppelin"]} />
        <ProjectCard img={web3_graffiti} title="Vesting vault, NFT, and Loot Crate shop" description="3 mini projects with OpenZeppelin's token standards." tech={[]} />
        <ProjectCard img={eth_brain} title="Frontend integration for web3" description="React and Tailwind based frontend for the projects. Connectivity with dApps like Metamask & WalletConnect." tech={[]} />
        <ProjectCard img={cloud_head} title="Plus many more to come..." description="" tech={[]} />
        <video
        width="280"
        height="720"
        controls
        autoPlay
        loop
        muted
        className="rounded-xl shadow-lg"
      >
        <source src={cloud_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">Classic Web 2 Projects</h2>
          <div className="section-divider"></div>
        </div>
      </div>
      <div className="row">
        <ProjectCard img={plantstack} title="PlantStack" description="A storefront for users to sell plants" tech={["React", "Node.js", "MySQL"]} />
        <ProjectCard img={SuperheroBnB} title="Superhero Background & Backgrounds" description="This project utilizes two 3rd party APIs to conjure statistics about a Superhero the user searches for, and backgrounds that can be used for a wallpaper." tech={["Bootstrap", "jQuery", "Axios"]} />
        <ProjectCard img={CareerResourcesWiki} title="Career Resource Wiki" description="Full-stack system for users to login and create resources in tech roles. Created to ensure that we as students could all share links to relevant learning materials." tech={["Node.js", "Express.js", "MySQL"]} />
        <ProjectCard img={noteTaker} title="Express Note Taker" description="This is a web application for taking notes. It uses Express.js and an API to create, read, update, and delete notes." tech={["jQuery", "Node.js", "Express.js"]} />
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
            <h3>Web3</h3>
            <p>Expertise across Solidity & hardhat for solving real-world business problems.</p>
            <div className="skill-category mt-4">
              <h5>Solidity</h5>
              <div className="skill-tags">
                <span className="skill-tag">Low-Level programming</span>
                <span className="skill-tag">Hardhat test suite</span>
                <span className="skill-tag">Security on the blockchain</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <div className="skills-content">
            <h3>Programming & Tools</h3>
            <div className="skill-tags">
              {["Python", "JavaScript", "React", "Node.js", "TensorFlow", "PyTorch", "Docker", "AWS", "Solidity"].map((s) => <span className="skill-tag" key={s}>{s}</span>)}
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
      const scriptURL = "https://script.google.com/macros/s/AKfycbyJAyn9wor6HTF4WbnTXqzSDEgYHcG4hsmW3zsDHEP9x1cJ5ScfpHmlru3gtVXgREY5/exec";

      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setAlert({ type: "success", message: "Your message has been sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" });
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
            <div className="contact-info"><div className="contact-icon"><FaEnvelope /></div><h4>Email</h4><p>gg.troyer@gmail.com</p></div>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-info"><div className="contact-icon"><FaPhone /></div><h4>Phone</h4><p>+1 (512) 660-7979</p></div>
          </div>
          <div className="col-md-4 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="contact-info"><div className="contact-icon"><FaMapMarkerAlt /></div><h4>Location</h4><p>South Texas</p></div>
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
          <span className="copyright">Predominantly made with ChatGPT, Cline, and my own skills. Images/video generated with stable diffusion, midjourney, canva, and dall-e. Feel free to use anything!</span>
        </div>
        <div className="col-md-4 text-center">
          <a className="footer-brand" href="#home">Garrett's <span>Portfolio</span></a>
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
