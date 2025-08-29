import React from 'react';

function Home() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '40px 20px', marginBottom: 40 }}>
        <h1 style={{ fontSize: '2.8rem', color: '#111', marginBottom: 16, fontWeight: 700, letterSpacing: 2 }}>
          JKBG Construction Company Ltd
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#222', fontStyle: 'italic', marginBottom: 0, fontWeight: 500, textAlign: 'center', maxWidth: 500 }}>
          "A legacy of excellence: Building tomorrow today"
        </p>
      </div>
      <div id="services" style={{ maxWidth: 700, margin: '0 auto', padding: '32px 16px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <h2 style={{ color: '#111', marginBottom: 18, fontWeight: 700 }}>Our Services</h2>
        <ul style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2, paddingLeft: 20 }}>
          <li>Architectural designs</li>
          <li>Structural designs</li>
          <li>Bill of quantities</li>
          <li>Plan Approvals</li>
          <li>Project Management</li>
          <li>Contractor</li>
          <li>Consultancy</li>
          <li>General construction</li>
          <li>Electrical works</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
