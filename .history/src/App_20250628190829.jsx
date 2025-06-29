import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './components/Marketplace';
import NotFound from './components/NotFound';
import video from './assets/video3.mp4';

// ✅ Lazy-load heavy components to improve performance
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const FeatureSection = React.lazy(() => import("./components/FeatureSection"));
const ForgenomicsSection = React.lazy(() => import("./components/ForgenomicsSection"));
const RoadMapSection = React.lazy(() => import("./components/RoadMap"));
const FAQ = React.lazy(() => import("./components/FAQ"));
const WalletConnectButton = React.lazy(() => import("./components/WalletConnectButton"));

const App = () => {
  const [appReady, setAppReady] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // ✅ Set appReady immediately, no delay
  useEffect(() => {
    setAppReady(true);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* ✅ Show video immediately with loading fallback */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-screen fixed object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-50'}`} // Partial opacity during load
        >
          <source src={video} type="video/mp4" />
          {/* Fallback if video fails to load */}
          <div className="flex items-center justify-center w-full h-full bg-gray-900">
            <span className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
          </div>
        </video>

        {/* ✅ Render UI as soon as appReady, no white screen */}
        {appReady && (
          <>
            <Navbar />
            <div className="fixed top-4 left-4 z-20"> {/* Position button top-left */}
              <Suspense fallback={<p className="text-white text-center mt-4">Loading Wallet...</p>}>
                <WalletConnectButton />
              </Suspense>
            </div>
            <main className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <span className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
                </div>
              }>
                <Routes>
                  <Route path="/" element={
                    <div className="max-w-7xl mx-auto pt-20 px-6">
                      <div id="home"><HeroSection /></div>
                      <div id="feature"><FeatureSection /></div>
                      <div id="forgenomics"><ForgenomicsSection /></div>
                      <div id="roadmap"><RoadMapSection /></div>
                      <div id="faq"><FAQ /></div>
                    </div>
                  } />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;