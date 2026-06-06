import React, { useState } from 'react';
import { Smartphone, Globe } from 'lucide-react';

const Tracks: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(0);

  const tracks = [
    {
      id: 0,
      title: "WEB DEV TRACK",
      desc: "Build feature-rich, high-performance web applications using modern web technologies. Focus on UI/UX, scalability, and solving the target problem statement.",
      icon: <Globe size={32} />
    },
    {
      id: 1,
      title: "MOBILE APP TRACK",
      desc: "Develop smooth and responsive mobile apps (Android or iOS). Focus on user experience, platform native features, accessibility, and clean design.",
      icon: <Smartphone size={32} />
    }
  ];

  return (
    <section id="tracks">
      <div className="container">
        <div className="section-header">
          <h2>Select Track</h2>
        </div>

        <p 
          style={{ 
            textAlign: 'center', 
            maxWidth: '700px', 
            margin: '-1rem auto 3rem auto',
            fontSize: '1.1rem',
            color: 'var(--gainsboro)',
            lineHeight: '1.6'
          }}
        >
          Participants are presented with <span style={{ color: 'var(--accent-turquoise)' }}>two distinct tracks</span>, 
          each with a unique problem statement. Select your expertise and get ready!
        </p>

        {/* Character Selection Screen Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}
        >
          {tracks.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <div
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`pixel-box ${isSelected ? 'turquoise' : ''}`}
                style={{
                  cursor: 'pointer',
                  backgroundColor: isSelected ? 'rgba(64, 221, 255, 0.08)' : 'rgba(23, 15, 30, 0.95)',
                  transform: isSelected ? 'translate(-4px, -4px)' : 'none',
                  boxShadow: isSelected ? '8px 8px 0px var(--accent-turquoise)' : '4px 4px 0px var(--border-color)',
                  border: '4px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  transition: 'all 0.15s ease'
                }}
              >
                {/* Character/Icon Slot */}
                <div 
                  style={{
                    width: '70px',
                    height: '70px',
                    border: '4px solid var(--border-color)',
                    backgroundColor: isSelected ? 'var(--accent-turquoise)' : 'var(--bg-black)',
                    color: isSelected ? 'var(--bg-black)' : 'var(--accent-turquoise)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '3px 3px 0px var(--border-color)'
                  }}
                >
                  {track.icon}
                </div>

                <h3 
                  style={{ 
                    fontSize: '0.85rem', 
                    color: isSelected ? 'var(--accent-turquoise)' : 'var(--text-white)',
                    marginBottom: '1rem',
                    fontFamily: '"Press Start 2P", monospace'
                  }}
                >
                  {track.title}
                </h3>

                <p 
                  style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--text-gray)', 
                    lineHeight: '1.5',
                    flexGrow: 1
                  }}
                >
                  {track.desc}
                </p>

                {/* Select state indicator */}
                <div 
                  style={{ 
                    marginTop: '1.5rem',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '0.55rem',
                    color: isSelected ? 'var(--accent-lime)' : 'var(--text-gray)',
                    animation: isSelected ? 'blink 0.8s steps(2, start) infinite' : 'none'
                  }}
                >
                  {isSelected ? '[ ACTIVE TRACK ]' : '[ SELECT ]'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Info & Game Rules Box */}
        <div 
          className="pixel-box purple"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            border: '4px solid var(--border-color)',
            backgroundColor: 'rgba(23, 15, 30, 0.95)'
          }}
        >
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              marginBottom: '2rem',
              borderBottom: '2px dashed var(--accent-purple)',
              paddingBottom: '1.5rem'
            }}
          >
            <div>
              <span 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.55rem', 
                  color: 'var(--accent-purple)', 
                  display: 'block', 
                  marginBottom: '0.5rem' 
                }}
              >
                TEAM SIZE
              </span>
              <span style={{ fontSize: '1.4rem', color: 'var(--text-white)', fontWeight: 'bold' }}>
                1–4 Members
              </span>
            </div>
            <div>
              <span 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.55rem', 
                  color: 'var(--accent-purple)', 
                  display: 'block', 
                  marginBottom: '0.5rem' 
                }}
              >
                REGISTRATION FEES
              </span>
              <span style={{ fontSize: '1.4rem', color: 'var(--accent-lime)', fontWeight: 'bold' }}>
                &#8377;120 <span style={{ fontSize: '0.9rem', color: 'var(--text-gray)', fontWeight: 'normal' }}>per head</span>
              </span>
            </div>
            <div>
              <span 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.55rem', 
                  color: 'var(--accent-purple)', 
                  display: 'block', 
                  marginBottom: '0.5rem' 
                }}
              >
                TECHNOLOGY STACK
              </span>
              <span style={{ fontSize: '1.4rem', color: 'var(--text-white)', fontWeight: 'bold' }}>
                No Restrictions
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p 
              style={{ 
                fontFamily: '"Press Start 2P", monospace', 
                fontSize: '0.65rem', 
                color: 'var(--accent-gold)', 
                lineHeight: '1.8',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              "Select your theme, assemble your team, and start building impactful solutions!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
