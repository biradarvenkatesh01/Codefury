import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Tracks from './components/Tracks.tsx';
import PrizePool from './components/PrizePool.tsx';
import Timeline from './components/Timeline.tsx';
import CodeFuryWall from './components/CodeFuryWall.tsx';
import PastWinners from './components/PastWinners.tsx';
import Sponsors from './components/Sponsors.tsx';
import Game from './components/Game.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import BackToTopButton from './components/BackToTopButton.tsx';
import Footer from './components/Footer.tsx';

// Initialize Google Analytics G-89VJD7YWZN
ReactGA.initialize('G-89VJD7YWZN');

const App: React.FC = () => {
  useEffect(() => {
    // Send initial pageview event
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header hud navigation */}
      <Header />

      {/* Main scrolling viewport content */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Tracks />
        <PrizePool />
        <Timeline />
        <CodeFuryWall />
        <PastWinners />
        <Sponsors />
        <Game />
        <FAQ />
        <Contact />
      </main>

      {/* Back to top scroll button */}
      <BackToTopButton />

      {/* Footer credits */}
      <Footer />
    </div>
  );
};

export default App;
