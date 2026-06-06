import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const developers = [
    { name: "Shravya Ganesh Hegde", link: "https://www.linkedin.com/in/shravya-hegde-732ba7311/" },
    { name: "Venkatesh Biradar", link: "https://www.linkedin.com/in/venkateshbiradar/" }
  ];

  return (
    <footer 
      style={{
        backgroundColor: '#0a050f',
        borderTop: '6px solid var(--border-color)',
        padding: '3rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        {/* Association Credits */}
        <p 
          style={{ 
            fontFamily: '"Press Start 2P", monospace', 
            fontSize: '0.6rem', 
            color: 'var(--accent-purple)',
            lineHeight: '1.6',
            margin: 0
          }}
        >
          Developed by Software Development SIG, IEEE UVCE
        </p>

        {/* Developer List */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {developers.map((dev, idx) => (
            <a
              key={idx}
              href={dev.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                fontFamily: '"Share Tech Mono", monospace',
                fontSize: '0.9rem',
                color: 'var(--text-white)',
                border: '2px solid var(--border-color)',
                backgroundColor: 'rgba(23, 15, 30, 0.6)',
                padding: '4px 10px',
                boxShadow: '2px 2px 0px var(--border-color)',
                transition: 'all 0.1s ease'
              }}
              className="dev-pill"
            >
              <Linkedin size={12} color="var(--accent-turquoise)" />
              {dev.name}
            </a>
          ))}
        </div>

        {/* Brand Copyright */}
        <p style={{ fontSize: '0.8rem', color: 'var(--text-gray)', margin: 0 }}>
          &copy; {new Date().getFullYear()} CodeFury 9.0. All rights reserved.
        </p>
      </div>

      <style>{`
        .dev-pill:hover {
          color: var(--accent-turquoise) !important;
          border-color: var(--accent-turquoise) !important;
          box-shadow: 2px 2px 0px var(--accent-turquoise) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
