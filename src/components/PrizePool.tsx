import React from 'react';
import { Trophy, Award, Gift } from 'lucide-react';

const PrizePool: React.FC = () => {
  const prizeTiers = [
    {
      place: "1ST PLACE",
      amount: "₹20,000",
      color: "var(--accent-gold)",
      theme: "gold",
      icon: <Trophy size={40} color="var(--accent-gold)" />
    },
    {
      place: "2ND PLACE",
      amount: "₹15,000",
      color: "var(--accent-turquoise)",
      theme: "turquoise",
      icon: <Trophy size={36} color="var(--accent-turquoise)" />
    },
    {
      place: "3RD PLACE",
      amount: "₹10,000",
      color: "var(--accent-orange)",
      theme: "orange",
      icon: <Trophy size={32} color="var(--accent-orange)" />
    },
    {
      place: "CONSOLATION",
      amount: "₹15,000",
      color: "var(--accent-purple)",
      theme: "purple",
      icon: <Gift size={32} color="var(--accent-purple)" />
    }
  ];

  return (
    <section id="prizes" style={{ backgroundColor: '#170f1e' }}>
      <div className="container">
        <div className="section-header">
          <h2>Prize Pool</h2>
        </div>

        {/* Total Prize Pool Banner */}
        <div 
          className="pixel-box gold"
          style={{
            maxWidth: '800px',
            margin: '0 auto 4rem auto',
            textAlign: 'center',
            backgroundColor: 'rgba(23, 15, 30, 0.95)',
            border: '4px solid var(--border-color)',
            padding: '2rem'
          }}
        >
          <p 
            style={{ 
              fontFamily: '"Press Start 2P", monospace', 
              fontSize: '0.75rem', 
              color: 'var(--text-gray)',
              marginBottom: '1rem' 
            }}
          >
            TOTAL CASH TREASURE
          </p>
          <h3 
            style={{ 
              fontSize: '3rem', 
              color: 'var(--accent-gold)', 
              textShadow: '4px 4px 0px #000',
              fontFamily: '"Press Start 2P", monospace',
              letterSpacing: '2px',
              margin: 0
            }}
            className="prize-total"
          >
            &#8377;60,000
          </h3>
        </div>

        {/* Tiers Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {prizeTiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`pixel-box ${tier.theme}`}
              style={{
                border: '4px solid var(--border-color)',
                backgroundColor: 'rgba(23, 15, 30, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: `6px 6px 0px 0px ${tier.color}`
              }}
            >
              {/* Prize Icon */}
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  border: '4px solid var(--border-color)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  boxShadow: '3px 3px 0px var(--border-color)'
                }}
              >
                {tier.icon}
              </div>

              <h3 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace', 
                  fontSize: '0.8rem',
                  color: tier.color,
                  marginBottom: '1rem'
                }}
              >
                {tier.place}
              </h3>

              <div 
                style={{ 
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '1.4rem', 
                  fontWeight: 'bold', 
                  color: 'var(--text-white)'
                }}
              >
                {tier.amount}
              </div>
            </div>
          ))}
        </div>

        {/* Incentive Box */}
        <div 
          className="pixel-box lime"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '1.5rem 2rem',
            backgroundColor: 'rgba(17, 10, 22, 0.95)',
            border: '4px solid var(--border-color)'
          }}
        >
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            <Award size={24} color="var(--accent-lime)" />
            <p 
              style={{ 
                fontFamily: '"Press Start 2P", monospace', 
                fontSize: '0.65rem', 
                color: 'var(--accent-lime)',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              "Certificate of Participation will Be Provided For Everyone!"
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .prize-total {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PrizePool;
