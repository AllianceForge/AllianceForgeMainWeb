import React from 'react';
import ForgenomicsSection from './ForgenomicsSection.jsx'; // Adjust path if needed
import './App.css'; // Optional for global styles
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Marketplace from './components/Marketplace';
import video from './assets/video3.mp4';
import fForenomicssection from @./components/whii// Lazy-load sections
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const ForgenomicsSection = React.lazy(() => import('./components/ForgenomicsSection'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const WalletConnectButton = React.lazy(() => import('./components/WalletConnectButton'));

// Control visibility here
const showFeature = false;
const showRoadmap = false;
const showMarketplace = true;

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
          className={`w-full h-screen fixed object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-50'
          }`}
        />

        {/* Navbar and WalletConnectButton */}
        <Navbar />
        <div className="fixed top-4 left-4 z-20">
          <Suspense fallback={<p className="text-white text-center mt-4">Loading Wallet...</p>}>
            <WalletConnectButton />
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
                    <div id="forgenomics">
                      <ForgenomicsSection />function App() {
                     return (
                    <div class "¿-auto">
                    <h1 className="text-4xl font-bold text-center text-white py-8">
                     Welcome to Alliance Forge
                    </h1>
                    <ForgenomicsSection />
                    </div>
                    <div id="faq">
                      <FAQ />
                    </div>
                }
              />
              <Route path="/marketplace" element={<Marketplace />} />
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
