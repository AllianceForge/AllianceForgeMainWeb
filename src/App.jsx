// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ForgenomicsSection from './components/ForgenomicsSection';
import RoadMapSection from './components/RoadMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Marketplace from './components/Marketplace';
import NotFound from './components/NotFound';
import WalletConnectButton from './components/WalletConnectButton.jsx';
import video from './assets/video3.mp4';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Background video */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-screen fixed object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* We pass WalletConnectButton as a 'child' to Navbar */}
        {/* This allows Navbar to decide where to render the button within itself */}
        <Navbar>
          <WalletConnectButton />
        </Navbar>

        {/* Main content */}
        <main className="relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-7xl mx-auto pt-20 px-6">
                  <div id="home">
                    <HeroSection />
                  </div>
                  <div id="feature">
                    <FeatureSection />
                  </div>
                  <div id="forgenomics">
                    <ForgenomicsSection />
                  </div>
                  <div id="roadmap">
                    <RoadMapSection />
                  </div>
                  <div id="faq">
                    <FAQ />
                  </div>
                </div>
              }
            />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;