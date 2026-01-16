import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Portfolio = () => {
  const projects = [
    {
      title: "VBC by EC",
      description: "Android native mobile app like Udemy for online education platform",
      tech: "Android Native",
      type: "Mobile App",
      details: "Developed and maintained the E-Learning platform Android App. Managed app updates, version control, and technical support."
    },
    {
      title: "Music Streaming Platform",
      description: "Streaming platform for music artists with user management and content delivery",
      tech: "React.js, Next.js",
      type: "Web Platform",
      details: "Built Digitvl.com for independent artists. Integrated Stripe for subscriptions and one-time payouts."
    },
    {
      title: "Journaly",
      description: "AI-powered journaling and mood-tracking app",
      tech: "React Native, OpenAI",
      type: "Mobile App",
      details: "Created an AI-powered journaling and mood-tracking app using React Native and OpenAI APIs."
    },
    {
      title: "Courtena",
      description: "Online padel venue booking system",
      tech: "React.js, React Native",
      type: "Booking System",
      details: "Online padel venue booking system with mobile app for customers and web portal for venue owners."
    },
    {
      title: "Soclean",
      description: "Cloud laundry service platform",
      tech: "Next.js, Node.js",
      type: "Service Platform",
      details: "Cloud laundry service platform for online laundry pickup and delivery booking."
    },
    {
      title: "URU Mobile App",
      description: "Retail store inventory management app",
      tech: "React Native",
      type: "Business App",
      details: "Retail store inventory management app with analytics and EPOS system for product sales."
    },
    {
      title: "HealthTracker.me",
      description: "Healthcare platform for providers + patient app with AI symptom logging",
      tech: "Next.js, Node.js, Mobile App, AI, Apple HealthKit",
      type: "Healthcare Platform",
      details:
        "Built a provider portal to manage patients and onboarding. Patients can log symptoms via mobile app while speaking to an AI agent, with Apple HealthKit integration."
    },
    {
      title: "MyConscent",
      description: "AI-powered legal document generator (real estate & agreements)",
      tech: "Next.js, Node.js, AI",
      type: "SaaS Web App",
      details:
        "Built a platform that generates legal documents using AI including real estate consent forms, NDAs, and other property-related legal templates."
    },
    {
      title: "TheHomies",
      description: "Community platform with social-media features + subscriptions and gifting",
      tech: "Next.js, Node.js, MongoDB",
      type: "Community Platform",
      details:
        "Developed a community platform with video posting, gifting, subscriptions, and modern social features."
    },
    {
      title: "Saudia Lawyers Conference Website",
      description: "Event website built for a Saudi client",
      tech: "Next.js",
      type: "Website",
      details:
        "Built the Saudia Lawyers Conference website for a Saudi client with modern responsive UI and event-focused structure."
    },
    {
      title: "Hospital Management System",
      description: "Internal hospital management platform for a Saudi client",
      tech: "MERN Stack",
      type: "Business System",
      details:
        "Built a hospital management system for internal workflows including patient records, admin operations, and staff processes."
    },
    {
      title: "Property Sales & Rental Distribution Platform",
      description: "Platform for managing property sales, rentals and distribution workflows",
      tech: "MERN Stack",
      type: "Web Platform",
      details:
        "Worked on a Saudi-based property platform focused on sales/rent workflows and distribution management."
    },
    {
      title: "Kids Sports Learning App",
      description: "Learning app for kids built for a German client",
      tech: "Mobile App",
      type: "Mobile App",
      details:
        "Developed and deployed a kids sports learning application for a German client."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Portfolio - Muiez Arif</title>
      </Head>
      <div className="container">

        <section className={styles.sectionContainer}>
          <h1 className={styles.pageTitle}>Portfolio</h1>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectType}>{project.type}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <p className={styles.projectDetails}>{project.details}</p>
                <div className={styles.projectTech}>{project.tech}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
