import React from 'react';

const PROJECTS = [
  {
    name: 'CardioGuardAI',
    description: 'An AI-powered system for cardiovascular risk analysis. It processes echocardiogram images using CNNs and integrates patient data to calculate risk, finally generating a comprehensive PDF report.',
    tech: 'CNN, Python, React, NLP',
    link: 'https://github.com/Samayeeta/ggh'
  },
  {
    name: 'IndiCure AI',
    description: 'A multi-agent LLM system built to accelerate drug repurposing research. It orchestrates parallel evidence streams to reduce literature review time by ~80%.',
    tech: 'FastAPI, Python, LLMs, Pydantic',
    link: 'https://github.com/Samayeeta/indicure_ey'
  },
  {
    name: 'Sahayika',
    description: 'An offline-capable, voice-driven web application for rural empowerment. Achieved 90%+ Aadhaar field-mapping accuracy using multilingual NLP.',
    tech: 'React, NLP, OCR, Python',
    link: 'https://github.com/Janvi3004/Sahayika-'
  },
  {
    name: 'Accident Risk Map',
    description: 'Predictive model analyzing 4,000+ incidents to flag high-risk zones. Reduced spatial query time by 60% through geospatial indexing.',
    tech: 'Python, Folium, GeoJSON',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-headline" data-aos="fade-up">Projects</h2>

        <div className="project-grid-refined">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="project-card-refined"
            >
              <div className="accent-line"></div>

              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.split(', ').map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-cta"
                >
                  GITHUB
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}