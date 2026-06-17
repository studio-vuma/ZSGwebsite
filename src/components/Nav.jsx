import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PAGES = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Sectors', path: '/sectors' },
  { label: 'Perspectives', path: '/perspectives' },
  { label: 'Contact', path: '/contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur > 80 && cur > lastScroll) setHidden(true);
      else setHidden(false);
      lastScroll = cur;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location]);

  return (
    <>
      <nav className={`nav${hidden ? ' hidden' : ''}`}>
        <Link to="/" className="nav-logo">
          <span style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 300, letterSpacing: '6px', color: 'var(--navy)' }}>ZSG</span>
        </Link>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-overlay${open ? ' open' : ''}`}>
        <div className="overlay-logo">ZSG</div>
        <button className="overlay-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <span /><span />
        </button>
        {PAGES.map(p => (
          <Link key={p.path} to={p.path}
            className={`nav-link${location.pathname === p.path ? ' active' : ''}`}
            onClick={() => setOpen(false)}>
            {p.label.toUpperCase()}
          </Link>
        ))}
        <div className="nav-email">office@zambezistrategy.com</div>
      </div>
    </>
  );
}
