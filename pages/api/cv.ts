import type { NextApiRequest, NextApiResponse } from "next";
import PDFDocument from "pdfkit";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  points: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Same data as Experience page (keep in sync)
  const experiences: Experience[] = [
    {
      company: "Dash",
      role: "Software Engineer",
      period: "Jan 2025 – Present",
      location: "Remote",
      description:
        "Working on logistics, admin dashboards, APIs, and scalable backend services for Saudi-based operations.",
      points: [
        "Built and maintained Node.js & MongoDB-based backend systems",
        "Worked on AdminJS dashboards and internal tooling",
        "Handled performance issues, database spikes, and production debugging",
        "Integrated third-party services and tracking systems",
      ],
    },
    {
      company: "Freelance",
      role: "Software Engineer",
      period: "2020 – Present",
      location: "Remote",
      description:
        "Working with multiple international clients to build production-grade web platforms and SaaS products.",
      points: [
        "Built and maintained multiple web and mobile applications for clients worldwide",
        "Built sports booking Saas for different venues for a saudi client",
        "Built a hospital management system for a Saudi client",
        "Worked on property sales and rental distribution platform for a Saudi client",
        "Built a Retail management mobile app for Uk based client with AI integration and receipt detection algorithm",
        "Built Saudia Lawyers Conference website for a Saudi client",
        "Developed thehomies.app – a community platform with video posting, gifting & subscriptions",
        "Created myconscent – AI-powered legal document generation platform",
        "Built healthtracker.me for healthcare providers with patient onboarding & AI symptom tracking",
        "Integrated Apple HealthKit & AI agents for patient symptom logging",
        "Built and maintain Digitvl.com for independent artists.",
        "Integrated Stripe for subscriptions and one-time payouts.",
        "Developed and deployed a kids' sports learning app for a German client.",
        "Created full flow diagrams, use cases, and project architecture independently.",
        "Built admin dashboards, CRMs, booking systems, and more using MERN stack.",
      ],
    },
    {
      company: "Extreme Commerce, Lahore",
      role: "Android Engineer (Java/Kotlin)",
      period: "Oct 2020 – Mar 2023",
      location: "Lahore, Pakistan",
      points: [
        "Developed and maintained E-Learning platform Android App.",
        "Managed app updates, version control, and technical support.",
        "Wrote technical documentation and handled client-side integration.",
      ],
    },
    {
      company: "Suave Solution",
      role: "Android Developer (Java/Kotlin)",
      period: "Sep 2019 – Apr 2020",
      location: "Lahore, Pakistan",
      points: [
        "Worked with MVVM, Dagger2, RxJava, and Retrofit.",
        "Built and maintained scalable Android applications.",
        "Improved UI/UX, debugging, and versioning workflows.",
      ],
    },
  ];

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'attachment; filename="Muiez_Arif_CV.pdf"');

  const doc = new PDFDocument({
    size: "A4",
    margin: 50,
    info: {
      Title: "Muiez Arif - CV",
      Author: "Muiez Arif",
    },
  });

  doc.pipe(res);

  // Helpers
  const line = () => {
    doc
      .moveTo(50, doc.y)
      .lineTo(545, doc.y)
      .lineWidth(1)
      .strokeColor("#D1D5DB")
      .stroke();
  };

  const sectionTitle = (title: string) => {
    doc.moveDown(1.0);
    doc.font("Helvetica-Bold").fontSize(12).fillColor("#111827").text(title.toUpperCase());
    doc.moveDown(0.3);
    line();
    doc.moveDown(0.6);
  };

  // Header
  doc.font("Helvetica-Bold").fontSize(22).fillColor("#111827").text("Muiez Arif");
  doc.moveDown(0.25);
  doc.font("Helvetica").fontSize(11).fillColor("#374151").text("Software Engineer (Full Stack / MERN / Mobile)");
  doc.moveDown(0.6);

  // Contact row (edit these if needed)
  doc
    .font("Helvetica")
    .fontSize(10)
    .fillColor("#111827")
    .text("Email: muiezarifwork1@gmail.com   |   WhatsApp: +92 337 6101223   |   Website: muiezarif.com");

  doc.moveDown(0.8);
  line();

  // Summary
  sectionTitle("Summary");
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor("#111827")
    .text(
      "Full Stack Software Engineer with strong experience in building modern web and mobile products using Node.js, React, Next.js, React Native, Laravel, Django, Python, Postgres, SQL and MongoDB. Skilled in shipping production features, improving performance, and delivering scalable systems end-to-end.",
      { lineGap: 3 }
    );

  // Skills
  sectionTitle("Core Skills");
  doc
    .font("Helvetica")
    .fontSize(10.5)
    .fillColor("#111827")
    .text(
      "Node.js • React.js • Next.js • Laravel • Django • Python • MongoDB • REST APIs • Admin Dashboards • React Native • TypeScript • Production Debugging • Performance & Reliability",
      { lineGap: 3 }
    );

  // Experience
  sectionTitle("Experience");
  experiences.forEach((exp) => {
    // Role + period
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#111827").text(exp.role, { continued: true });
    doc.font("Helvetica").fontSize(10).fillColor("#374151").text(`   |   ${exp.period}`);

    // Company + location
    doc
      .font("Helvetica")
      .fontSize(10.5)
      .fillColor("#111827")
      .text(`${exp.company}  —  ${exp.location}`);

    if (exp.description) {
      doc.moveDown(0.25);
      doc.font("Helvetica").fontSize(10).fillColor("#374151").text(exp.description, { lineGap: 2 });
    }

    doc.moveDown(0.35);

    // Bullets
    doc.font("Helvetica").fontSize(10).fillColor("#111827");
    exp.points.forEach((p) => {
      doc.text(`• ${p}`, { indent: 12, lineGap: 2 });
    });

    doc.moveDown(0.8);
  });

  // Education
  sectionTitle("Education");
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .fillColor("#111827")
    .text("Bachelor of Science in Software Engineering");
  doc.font("Helvetica").fontSize(10.5).fillColor("#374151").text("University of Lahore | 2015 – 2019");

  // Footer
  doc.moveDown(1.2);
  line();
  doc.moveDown(0.5);
  doc.font("Helvetica").fontSize(9).fillColor("#6B7280").text("Generated from portfolio experience data.", {
    align: "center",
  });

  doc.end();
}
