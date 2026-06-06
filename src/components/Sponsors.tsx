import React from 'react';
import { ExternalLink } from 'lucide-react';

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" style={{ backgroundColor: '#170f1e' }}>
      <div className="container">
        <div className="section-header">
          <h2>Our Sponsors</h2>
        </div>

        {/* Diamond Sponsor - Highlighted */}
        <div style={{ marginBottom: '4rem' }}>
          <p 
            style={{ 
              fontFamily: '"Press Start 2P", monospace', 
              fontSize: '0.65rem', 
              color: 'var(--accent-gold)', 
              textAlign: 'center',
              marginBottom: '1.5rem'
            }}
          >
            [ DIAMOND SPONSOR ]
          </p>
          <div 
            className="pixel-box gold"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: 'rgba(23, 15, 30, 0.95)',
              border: '4px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              padding: '2.5rem 2rem'
            }}
          >
            {/* Logo box */}
            <a 
              href="https://www.artpark.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                border: '4px solid var(--border-color)',
                backgroundColor: '#fff',
                padding: '1rem',
                boxShadow: '4px 4px 0px var(--border-color)',
                transition: 'all 0.1s ease',
                flexShrink: 0
              }}
              className="sponsor-logo-box"
            >
              <img 
                src="/assets/ARTPARK primary logo.png" 
                alt="ARTPARK Logo" 
                style={{ 
                  height: '65px', 
                  maxWidth: '200px',
                  objectFit: 'contain',
                  imageRendering: 'pixelated'
                }} 
              />
            </a>

            {/* Description */}
            <div style={{ flex: '1 1 300px' }}>
              <h3 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.8rem', 
                  color: 'var(--accent-gold)',
                  marginBottom: '1rem' 
                }}
              >
                ARTPARK @ IISc
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--gainsboro)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                ARTPARK (AI & Robotics Technology Park) brings together the best of research, startup, industry and government ecosystems to drive large-scale social impact.
              </p>
              <a 
                href="https://www.artpark.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pixel-btn gold"
                style={{ fontSize: '0.55rem', padding: '0.5rem 1rem' }}
              >
                Visit ARTPARK <ExternalLink size={12} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>
        </div>

        {/* Platform Partner & General Sponsors Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {/* Platform Partner */}
          <div>
            <p 
              style={{ 
                fontFamily: '"Press Start 2P", monospace', 
                fontSize: '0.65rem', 
                color: 'var(--accent-turquoise)', 
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}
            >
              [ PLATFORM PARTNER ]
            </p>
            <div 
              className="pixel-box turquoise"
              style={{
                backgroundColor: 'rgba(23, 15, 30, 0.95)',
                border: '4px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                height: 'calc(100% - 2.5rem)'
              }}
            >
              <a 
                href="https://unstop.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  border: '4px solid var(--border-color)',
                  backgroundColor: '#fff',
                  padding: '1rem',
                  boxShadow: '4px 4px 0px var(--border-color)',
                  transition: 'all 0.1s ease',
                  marginBottom: '1.5rem'
                }}
                className="sponsor-logo-box"
              >
                <img 
                  src="/assets/unstop.png" 
                  alt="Unstop Logo" 
                  style={{ 
                    height: '50px', 
                    maxWidth: '180px',
                    objectFit: 'contain',
                    imageRendering: 'pixelated'
                  }} 
                />
              </a>
              <h3 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.75rem', 
                  color: 'var(--accent-turquoise)',
                  marginBottom: '1rem'
                }}
              >
                UNSTOP
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                Unstop is the playground for developers to learn, compete, show talent, and get hired by top companies.
              </p>
              <a 
                href="https://unstop.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pixel-btn"
                style={{ fontSize: '0.55rem', padding: '0.5rem 1rem' }}
              >
                Visit Unstop <ExternalLink size={12} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>

          {/* General Sponsors */}
          <div>
            <p 
              style={{ 
                fontFamily: '"Press Start 2P", monospace', 
                fontSize: '0.65rem', 
                color: 'var(--accent-purple)', 
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}
            >
              [ GENERAL SPONSORS ]
            </p>
            <div 
              className="pixel-box purple"
              style={{
                backgroundColor: 'rgba(23, 15, 30, 0.95)',
                border: '4px solid var(--border-color)',
                display: 'grid',
                gridTemplateRows: 'auto auto auto',
                gap: '1.5rem',
                padding: '2rem 1.5rem'
              }}
            >
              {/* Sponsor 1: IEEE CS Bangalore Section */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  borderBottom: '2px dashed rgba(255,255,255,0.08)',
                  paddingBottom: '1rem'
                }}
              >
                <a 
                  href="https://ieeecsbangalore.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#fff',
                    border: '3px solid var(--border-color)',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '2px 2px 0px var(--border-color)',
                    flexShrink: 0
                  }}
                  className="sponsor-logo-box"
                >
                  <img src="/assets/bng.png" alt="IEEE CS Bangalore Logo" style={{ height: '35px', width: '50px', objectFit: 'contain' }} />
                </a>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-white)' }}>IEEE CS Bangalore</h4>
                  <a 
                    href="https://ieeecsbangalore.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', textDecoration: 'none' }}
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </div>

              {/* Sponsor 2: IEEE WIE */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  borderBottom: '2px dashed rgba(255,255,255,0.08)',
                  paddingBottom: '1rem'
                }}
              >
                <a 
                  href="https://wie.ieee.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#fff',
                    border: '3px solid var(--border-color)',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '2px 2px 0px var(--border-color)',
                    flexShrink: 0
                  }}
                  className="sponsor-logo-box"
                >
                  <img src="/assets/wielogonew.png" alt="IEEE WIE Logo" style={{ height: '35px', width: '50px', objectFit: 'contain' }} />
                </a>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-white)' }}>IEEE WIE</h4>
                  <a 
                    href="https://wie.ieee.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', textDecoration: 'none' }}
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </div>

              {/* Sponsor 3: MistyClimb LLP */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div 
                  style={{
                    border: '3px solid var(--border-color)',
                    backgroundColor: 'var(--bg-black)',
                    color: 'var(--accent-purple)',
                    width: '62px',
                    height: '47px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '2px 2px 0px var(--border-color)',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '0.35rem',
                    textAlign: 'center',
                    lineHeight: '1.4',
                    flexShrink: 0
                  }}
                >
                  MISTY<br />CLIMB
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-white)' }}>MistyClimb LLP</h4>
                  <a 
                    href="https://tracxn.com/d/legal-entities/india/mistyclimb-llp/__IKhPP9H2P8LXL5e1EiNMGr3OCaWiJdUf9M_pVuIf3b8#about" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--accent-purple)', textDecoration: 'none' }}
                  >
                    Tracxn Profile &rarr;
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <style>{`
        .sponsor-logo-box:hover {
          border-color: var(--accent-turquoise) !important;
          box-shadow: 4px 4px 0px var(--accent-turquoise) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
