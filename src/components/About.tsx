import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginTop: '1rem'
          }}
        >
          {/* IEEE UVCE CS Terminal Card */}
          <div 
            className="pixel-box"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden'
            }}
          >
            {/* Terminal Window Header Bar */}
            <div 
              style={{
                backgroundColor: 'var(--border-color)',
                padding: '0.5rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '4px solid var(--border-color)',
              }}
            >
              <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.65rem', color: 'var(--accent-turquoise)' }}>
                IEEE_UVCE_CS.sh
              </span>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-lime)', display: 'inline-block' }}></span>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', display: 'inline-block' }}></span>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'red', display: 'inline-block' }}></span>
              </div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--gainsboro)', marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
                IEEE UVCE is the student branch of IEEE at the University of Visvesvaraya College of Engineering, operating under the IEEE Bangalore Section. Established in 2001, it has grown into a vibrant platform for students to explore innovation, research, and leadership through national and global IEEE events, technical interest groups, and collaborative initiatives.
                <br /><br />
                The IEEE UVCE Computer Society is a dedicated technical chapter focused on fostering a culture of innovation and problem-solving. It regularly conducts coding competitions, hackathons, workshops, and tech talks addressing real-world challenges.
              </p>

              {/* Terminal Footer/Metrics */}
              <div 
                style={{
                  marginTop: 'auto',
                  borderTop: '2px dashed var(--accent-slate)',
                  paddingTop: '1rem',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1.1rem', color: 'var(--accent-lime)' }}>
                    500+
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.55rem', marginTop: '0.25rem' }}>
                    Members
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1.1rem', color: 'var(--accent-lime)' }}>
                    25+
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.55rem', marginTop: '0.25rem' }}>
                    Years
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About CodeFury Terminal Card */}
          <div 
            className="pixel-box lime"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden'
            }}
          >
            {/* Terminal Window Header Bar */}
            <div 
              style={{
                backgroundColor: 'var(--border-color)',
                padding: '0.5rem 1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '4px solid var(--border-color)',
              }}
            >
              <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.65rem', color: 'var(--accent-lime)' }}>
                About_CodeFury_9.0
              </span>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-turquoise)', display: 'inline-block' }}></span>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--accent-gold)', display: 'inline-block' }}></span>
                <span style={{ width: '8px', height: '8px', backgroundColor: 'red', display: 'inline-block' }}></span>
              </div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <p style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--gainsboro)', marginBottom: '1.5rem' }}>
                CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in programming and innovation. This 24-hour intensive coding marathon challenges participants to build revolutionary solutions to real-world problems.
                <br /><br />
                Open to students from all colleges and universities, CodeFury has grown to become one of the most prestigious hackathons in the region, attracting participants from across the country.
              </p>

              {/* Terminal Footer/Metrics */}
              <div 
                style={{
                  marginTop: 'auto',
                  borderTop: '2px dashed var(--accent-lime)',
                  paddingTop: '1rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  textAlign: 'center'
                }}
              >
                <div>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1rem', color: 'var(--accent-turquoise)' }}>
                    500+
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginTop: '0.25rem' }}>
                    Participants
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1rem', color: 'var(--accent-turquoise)' }}>
                    24 HRS
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginTop: '0.25rem' }}>
                    Non-stop
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1rem', color: 'var(--accent-turquoise)' }}>
                    &#8377;60K
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginTop: '0.25rem' }}>
                    Prize Pool
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '1rem', color: 'var(--accent-turquoise)' }}>
                    100%
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem', marginTop: '0.25rem' }}>
                    Online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
