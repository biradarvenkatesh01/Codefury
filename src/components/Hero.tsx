import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const targetDate = new Date('2025-08-22T18:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isCompleted: false
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const padZero = (num: number) => String(num).padStart(2, '0');

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8rem 1.5rem 4rem 1.5rem',
        textAlign: 'center',
        overflow: 'hidden',
        borderBottom: '8px solid var(--border-color)',
        backgroundColor: '#170f1e'
      }}
    >
      {/* 3D Cyberpunk Grid Overlay */}
      <div className="grid-container">
        <div className="grid-floor"></div>
      </div>

      <div style={{ zIndex: 2, maxWidth: '900px', width: '100%' }}>
        {/* Presenting Org */}
        <p
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '0.75rem',
            color: 'var(--accent-lime)',
            letterSpacing: '1px',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 0px #000'
          }}
        >
          &lt; IEEE UVCE COMPUTER SOCIETY PRESENTS /&gt;
        </p>

        {/* Heading */}
        <h1
          style={{
            fontSize: '3.5rem',
            color: 'var(--accent-turquoise)',
            marginBottom: '1rem',
            textShadow: '6px 6px 0px #000, 0 0 10px rgba(64, 221, 255, 0.4)',
            lineHeight: '1.2'
          }}
          className="hero-title"
        >
          CODEFURY 9.0
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '0.85rem',
            color: 'var(--accent-purple)',
            marginBottom: '2rem',
            textShadow: '2px 2px 0px #000'
          }}
        >
          "FURY IN CODE, READY TO EXPLODE"
        </p>

        {/* Category & Powering Partner */}
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(0,0,0,0.4)',
            border: '2px dashed var(--accent-slate)',
            padding: '1rem 2rem',
            marginBottom: '3rem'
          }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-white)', fontWeight: 'bold' }}>
            Annual National-Level Hackathon
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '0.25rem' }}>
            Powered by <span style={{ color: 'var(--accent-lime)' }}>ART PARK I-Hub @ IISc</span>
          </p>
          <p style={{ color: 'var(--accent-gold)', marginTop: '0.5rem', fontFamily: '"Press Start 2P", monospace', fontSize: '0.65rem' }}>
            22nd, 23rd & 24th August 2025
          </p>
        </div>

        {/* Countdown Timer */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '0.7rem',
              color: 'var(--text-gray)',
              marginBottom: '1rem'
            }}
          >
            {timeLeft.isCompleted ? '--- TRANSMISSION COMPLETE ---' : '--- COUNTDOWN TO SHOWDOWN ---'}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {[
              { label: 'DAYS', val: padZero(timeLeft.days) },
              { label: 'HRS', val: padZero(timeLeft.hours) },
              { label: 'MINS', val: padZero(timeLeft.minutes) },
              { label: 'SECS', val: padZero(timeLeft.seconds) },
            ].map((cell, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(23, 15, 30, 0.9)',
                  border: '4px solid var(--border-color)',
                  boxShadow: '4px 4px 0px 0px var(--accent-slate)',
                  padding: '1rem',
                  minWidth: '90px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '1.5rem',
                    color: 'var(--accent-turquoise)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {cell.val}
                </div>
                <div
                  style={{
                    color: 'var(--text-gray)',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '0.55rem'
                  }}
                >
                  {cell.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Closed Box (Styled like retro GAME OVER screen) */}
        <div
          className="pixel-box lime"
          style={{
            maxWidth: '650px',
            margin: '0 auto 4rem auto',
            border: '4px solid var(--border-color)',
            backgroundColor: 'rgba(17, 10, 22, 0.95)',
            textAlign: 'center'
          }}
        >
          <h3
            style={{
              color: '#FF4444',
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '1.25rem',
              marginBottom: '1rem',
              animation: 'blink 1s steps(2, start) infinite'
            }}
          >
            &gt;&gt;&gt; REGISTRATIONS CLOSED &lt;&lt;&lt;
          </h3>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--gainsboro)',
              lineHeight: '1.6',
              fontFamily: '"Share Tech Mono", monospace'
            }}
          >
            Registrations for CodeFury 9.0 closed on 21st August 2025, 4:00 PM.
            <br />
            <span style={{ color: 'var(--accent-lime)', fontFamily: '"Press Start 2P", monospace', fontSize: '0.75rem', display: 'inline-block', marginTop: '0.75rem' }}>
              SEE YOU AT CODEFURY 10.0!
            </span>
          </p>
        </div>

        {/* Co-Presenters Logos & Social Links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <p style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.6rem', color: 'var(--text-gray)' }}>
            ASSOCIATED ORGANIZATIONS
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="https://www.instagram.com/ieeeuvce"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                gap: '0.5rem',
                color: 'var(--text-white)'
              }}
              className="logo-link"
            >
              <img
                src="/assets/ieee-logo.png"
                alt="IEEE UVCE Logo"
                style={{
                  height: '60px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '5px',
                  border: '3px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--border-color)',
                  imageRendering: 'pixelated'
                }}
              />
              <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem' }}>IEEE UVCE</span>
            </a>
            <a
              href="https://www.instagram.com/ieee.uvce.cs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                gap: '0.5rem',
                color: 'var(--text-white)'
              }}
              className="logo-link"
            >
              <img
                src="/assets/cs-logo.png"
                alt="IEEE UVCE CS Logo"
                style={{
                  height: '60px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '5px',
                  border: '3px solid var(--border-color)',
                  boxShadow: '3px 3px 0px var(--border-color)',
                  imageRendering: 'pixelated'
                }}
              />
              <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '0.5rem' }}>IEEE UVCE CS</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          to { visibility: hidden; }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem !important;
          }
        }
        .logo-link:hover img {
          border-color: var(--accent-turquoise) !important;
          box-shadow: 3px 3px 0px var(--accent-turquoise) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
