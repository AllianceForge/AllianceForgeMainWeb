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

  // ✅ Simulates smooth loading before UI appears
  useEffect(() => {
    setTimeout(() => setAppReady(true), 500);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* ✅ Lazy-loaded background video to prevent initial lag */}
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-screen fixed object-cover transition-opacity duration-700 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Render navbar only when app is ready */}
        {appReady && <Navbar />}

        {/* ✅ Lazy load main content */}
        <main className="relative z-10">
          <Suspense fallback={<p className="text-white text-center mt-10">Loading...</p>}>
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
          </Suspense>
        </main>

        {/* ✅ Lazy load WalletConnectButton */}
        <Suspense fallback={<p className="text-white text-center mt-4">Loading Wallet...</p>}>
          <WalletConnectButton />
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
