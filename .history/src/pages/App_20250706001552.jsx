import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Marketplace from './components/Marketplace';
import WhitepaperModal from "./components/WhitepaperModal";
import video from './assets/video3.mp4';
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const ForgenomicsSection = React.lazy(() => import('./components/ForgenomicsSection'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const WalletConnectButton = React.lazy(() => import('./components/WalletConnectButton'));

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
                      <ForgenomicsSection />
                    </div>
                    <div id="faq">
                      <FAQ />
                    </div>
                  </div>
                }
              />
              <Route path="/whitepaperModal" element={<Whitepaper />} />
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
};


export default App;
// Note: The `showFeature` flag can be used to conditionally render components or sections in the future.
// Note: The `showFeature` and `showMarketplace` flags can be used to conditionally render components or sections in the future.
// For example, you can wrap the Marketplace route in a conditional check if needed.
