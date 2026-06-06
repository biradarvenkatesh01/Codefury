import React, { useEffect, useRef } from 'react';
import { Check, Flame } from 'lucide-react';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      level: 1,
      title: "Registration Opens",
      date: "August 1, 2025",
      desc: "Kickstart your CodeFury journey, form your dream team and register!",
      status: "CLEARED"
    },
    {
      level: 2,
      title: 'Workshop - "Git Ready, Set, Code"',
      date: "12th & 13th August 2025",
      desc: "A Pre-Codefury Web Dev Workshop.",
      link: "http://tinyurl.com/codefuryWeb",
      linkText: "Register for Workshop",
      status: "CLEARED"
    },
    {
      level: 3,
      title: "Mini Game Challenge",
      date: "Surprise Event",
      desc: "Participate in our surprise mini game & challenge to win exciting discounts on registration fees!",
      status: "CLEARED"
    },
    {
      level: 4,
      title: "Registration Closes",
      date: "August 21, 2025",
      desc: "Final call! Registrations were extended to 21st August 2025, 4:00 PM.",
      status: "CLEARED"
    },
    {
      level: 5,
      title: "CodeFury Round 1",
      date: "August 22 - 23, 2025",
      desc: "The 24-hour coding showdown begins [22nd 6:00 PM to 23rd 6:00 PM].",
      status: "CLEARED"
    },
    {
      level: 6,
      title: "CodeFury Round 2",
      date: "August 24, 2025",
      desc: "Top teams present their innovations to the jury [24th 10:00 AM onwards].",
      status: "CLEARED"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Start calculating scroll progress when section enters viewport
      const totalScrollable = sectionHeight - windowHeight;
      const scrolled = -rect.top;

      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      // Calculate horizontal translation limit
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslate = Math.max(0, trackWidth - viewportWidth + 80);

      const translateX = -progress * maxTranslate;
      track.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      id="timeline"
      style={{
        position: 'relative',
        height: '250vh', // Tall scrollable height to drive the horizontal scroll
        backgroundColor: 'var(--bg-black)',
        borderBottom: '4px solid var(--border-color)',
      }}
    >
      {/* Sticky container that remains pinned as the user scrolls vertically */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div className="section-header" style={{ marginBottom: '2rem', marginTop: '1rem', zIndex: 10 }}>
          <h2>Event Timeline</h2>
        </div>

        {/* Scroll Helper Marquee */}
        <div 
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            fontFamily: '"Press Start 2P", monospace',
            color: 'var(--accent-purple)',
            marginBottom: '3rem',
            zIndex: 10
          }}
        >
          &lt; SCROLL DOWN TO EXPLORE TIMELINE MAP &gt;
        </div>

        {/* Horizontal Timeline Track */}
        <div 
          ref={trackRef}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '4rem',
            padding: '0 15vw',
            position: 'relative',
            width: 'max-content',
            transition: 'transform 0.1s ease-out', // Smooth horizontal parallax transition
            willChange: 'transform',
            height: '400px'
          }}
        >
          {/* Horizontal connecting line (Level selection path) */}
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '8px',
              backgroundImage: 'linear-gradient(to right, var(--accent-slate) 40%, transparent 40%)',
              backgroundSize: '24px 8px',
              backgroundPosition: 'left center',
              zIndex: 0,
              transform: 'translateY(-50%)',
              border: '2px solid var(--border-color)'
            }}
          ></div>

          {/* Level Nodes and Cards */}
          {steps.map((step) => (
            <div 
              key={step.level}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
                width: '380px',
                flexShrink: 0
              }}
            >
              {/* Milestone Card - Positioned at top */}
              <div 
                className="pixel-box"
                style={{
                  width: '100%',
                  border: '4px solid var(--border-color)',
                  boxShadow: '4px 4px 0px var(--border-color)',
                  backgroundColor: 'rgba(23, 15, 30, 0.95)',
                  padding: '1.5rem',
                  marginBottom: '2.5rem',
                  position: 'relative'
                }}
              >
                {/* Clean status banner (Not distorted) */}
                <span 
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '0.5rem',
                    backgroundColor: 'rgba(172, 255, 47, 0.1)',
                    color: 'var(--accent-lime)',
                    padding: '3px 6px',
                    border: '2px solid var(--accent-lime)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Check size={10} /> {step.status}
                </span>

                <div 
                  style={{ 
                    fontFamily: '"Press Start 2P", monospace', 
                    fontSize: '0.65rem', 
                    color: 'var(--accent-gold)',
                    marginBottom: '0.75rem'
                  }}
                >
                  {step.date}
                </div>

                <h3 
                  style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--accent-turquoise)',
                    marginBottom: '0.75rem',
                    fontFamily: '"Press Start 2P", monospace',
                    paddingRight: '4.5rem'
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--gainsboro)', lineHeight: '1.4', margin: 0 }}>
                  {step.desc}
                </p>

                {step.link && (
                  <div style={{ marginTop: '1rem' }}>
                    <a 
                      href={step.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="pixel-btn"
                      style={{
                        fontSize: '0.55rem',
                        padding: '0.4rem 0.8rem'
                      }}
                    >
                      <Flame size={12} /> {step.linkText}
                    </a>
                  </div>
                )}
              </div>

              {/* Dotted path leading to node */}
              <div 
                style={{
                  width: '4px',
                  height: '24px',
                  borderLeft: '4px dashed var(--accent-lime)',
                  marginBottom: '0.5rem'
                }}
              ></div>

              {/* Node Point on the timeline path */}
              <div 
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: 'var(--bg-black)',
                  border: '4px solid var(--accent-lime)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '3px 3px 0px var(--border-color)',
                  color: 'var(--accent-lime)',
                  borderRadius: '50%',
                  zIndex: 2
                }}
              >
                <span style={{ fontSize: '0.4rem', fontFamily: '"Press Start 2P", monospace', display: 'block' }}>LVL</span>
                <span style={{ fontSize: '0.8rem', fontFamily: '"Press Start 2P", monospace', fontWeight: 'bold' }}>{step.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
