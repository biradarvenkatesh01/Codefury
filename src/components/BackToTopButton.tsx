import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="pixel-btn"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
        padding: '0.6rem',
        minWidth: 'auto',
        backgroundColor: 'var(--accent-lime)',
        borderColor: 'var(--border-color)',
        boxShadow: '3px 3px 0px #000',
        animation: 'bounce-pixel 1.5s infinite'
      }}
      title="Scroll to Top"
    >
      <ArrowUp size={20} color="#000" />

      <style>{`
        @keyframes bounce-pixel {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </button>
  );
};

export default BackToTopButton;
