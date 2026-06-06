import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  const allLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prize Pool', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'CodeFury Wall', href: '#wall' },
    { name: 'Past Winners', href: '#past' },
    { name: 'Our Sponsors', href: '#sponsors' },
    { name: 'Mini Game', href: '#game' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(23, 15, 30, 0.95)' : 'transparent',
        borderBottom: scrolled ? '4px solid var(--border-color)' : 'none',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
      }}
    >
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        {/* Interactive Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')}
          style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <img 
            src="/assets/handle.png" 
            alt="CodeFury Logo" 
            style={{ 
              height: '50px',
              filter: 'drop-shadow(2px 2px 0px var(--border-color))'
            }} 
          />
        </a>

        {/* Desktop Navigation */}
        <nav 
          style={{ 
            display: 'none', 
            alignItems: 'center', 
            gap: '1.5rem' 
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '0.65rem',
                color: 'var(--text-white)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.1s ease',
                padding: '0.5rem 1rem',
                border: '4px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-slate)';
                e.currentTarget.style.color = 'var(--accent-turquoise)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-white)';
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#game"
            onClick={(e) => scrollToSection(e, '#game')}
            className="pixel-btn"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.65rem'
            }}
          >
            <Gamepad2 size={14} /> PLAY GAME
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: 'block',
            backgroundColor: 'var(--accent-slate)',
            border: '4px solid var(--border-color)',
            boxShadow: '2px 2px 0px 0px #000',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#000',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 64px)',
            backgroundColor: 'var(--bg-black)',
            borderTop: '4px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            padding: '2rem 1.5rem',
            zIndex: 999,
            overflowY: 'auto'
          }}
        >
          {allLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '0.75rem',
                color: 'var(--text-white)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                padding: '0.75rem 1.5rem',
                width: '80%',
                textAlign: 'center',
                border: '4px solid var(--border-color)',
                boxShadow: '4px 4px 0px 0px var(--accent-slate)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                transition: 'all 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-turquoise)';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--accent-lime)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.color = 'var(--text-white)';
                e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--accent-slate)';
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Inline styles for responsive layout */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
