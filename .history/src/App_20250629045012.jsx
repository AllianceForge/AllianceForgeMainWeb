import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './components/Marketplace';
import NotFound from './components/NotFound';
import video from './assets/video3.mp4';
import './App.css';


// Lazy-load sections
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const FeatureSection = React.lazy(() => import('./components/FeatureSection'));
const ForgenomicsSection = React.lazy(() => import('./components/ForgenomicsSection'));
const RoadMapSection = React.lazy(() => import('./components/RoadMap'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const WalletConnectButton = React.lazy(() => import('./components/WalletConnectButton'));

// Control visibility here
const showFeature = false;
const showRoadmap = false;
const showMarketplace = false;

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-screen fixed object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-50'}`}
        />

        {/* Navbar and WalletConnectButton */}
        <Navbar />
        <div className="fixed top-4 left-4 z-20">
          <Suspense fallback={<p className="text-white text-center mt-4">Loading Wallet...</p>}>
          {false && <WalletConnectButton />}
          </Suspense>
        </div>

        {/* Main content */}
        <main className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <span className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <div className="max-w-7xl mx-auto pt-20 px-6">
                    <div id="home">
                      <HeroSection />
                    </div>
                    {showFeature && (
                      <div id="feature">
                        <FeatureSection />
                      </div>
                    )}
                    <div id="forgenomics">
                      <ForgenomicsSection />
                    </div>
                    {showRoadmap && (
                      <div id="roadmap">
                        <RoadMapSection />
                      </div>
                    )}
                    <div id="faq">
                      <FAQ />
                    </div>
                  </div>
                }
              />
              {showMarketplace && <Route path="/marketplace" element={<Marketplace />} />}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={<p className="text-white text-center mt-4">Loading Footer...</p>}>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
};

export default App;