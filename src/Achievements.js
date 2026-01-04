import React from 'react';

const ACHIEVEMENTS = [
    {
        title: 'All India Women Start-a-thon (AIWS), Stage 2',
        date: 'Dec 2025',
        desc: 'Advanced to Stage 2 from a national pool of 10,000+ registrations for entrepreneurial innovation.'
    },
    {
        title: 'WWT Top 25 Global, Shooting Star Hackathon',
        date: 'Sep 2025',
        desc: 'Ranked Top 25 of 1,000+ global projects for innovation and social impact.'
    },
    {
        title: 'Women Achievers’ Award 2021',
        date: 'Sep 2021',
        desc: 'Recognized for empowerment and community support initiatives.'
    },
    {
        title: 'Indian Achievers Award 2021',
        date: 'May 2021',
        desc: 'Nominated and approved for social impact reaching underserved individuals in Kolkata.'
    },
    {
        title: 'Best Education Project, Cal Hacks',
        date: 'UC Berkeley',
        desc: 'Winner for Edufy, an interactive application improving accessibility and classroom workflows for students with disabilities.'
    }
];

export default function Achievements() {
    return (
        <section id="achievements">
            <div className="container">
                <h2 className="section-headline" data-aos="fade-up">Recognition</h2>

                <div style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {ACHIEVEMENTS.map((award, index) => (
                        <div
                            key={index}
                            style={{
                                padding: '2.5rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                background: 'rgba(255,255,255,0.01)',
                                borderRadius: '12px',
                                transition: '0.3s'
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
                            }}
                        >
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '1rem', lineHeight: 1.3 }}>{award.title}</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{award.desc}</p>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-color)', letterSpacing: '1px' }}>{award.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
