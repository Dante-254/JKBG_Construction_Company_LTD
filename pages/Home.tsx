import React from 'react';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.8rem', color: '#1a1a1a', marginBottom: 16, fontWeight: 700, letterSpacing: 2, textShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        JKBG Construction Company Ltd
      </h1>
      <p style={{ fontSize: '1.3rem', color: '#222', fontStyle: 'italic', marginBottom: 0, fontWeight: 500, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        "A legacy of excellence: Building tomorrow today"
      </p>
      <div style={{ marginTop: 40, width: '100%', maxWidth: 600 }}>
        <h2 style={{ color: '#1a1a1a', fontSize: '1.5rem', marginBottom: 18, fontWeight: 700, letterSpacing: 1, textShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
          OUR SERVICES
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            'Architectural designs',
            'Structural designs',
            'Bill of quantities',
            'Plan Approvals',
            'Project Management',
            'Contractor',
            'Consultancy',
            'General construction',
            'Electrical works',
          ].map((service, idx) => (
            <li key={idx} style={{ fontSize: '1.1rem', color: '#1a1a1a', marginBottom: 12, paddingLeft: 0, position: 'relative', textShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <span style={{ fontWeight: 500 }}>{idx + 1}. {service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
