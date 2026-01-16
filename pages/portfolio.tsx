import Head from 'next/head';
import Navbar from '../components/Navbar';
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
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - Muiez Arif</title>
      </Head>
      <Navbar />
      <main className={styles.mainContent}>
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
      </main>
    </div>
  );
};

export default Portfolio;
