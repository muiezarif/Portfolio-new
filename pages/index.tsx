
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('three').then((THREE) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Create floating geometric shapes
        const geometries = [
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.SphereGeometry(0.7, 32, 32),
          new THREE.ConeGeometry(0.7, 1.5, 8),
          new THREE.OctahedronGeometry(0.8),
          new THREE.TetrahedronGeometry(0.9),
          new THREE.TorusGeometry(0.6, 0.2, 8, 16),
          new THREE.DodecahedronGeometry(0.7),
          new THREE.IcosahedronGeometry(0.8)
        ];

        const materials = [
          new THREE.MeshBasicMaterial({ 
            color: 0x3b82f6, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.4 
          }),
          new THREE.MeshBasicMaterial({ 
            color: 0x8b5cf6, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.3 
          }),
          new THREE.MeshBasicMaterial({ 
            color: 0x06b6d4, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.35 
          }),
          new THREE.MeshBasicMaterial({ 
            color: 0x10b981, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.25 
          }),
          new THREE.MeshBasicMaterial({ 
            color: 0xf59e0b, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.3 
          }),
          new THREE.MeshBasicMaterial({ 
            color: 0xef4444, 
            wireframe: true, 
            transparent: true, 
            opacity: 0.2 
          })
        ];

        const meshes: THREE.Mesh[] = [];
        const meshAnimations: { speed: number, direction: THREE.Vector3, rotationSpeed: THREE.Vector3 }[] = [];
        
        for (let i = 0; i < 35; i++) {
          const geometry = geometries[Math.floor(Math.random() * geometries.length)];
          const material = materials[Math.floor(Math.random() * materials.length)];
          const mesh = new THREE.Mesh(geometry, material);
          
          mesh.position.x = (Math.random() - 0.5) * 30;
          mesh.position.y = (Math.random() - 0.5) * 25;
          mesh.position.z = (Math.random() - 0.5) * 25;
          
          mesh.rotation.x = Math.random() * Math.PI * 2;
          mesh.rotation.y = Math.random() * Math.PI * 2;
          mesh.rotation.z = Math.random() * Math.PI * 2;
          
          scene.add(mesh);
          meshes.push(mesh);
          
          meshAnimations.push({
            speed: 0.001 + Math.random() * 0.002,
            direction: new THREE.Vector3(
              (Math.random() - 0.5) * 0.01,
              (Math.random() - 0.5) * 0.01,
              (Math.random() - 0.5) * 0.01
            ),
            rotationSpeed: new THREE.Vector3(
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02,
              (Math.random() - 0.5) * 0.02
            )
          });
        }

        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          
          const time = Date.now() * 0.001;
          
          meshes.forEach((mesh, index) => {
            const animation = meshAnimations[index];
            
            // Complex rotation
            mesh.rotation.x += animation.rotationSpeed.x;
            mesh.rotation.y += animation.rotationSpeed.y;
            mesh.rotation.z += animation.rotationSpeed.z;
            
            // Floating movement
            mesh.position.x += Math.sin(time + index * 0.5) * animation.direction.x;
            mesh.position.y += Math.cos(time + index * 0.3) * animation.direction.y;
            mesh.position.z += Math.sin(time * 0.7 + index * 0.2) * animation.direction.z;
            
            // Boundary checking - wrap around
            if (mesh.position.x > 15) mesh.position.x = -15;
            if (mesh.position.x < -15) mesh.position.x = 15;
            if (mesh.position.y > 12) mesh.position.y = -12;
            if (mesh.position.y < -12) mesh.position.y = 12;
            if (mesh.position.z > 12) mesh.position.z = -12;
            if (mesh.position.z < -12) mesh.position.z = 12;
            
            // Pulsing effect
            const scale = 1 + Math.sin(time * 2 + index) * 0.1;
            mesh.scale.set(scale, scale, scale);
          });
          
          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          renderer.dispose();
        };
      });
    }
  }, []);

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
      title: "My DIGITVL",
      description: "SMS and email marketing platform where users can create accounts and send marketing campaigns",
      tech: "Next.js, Node.js",
      type: "Marketing Platform"
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
    <div className={styles.container}>
      <Head>
        <title>Muiez Arif - Freelance Software Engineer</title>
        <meta name="description" content="Muiez Arif - Freelance Software Engineer with 7+ years experience in Node.js, React.js, Next.js, React Native" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <canvas ref={canvasRef} className={styles.threeCanvas} />

      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.accent}>Muiez Arif</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Freelance Software Engineer</h2>
          <p className={styles.heroDescription}>
            With 7+ years of experience building modern web and mobile applications 
            using Node.js, React.js, Next.js, and React Native
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
                I'm a passionate freelance software engineer with over 7 years of experience 
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
          <h2 className={styles.sectionTitle}>Let's Work Together</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <h3>Get In Touch</h3>
              <p>
                Ready to start your next project? I'd love to hear about your ideas 
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
  );
};

export default Home;
