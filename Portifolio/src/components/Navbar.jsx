import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark">&lt;</span>
          Sam
          <span className="navbar__logo-mark">/&gt;</span>
        </a>

        <nav className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            style={{ transitionDelay: menuOpen ? `${i * 0.08}s` : '0s' }}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
