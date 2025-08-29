import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [view, setView] = useState<'home' | 'about'>('home');

  return (
    <div>
      <header style={{ background: '#282c34', padding: '10px 0', marginBottom: 20, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
        <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginRight: 10 }}>
            <button 
              className="home-btn"
              onClick={() => setView('home')}
            >
              Home
            </button>
            <button 
              className="service-link-btn"
              onClick={() => setView('home')}
            >
              Services
            </button>
          </div>
          <button 
            onClick={() => setView('about')} 
            style={{ padding: '8px 16px', borderRadius: 4, border: 'none', background: '#61dafb', color: '#282c34', fontWeight: 'bold', cursor: 'pointer' }}
          >
            About
          </button>
        </nav>
      </header>
      <div style={{ margin: '70px 10px 10px 10px' }}>
        {view === 'home' && <Home />}
        {view === 'about' && <About />}
      </div>
    </div>
  );
}

export default App
