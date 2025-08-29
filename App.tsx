import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import './App.css'

function App() {
  const [view, setView] = useState<'home' | 'about'>('home');

  // Scroll to services section in Home page
  const handleServicesClick = () => {
    setView('home');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div>
      <header style={{ background: '#fff', padding: '10px 0', marginBottom: 20, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setView('home')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              padding: '8px 16px',
              transition: 'color 0.2s, border-bottom 0.2s',
              borderBottom: view === 'home' ? '2px solid #222' : '2px solid transparent',
            }}
          >
            Home
          </button>
          <button
            onClick={handleServicesClick}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              padding: '8px 16px',
              transition: 'color 0.2s, border-bottom 0.2s',
              borderBottom: view === 'home' ? '2px solid #222' : '2px solid transparent',
            }}
          >
            Services
          </button>
          <button
            onClick={() => setView('about')}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#222',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              padding: '8px 16px',
              transition: 'color 0.2s, border-bottom 0.2s',
              borderBottom: view === 'about' ? '2px solid #222' : '2px solid transparent',
            }}
          >
            About
          </button>
        </nav>
      </header>
      <main style={{ paddingTop: 80 }}>
        {view === 'home' && <Home />}
        {view === 'about' && <About />}
      </main>
    </div>
  );
}

export default App;
