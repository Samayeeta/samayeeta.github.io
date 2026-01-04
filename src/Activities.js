import React from 'react';

const ACTIVITIES = [
    {
        name: 'Hoomans of Calcutta',
        role: 'Co-founder, Vice President',
        date: 'Jan 2020 – Present',
        details: [
            'Student-led nonprofit; raised ₹100,000+ and led citywide campaigns.',
            'Nominated for Indian Achievers’ Award 2021 for community impact.'
        ]
    },
    {
        name: 'Hack4Bengal',
        role: 'Organizing Team Lead',
        date: 'Feb 2025 – Jul 2025',
        details: [
            'Led execution of Eastern India’s largest 36-hour hackathon with 500+ participants.',
            'Managed 20+ community partners to streamline operations.'
        ]
    },
    {
        name: 'CodeDay India',
        role: 'Organizing Team Lead',
        date: 'Jul 2023 – Jul 2025',
        details: [
            'Spearheaded coding events in Kolkata and Lucknow with 100+ participants.',
            'Oversaw end-to-end event planning and live operations.'
        ]
    }
];

export default function Activities() {
    return (
        <section id="activities" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <h2 className="section-headline" data-aos="fade-up">Community & Leadership</h2>

                <div className="activity-grid">
                    {ACTIVITIES.map((act, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="activity-box"
                        >
                            <span className="act-date-chip">{act.date}</span>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ color: 'var(--text-main)' }}>{act.name}</h3>
                                <p className="act-role">{act.role}</p>
                            </div>
                            <ul>
                                {act.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
