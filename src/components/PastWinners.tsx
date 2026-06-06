import React from 'react';
import { Trophy, Github, ExternalLink } from 'lucide-react';

const PastWinners: React.FC = () => {
  const webWinners = [
    {
      title: "WINNERS",
      project: "Astero",
      team: "Goofy Gophers",
      college: "NMAM Institute of Technology",
      tech: "Next.js, Google Maps API, MongoDB",
      github: "https://github.com/Team-Goofy-Gophers/website",
      live: "https://astero-rho.vercel.app/",
      color: "var(--accent-gold)",
      theme: "gold"
    },
    {
      title: "RUNNERS",
      project: "Relief Compass",
      team: "Team POV",
      college: "Dr. Ambedkar Institute of Technology",
      tech: "React.js, Tailwind, Firebase",
      github: "https://github.com/Karthikeyan1508/crisis-connect",
      live: "https://code-fury-submission.vercel.app/",
      color: "var(--accent-turquoise)",
      theme: "turquoise"
    }
  ];

  const appWinners = [
    {
      title: "WINNERS",
      project: "Rescue Ring",
      team: "Night Owls",
      college: "Dayanand Sagar Institute of Technology",
      tech: "Flutter, Dart, Firebase",
      github: "https://github.com/chetanr250/disaster-ready",
      color: "var(--accent-gold)",
      theme: "gold"
    },
    {
      title: "RUNNERS",
      project: "ResQAids",
      team: "Widget Wizards",
      college: "Dr. Ambedkar Institute of Technology",
      tech: "Flutter, Dart, Google API",
      github: "https://github.com/aryanmajhi75/Widget-Wizards---Codefury-Hackathon",
      color: "var(--accent-turquoise)",
      theme: "turquoise"
    }
  ];

  return (
    <section id="past">
      <div className="container">
        <div className="section-header">
          <h2>Past Winners</h2>
        </div>

        <p 
          style={{ 
            textAlign: 'center', 
            marginTop: '-1rem', 
            marginBottom: '3rem',
            fontSize: '1.1rem',
            color: 'var(--gainsboro)'
          }}
        >
          HALL OF FAME: CodeFury High Scores and Repositories
        </p>

        {/* WEB DEVELOPMENT SECTION */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 
            style={{ 
              fontFamily: '"Press Start 2P", monospace', 
              fontSize: '0.8rem', 
              color: 'var(--accent-purple)',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}
          >
            [ WEB DEVELOPMENT TRACK ]
          </h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {webWinners.map((winner, idx) => (
              <div 
                key={idx}
                className={`pixel-box ${winner.theme}`}
                style={{
                  border: '4px solid var(--border-color)',
                  backgroundColor: 'rgba(23, 15, 30, 0.95)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem 1.5rem',
                  boxShadow: `6px 6px 0px 0px ${winner.color}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span 
                    style={{ 
                      fontFamily: '"Press Start 2P", monospace', 
                      fontSize: '0.65rem', 
                      color: winner.color,
                      border: `2px solid ${winner.color}`,
                      padding: '4px 8px',
                      backgroundColor: 'rgba(255,255,255,0.03)'
                    }}
                  >
                    {winner.title}
                  </span>
                  <Trophy size={20} color={winner.color} />
                </div>

                <div 
                  style={{ 
                    fontFamily: '"Press Start 2P", monospace', 
                    fontSize: '0.85rem', 
                    color: 'var(--accent-lime)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {winner.project}
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-white)', marginBottom: '1rem' }}>
                  Team: {winner.team}
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--gainsboro)', marginBottom: '0.75rem', flexGrow: 1 }}>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginBottom: '4px' }}>COLLEGE:</span>
                  {winner.college}
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', marginBottom: '2rem' }}>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginBottom: '4px' }}>TECH STACK:</span>
                  {winner.tech}
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a 
                    href={winner.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pixel-btn outline"
                    style={{ flex: 1, fontSize: '0.55rem', gap: '6px' }}
                  >
                    <Github size={12} /> REPOSITORY
                  </a>
                  {winner.live && (
                    <a 
                      href={winner.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pixel-btn lime"
                      style={{ flex: 1, fontSize: '0.55rem', gap: '6px' }}
                    >
                      <ExternalLink size={12} /> LIVE DEMO
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE APP DEVELOPMENT SECTION */}
        <div>
          <h3 
            style={{ 
              fontFamily: '"Press Start 2P", monospace', 
              fontSize: '0.8rem', 
              color: 'var(--accent-purple)',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}
          >
            [ MOBILE APP DEV TRACK ]
          </h3>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            {appWinners.map((winner, idx) => (
              <div 
                key={idx}
                className={`pixel-box ${winner.theme}`}
                style={{
                  border: '4px solid var(--border-color)',
                  backgroundColor: 'rgba(23, 15, 30, 0.95)',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem 1.5rem',
                  boxShadow: `6px 6px 0px 0px ${winner.color}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span 
                    style={{ 
                      fontFamily: '"Press Start 2P", monospace', 
                      fontSize: '0.65rem', 
                      color: winner.color,
                      border: `2px solid ${winner.color}`,
                      padding: '4px 8px',
                      backgroundColor: 'rgba(255,255,255,0.03)'
                    }}
                  >
                    {winner.title}
                  </span>
                  <Trophy size={20} color={winner.color} />
                </div>

                <div 
                  style={{ 
                    fontFamily: '"Press Start 2P", monospace', 
                    fontSize: '0.85rem', 
                    color: 'var(--accent-lime)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {winner.project}
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-white)', marginBottom: '1rem' }}>
                  Team: {winner.team}
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--gainsboro)', marginBottom: '0.75rem', flexGrow: 1 }}>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginBottom: '4px' }}>COLLEGE:</span>
                  {winner.college}
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--accent-purple)', marginBottom: '2rem' }}>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginBottom: '4px' }}>TECH STACK:</span>
                  {winner.tech}
                </div>

                {/* Card Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a 
                    href={winner.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="pixel-btn outline"
                    style={{ flex: 1, fontSize: '0.55rem', gap: '6px' }}
                  >
                    <Github size={12} /> REPOSITORY
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PastWinners;
