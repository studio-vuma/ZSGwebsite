import { useNavigate } from 'react-router-dom';

const PAGES = ['Home','About','Capabilities','Sectors','Perspectives','Contact'];
const PATHS = { Home:'/', About:'/about', Capabilities:'/capabilities', Sectors:'/sectors', Perspectives:'/perspectives', Contact:'/contact' };

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-logo">ZSG</div>
      <div className="footer-links">
        {PAGES.map(p => (
          <button key={p} onClick={() => navigate(PATHS[p])}>{p}</button>
        ))}
      </div>
      <div className="footer-copy">&copy; 2026 Zambezi Strategy Group</div>
    </footer>
  );
}
