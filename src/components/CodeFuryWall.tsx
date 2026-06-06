import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CodeFuryWall: React.FC = () => {
  const images = [
    { src: '/assets/img1.png', alt: 'CodeFury Highlight 1' },
    { src: '/assets/img2.png', alt: 'CodeFury Highlight 2' },
    { src: '/assets/img3.png', alt: 'CodeFury Highlight 3' },
    { src: '/assets/img4.png', alt: 'CodeFury Highlight 4' },
    { src: '/assets/img5.png', alt: 'CodeFury Highlight 5' },
    { src: '/assets/img6.png', alt: 'CodeFury Highlight 6' },
    { src: '/assets/img7.png', alt: 'CodeFury Highlight 7' },
    { src: '/assets/img8.png', alt: 'CodeFury Highlight 8' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="wall" style={{ backgroundColor: '#170f1e' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="section-header">
          <h2>CodeFury Wall</h2>
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
          Relive the moments and look back at the highlights from our previous battles!
        </p>

        {/* Retro TV / Monitor Photo Frame */}
        <div 
          className="pixel-box"
          style={{
            border: '8px solid var(--border-color)',
            boxShadow: '8px 8px 0px var(--accent-slate)',
            backgroundColor: '#000',
            position: 'relative',
            padding: 0,
            overflow: 'hidden',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Photos */}
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              imageRendering: 'auto',
              transition: 'opacity 0.5s ease',
            }}
          />

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="pixel-btn"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '0.4rem',
              zIndex: 10,
              backgroundColor: 'var(--accent-slate)',
              color: '#000',
              border: '3px solid var(--border-color)'
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="pixel-btn"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '0.4rem',
              zIndex: 10,
              backgroundColor: 'var(--accent-slate)',
              color: '#000',
              border: '3px solid var(--border-color)'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators dot row */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '2rem'
          }}
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: '12px',
                height: '12px',
                border: '2px solid var(--border-color)',
                backgroundColor: currentIndex === idx ? 'var(--accent-lime)' : 'var(--bg-black)',
                boxShadow: currentIndex === idx ? '2px 2px 0px var(--border-color)' : 'none',
                cursor: 'pointer',
                transform: currentIndex === idx ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.1s ease',
                padding: 0
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeFuryWall;
