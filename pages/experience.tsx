import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "Dashsaudi (www.dashsaudi.com)",
      role: "MERN Stack Developer",
      period: "Jan 2025 – Present",
      location: "Remote",
      points: [
        "Maintain and enhance an enterprise-grade platform using React.js, Node.js, and MongoDB.",
        "Refactor and optimize legacy code for performance and scalability.",
        "Implement new features, address client feedback, and ensure production stability.",
        "Collaborate directly with product teams in an agile environment."
      ]
    },
    {
      company: "Freelance – Upwork & Fiverr",
      role: "Full Stack Engineer (React.js / Next.js / Node.js)",
      period: "Mar 2020 – Dec 2024",
      location: "Remote",
      points: [
        "Built and maintain Digitvl.com for independent artists.",
        "Integrated Stripe for subscriptions and one-time payouts.",
        "Developed and deployed a kids' sports learning app for a German client.",
        "Created full flow diagrams, use cases, and project architecture independently.",
        "Built admin dashboards, CRMs, booking systems, and more using MERN stack."
      ]
    },
    {
      company: "Extreme Commerce, Lahore",
      role: "Android Engineer (Java/Kotlin)",
      period: "Oct 2020 – Mar 2023",
      location: "Lahore, Pakistan",
      points: [
        "Developed and maintained E-Learning platform Android App.",
        "Managed app updates, version control, and technical support.",
        "Wrote technical documentation and handled client-side integration."
      ]
    },
    {
      company: "Suave Solution",
      role: "Android Developer (Java/Kotlin)",
      period: "Sep 2019 – Apr 2020",
      location: "Lahore, Pakistan",
      points: [
        "Worked with MVVM, Dagger2, RxJava, and Retrofit.",
        "Built and maintained scalable Android applications.",
        "Improved UI/UX, debugging, and versioning workflows."
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Experience - Muiez Arif</title>
      </Head>
      <section className={styles.sectionContainer}>
        <h1 className={styles.pageTitle}>Professional Experience</h1>
        
        <div className={styles.cvDownloadSection}>
          <p>Looking for a detailed CV?</p>
          <a href="#" className={styles.btnPrimary} onClick={(e) => {
            e.preventDefault();
            alert("In a production environment, this would download the PDF CV.");
          }}>Download PDF CV</a>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.experienceRole}>{exp.role}</h3>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                </div>
                <h4 className={styles.experienceCompany}>{exp.company} | {exp.location}</h4>
                <ul className={styles.experienceList}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationCard}>
            <h3>Bachelor of Science in Software Engineering</h3>
            <p>University of Lahore | 2015 – 2019</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
