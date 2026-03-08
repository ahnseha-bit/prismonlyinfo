import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const navLinks = [
  { path: '/main', label: 'MAIN' },
  { path: '/info', label: 'INFO' },
  { path: '/booth', label: 'BOOTH' },
  { path: '/event', label: 'EVENT' },
  { path: '/links', label: 'LINKS' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-primary-light">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/main" className="text-xl font-bold italic tracking-[0.2em] text-primary">
          PRISM
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-widest transition-colors ${
                location.pathname === link.path || (location.pathname === '/' && link.path === '/main')
                  ? 'text-primary font-bold'
                  : 'text-slate-500 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-white/95 border-b border-primary-light py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-sm tracking-widest transition-colors ${
                location.pathname === link.path || (location.pathname === '/' && link.path === '/main')
                  ? 'text-primary font-bold'
                  : 'text-slate-500 hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
