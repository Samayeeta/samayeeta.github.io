import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const EXPERIENCE = [
  {
    title: 'Software Development Intern',
    company: 'Thakral Information Systems',
    location: 'Remote, India',
    date: 'Oct 2025 - Present',
    details: [
      'Full Stack Banking Chatbot: Developing a banking chatbot with React/Vite (UI) and Node.js/Express (services), using MongoDB + Mongoose for structured persistence.',
      'Controlled GenAI Execution: Implementing a controlled Gemini intent-to-action pipeline where natural-language requests resolve to allowlisted backend operations.',
      'REST API Design: Designing REST APIs for users, accounts, and transactions; validating end-to-end flows in Postman.',
      'Production-Aligned Delivery: Building secret-safe patterns and Docker-compatible workflows to support deployment readiness.'
    ]
  },
  {
    title: 'Software Engineering Intern',
    company: 'HireBuddy',
    location: 'Remote, India',
    date: 'Dec 2024 - Mar 2025',
    details: [
      'AI Resume Analysis: Built an AI-powered resume analysis workflow using Python, Gemini API, and NLP; improved relevance across 1,000+ user profiles.',
      'ATS Optimization: Developed automated parsing and document generation pipelines using Python, Jinja2, and PDFKit.'
    ]
  },
  {
    title: 'Prompt Engineering Intern',
    company: 'Bundled AI',
    location: 'Remote, USA',
    date: 'Feb 2025 - Jun 2025',
    details: [
      'Evaluation & Experimentation: Designed prompt experiments for image generative models; iterated on inference parameters to improve repeatability.',
      'Workflow Optimization: Systematic prompt pattern testing to reduce failure modes and improve output consistency.'
    ]
  },
  {
    title: 'Research Intern',
    company: 'Classe365',
    location: 'Remote, Australia',
    date: 'Jul 2023 - Oct 2023',
    details: [
      'Market & Competitive Research: Assessed positioning and feature gaps across global EdTech student management platforms.',
      'Strategic Documentation: Authored research-backed white papers to support product strategy and roadmap discussions with stakeholders.'
    ]
  },
  {
    title: 'Website Analyst Intern',
    company: 'Fruitbowl Digital',
    location: 'Remote, India',
    date: 'Sep 2022 - Apr 2023',
    details: [
      'Digital Analytics & SEO: Analyzed user behavior using Google Ads and web analytics; improved SEO content strategy for high-profile clients like BMW and Tata.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-headline" data-aos="fade-up">Professional Experience</h2>

        <div className="experience-timeline">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="experience-item" data-aos="fade-up">
              <div className="experience-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{exp.title}</h3>
                      <div className="exp-location" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--accent-color)' }} />
                        {exp.location}
                      </div>
                    </div>
                    <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--accent-color)' }}>
                      {exp.company}
                    </p>
                  </div>
                  <span style={{
                    color: 'var(--bg-color)',
                    background: 'var(--accent-color)',
                    padding: '8px 18px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}>
                    {exp.date}
                  </span>
                </div>

                <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', listStyle: 'square', marginTop: '1.5rem' }}>
                  {exp.details.map((d, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', lineHeight: 1.6 }}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}