import React from 'react';

export default function Footer() {
  return (
    <footer style={{ padding: '5rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>SAMAYEETA MAITRA</span>. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}