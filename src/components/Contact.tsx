import React from 'react';
import { Phone, Mail, MessageSquare, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const contacts = [
    {
      role: "CHAIRPERSON, CS IEEE UVCE",
      name: "Yashaswini C Rao",
      phone: "+91 99999 11111",
      email: "idk@ieee.org",
      whatsapp: "https://wa.me/919999999999",
      theme: "turquoise"
    },
    {
      role: "VICE CHAIRPERSON, CS IEEE UVCE",
      name: "Nikhil Hegde",
      phone: "+91 99999 11111",
      email: "idk@gmail.com",
      whatsapp: "https://wa.me/919999999999",
      theme: "lime"
    }
    
  ];

  return (
    <section id="contact" style={{ backgroundColor: '#170f1e' }}>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
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
          Have questions or encountered a bug in the code? Contact our developers / support unit!
        </p>

        {/* Organizer Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '900px',
            margin: '0 auto 4rem auto'
          }}
        >
          {contacts.map((contact, idx) => (
            <div 
              key={idx}
              className={`pixel-box ${contact.theme}`}
              style={{
                border: '4px solid var(--border-color)',
                backgroundColor: 'rgba(23, 15, 30, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem 1.5rem',
              }}
            >
              <span 
                style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '0.45rem',
                  color: 'var(--text-gray)',
                  marginBottom: '0.5rem',
                  display: 'block'
                }}
              >
                {contact.role}
              </span>
              <h3 
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-white)',
                  marginBottom: '1.5rem',
                  fontFamily: '"Press Start 2P", monospace'
                }}
              >
                {contact.name}
              </h3>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={16} color="var(--accent-purple)" />
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--gainsboro)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    {contact.phone}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={16} color="var(--accent-purple)" />
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--gainsboro)', textDecoration: 'none', fontSize: '0.95rem' }}>
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`pixel-btn ${contact.theme}`}
                style={{ width: '100%', fontSize: '0.65rem' }}
              >
                <MessageSquare size={14} /> CHAT ON WHATSAPP
              </a>
            </div>
          ))}
        </div>

        {/* Social Logs Box */}
        <div 
          className="pixel-box purple"
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'rgba(23, 15, 30, 0.95)',
            border: '4px solid var(--border-color)',
            padding: '2rem'
          }}
        >
          <h3 
            style={{ 
              fontFamily: '"Press Start 2P", monospace', 
              fontSize: '0.75rem', 
              color: 'var(--accent-purple)',
              marginBottom: '1.5rem' 
            }}
          >
            [ CONNECT TO COMMUNITY NETWORK ]
          </h3>

          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem', 
              flexWrap: 'wrap' 
            }}
          >
            <a 
              href="https://www.instagram.com/ieee.uvce.cs/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-btn outline"
              style={{ gap: '0.5rem', fontSize: '0.6rem' }}
            >
              <Instagram size={14} /> INSTAGRAM
            </a>
            <a 
              href="https://www.facebook.com/Ieee.uvce.cs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="pixel-btn outline"
              style={{ gap: '0.5rem', fontSize: '0.6rem' }}
            >
              <Facebook size={14} /> FACEBOOK
            </a>
            <a 
              href="mailto:cs.uvce.ieee@gmail.com" 
              className="pixel-btn outline"
              style={{ gap: '0.5rem', fontSize: '0.6rem' }}
            >
              <Mail size={14} /> GENERAL INQUIRY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
