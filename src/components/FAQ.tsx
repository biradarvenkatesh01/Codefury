import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqData = [
    {
      q: "Who can participate in CodeFury 8.0?",
      a: "Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible."
    },
    {
      q: "What is the team size limit?",
      a: "Teams can have 1-4 members. You can participate individually or form a team of up to 4 people. All team members must be students."
    },
    {
      q: "Is there any registration fee?",
      a: "Yes, the registration fee for CodeFury 8.0 is ₹120 per head."
    },
    {
      q: "What are the available tracks?",
      a: "Participants will choose from three themes, each with its own problem statement. Participants may opt to build a web or mobile application depending on their area of expertise and preference."
    },
    {
      q: "Are first-year students allowed to participate?",
      a: "Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering."
    },
    {
      q: "How do I submit my project?",
      a: "Project submission details will be shared with qualified participants after the preliminary round. Typically, you'll need to submit your code repository, demo video, and project documentation."
    },
    {
      q: "Is this completely an online hackathon?",
      a: "Yes, CodeFury 8.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually."
    },
    {
      q: "What happens after the 24-hour coding period?",
      a: "After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container" style={{ maxWidth: '850px' }}>
        <div className="section-header">
          <h2>FAQs</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`pixel-box ${isOpen ? 'turquoise' : ''}`}
                style={{
                  border: '4px solid var(--border-color)',
                  backgroundColor: 'rgba(23, 15, 30, 0.9)',
                  padding: 0,
                  boxShadow: isOpen ? '4px 4px 0px var(--accent-turquoise)' : '4px 4px 0px var(--border-color)',
                  transition: 'all 0.1s ease'
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'inherit'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color={isOpen ? 'var(--accent-turquoise)' : 'var(--text-gray)'} style={{ flexShrink: 0 }} />
                    <span 
                      style={{ 
                        fontFamily: '"Press Start 2P", monospace', 
                        fontSize: '0.6rem', 
                        lineHeight: '1.6',
                        color: isOpen ? 'var(--accent-turquoise)' : 'var(--text-white)'
                      }}
                    >
                      {faq.q}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={18} color="var(--accent-turquoise)" style={{ flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={18} color="var(--text-white)" style={{ flexShrink: 0 }} />
                  )}
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      borderTop: '2px dashed rgba(255,255,255,0.08)',
                      paddingTop: '1rem',
                      fontSize: '0.95rem',
                      color: 'var(--gainsboro)',
                      lineHeight: '1.6',
                      animation: 'slideDown 0.2s ease-out'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
