import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "Dash",
      role: "Software Engineer",
      period: "Jan 2025 – Present",
      description:
        "Working on logistics, admin dashboards, APIs, and scalable backend services for Saudi-based operations.",
      points: [
        "Built and maintained Node.js & MongoDB-based backend systems",
        "Worked on AdminJS dashboards and internal tooling",
        "Handled performance issues, database spikes, and production debugging",
        "Integrated third-party services and tracking systems"
      ],
      location: "Remote",

    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: " 2024 – Present",
      description:
        "Working with multiple international clients to build production-grade web platforms and SaaS products.",
      points: [
        "Built and maintained multiple web and mobile applications for clients worldwide",
        "Built sports booking Saas for different venues for a saudi client",
        "Built a hospital management system for a Saudi client",
        "Built a Retail management mobile app for Uk based client with AI integration and receipt detection algorithm",
        "Worked on property sales and rental distribution platform for a Saudi client",
        "Built Saudia Lawyers Conference website for a Saudi client",
        "Developed thehomies.app – a community platform with video posting, gifting & subscriptions",
        "Created myconscent – AI-powered legal document generation platform",
        "Built healthtracker.me for healthcare providers with patient onboarding & AI symptom tracking",
        "Integrated Apple HealthKit & AI agents for patient symptom logging",
      ],
      location: "Remote",

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

  const downloadCV = async () => {
  const res = await fetch("/api/cv");
  const blob = await res.blob();

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Muiez_Arif_CV.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
};


  return (
    <Layout>
      <Head>
        <title>Experience - Muiez Arif</title>
      </Head>
      <div className="container">

        <section className={styles.sectionContainer}>
          <h1 className={styles.pageTitle}>Professional Experience</h1>

          <div className={styles.cvDownloadSection}>
            <p>Looking for a detailed CV?</p>
            <a href="#" className={styles.btnPrimary} onClick={(e) => {
    e.preventDefault();
    downloadCV();
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
      </div>
    </Layout>
  );
};

export default Experience;
