import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container" data-aos="fade-up">
        <h1 className="hero-title" style={{ fontSize: '4.5rem', fontWeight: 300, marginBottom: '1rem', letterSpacing: '0.05em' }}>
          Hello, I'm <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Samayeeta</span>.
        </h1>
        <h2 className="hero-subtitle" style={{
          fontSize: '2.5rem',
          fontWeight: 300,
          color: 'var(--text-main)',
          marginBottom: '4rem',
          minHeight: '3.5rem',
          letterSpacing: '0.05em',
          lineHeight: 1.5
        }}>
          I am a{' '}
          <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>
            <Typewriter
              words={[
                'Software Engineer Intern',
                'Impact-Driven Developer',
                'Python + React Developer',
                'Hackathon Organizer',
                'Backend Developer'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <a href="#projects" className="btn-cta">
          View my work <span style={{ marginLeft: '12px' }}>↓</span>
        </a>
      </div>
    </section>
  );
}