import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Sectors from './pages/Sectors';
import Perspectives from './pages/Perspectives';
import Essay from './pages/Essay';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/perspectives" element={<Perspectives />} />
        <Route path="/essay" element={<Essay />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
