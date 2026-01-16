
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const projects = [
    {
      title: "VBC by EC",
      description: "Android native mobile app like Udemy for online education platform",
      tech: "Android Native",
      type: "Mobile App"
    },
    {
      title: "Music Streaming Platform",
      description: "Streaming platform for music artists with user management and content delivery",
      tech: "React.js, Next.js",
      type: "Web Platform"
    },
    {
      title: "Journaly",
      description: "AI-powered journaling and mood-tracking app",
      tech: "React Native, OpenAI",
      type: "Mobile App"
    },
    {
      title: "Courtena",
      description: "Online padel venue booking system with mobile app for customers and web portal for venue owners",
      tech: "React.js, React Native",
      type: "Booking System"
    },
    {
      title: "Soclean",
      description: "Cloud laundry service platform for online laundry pickup and delivery booking",
      tech: "Next.js, Node.js",
      type: "Service Platform"
    },
    {
      title: "URU Mobile App",
      description: "Retail store inventory management app with analytics and EPOS system for product sales",
      tech: "React Native",
      type: "Business App"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/923376101223', '_blank');
  };

  return (
    <Layout>
      <Head>
        <title>Muiez Arif - Freelance Software Engineer</title>
        <meta name="description" content="Muiez Arif - Freelance Software Engineer with 7+ years experience in Node.js, React.js, Next.js, React Native" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="container">

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, {"I'm"} <span className={styles.accent}>Muiez Arif</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Freelance Software Engineer</h2>
          <p className={styles.heroDescription}>
            With 7+ years of experience building modern web and mobile applications 
            using Node.js, React.js, Next.js, and React Native, Laravel, Django, Python
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <button onClick={openWhatsApp} className={styles.whatsappBtn}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                {"I'm"} a passionate freelance software engineer with over 7 years of experience 
                in developing scalable web and mobile applications. I specialize in modern 
                JavaScript technologies and have helped numerous clients bring their ideas to life.
              </p>
              <p>
                My expertise spans across full-stack development, from creating responsive 
                web applications to building cross-platform mobile apps that deliver 
                exceptional user experiences.
              </p>
            </div>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <div className={styles.techGrid}>
                <div className={styles.techItem}>Node.js</div>
                <div className={styles.techItem}>React.js</div>
                <div className={styles.techItem}>Next.js</div>
                <div className={styles.techItem}>React Native</div>
                <div className={styles.techItem}>JavaScript</div>
                <div className={styles.techItem}>TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectType}>{project.type}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>{project.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>{"Let's"} Work Together</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Get In Touch</h3>
              <p>
                Ready to start your next project? {"I'd"} love to hear about your ideas 
                and help bring them to life.
              </p>
              <div className={styles.contactMethods}>
                <div className={styles.contactMethod}>
                  <i className="fas fa-envelope"></i>
                  <span>muiezarifwork1@gmail.com</span>
                </div>
                <div className={styles.contactMethod}>
                  <i className="fab fa-whatsapp"></i>
                  <span>+92 337 6101223</span>
                </div>
                <div className={styles.contactMethod}>
                  <i className="fas fa-globe"></i>
                  <span>www.muiezarif.com</span>
                </div>
              </div>
            </div>
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className={styles.successMessage}>Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Muiez Arif. All rights reserved.</p>
          <div className={styles.socialLinks}>
            <button onClick={openWhatsApp} className={styles.socialLink}>
              <i className="fab fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </footer>
          </div>

    </Layout>
  );
};

export default Home;
