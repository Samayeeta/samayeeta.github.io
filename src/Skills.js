import React from 'react';
import {
  FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker
} from 'react-icons/fa';
import { SiExpress, SiFastapi, SiVite } from 'react-icons/si';

const SKILLS = [
  { name: 'Python', icon: <FaPython />, color: '#3776ab' },
  { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
  { name: 'React', icon: <FaReact />, color: '#61dafb' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: 'var(--text-main)' },
  { name: 'FastAPI', icon: <SiFastapi />, color: '#05998b' },
  { name: 'MongoDB', icon: <FaDatabase />, color: '#47a248' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
  { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
  { name: 'Vite', icon: <SiVite />, color: '#646cff' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-headline" data-aos="fade-up">Skills</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '2rem',
          marginTop: '5rem'
        }}>
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="skill-box"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div style={{ fontSize: '3rem', color: skill.color, marginBottom: '1rem' }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}