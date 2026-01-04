import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-headline" data-aos="fade-up">About</h2>

        <div className="content-grid" style={{ marginTop: '5rem' }}>
          <div data-aos="fade-right" style={{ textAlign: 'center' }}>
            <img
              src={`${process.env.PUBLIC_URL}/picture.png`}
              alt="Samayeeta"
              style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--accent-color)',
                boxShadow: '0 0 30px rgba(255, 77, 90, 0.3)'
              }}
            />
          </div>

          <div data-aos="fade-left">
            <p style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 600, lineHeight: 1.4 }}>
              I'm Samayeeta.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              I'm especially interested in backend development and the practical application of AI in building intelligent systems. I specialize in Python and React. Currently, I'm a Software Development Intern at Thakral Group, where I'm focused on developing the backend services and API integrations for their system's banking chatbot.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Outside of work, I'm deeply involved in community leadership. I love organizing tech events and am curious about how we can make complex software more intuitive and accessible for everyone.
            </p>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="https://github.com/Samayeeta" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600 }}>
                <FaGithub size={22} /> GITHUB
              </a>
              <a href="https://linkedin.com/in/samayeeta-maitra" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600 }}>
                <FaLinkedin size={22} /> LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}