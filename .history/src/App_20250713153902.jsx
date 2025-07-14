import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Marketplace from './components/Marketplace';
import video from './assets/video3.mp4';

// Lazy-load sections and modals
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const ForgenomicsSection = React.lazy(() => import('./components/ForgenomicsSection.jsx'));
const FAQSection = React.lazy(() => import("./components/FAQSection.jsx"));
const WalletConnectButton = React.lazy(() => import('./components/WalletConnectButton'));

// Import the modals
const ForgenomicsModal = React.lazy(() => import('./components/ForgenomicsModal.jsx'));
const FAQModal = React.lazy(() => import('./components/FAQModal.jsx'));

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // State to manage the visibility of the modals
  const [isForgenomicsModalOpen, setIsForgenomicsModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

  // State to manage the visibility of the WalletConnectButton
  const [isWalletVisible] = useState(false); // Change to 'true' to show it

  // Functions to open and close the modals
  const openForgenomicsModal = () => setIsForgenomicsModalOpen(true);
  const closeForgenomicsModal = () => setIsForgenomicsModalOpen(false);

  const openFaqModal = () => setIsFaqModalOpen(true);
  const closeFaqModal = () => setIsFaqModalOpen(false);

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
        {/* Pass the functions to the Navbar so it can open the modals */}
        <Navbar
          openForgenomicsModal={openForgenomicsModal}
          openFaqModal={openFaqModal}
        />
        
        {/* Conditionally render the WalletConnectButton based on its state */}
        {isWalletVisible && (
          <div className="fixed top-4 left-4 z-20">
            <Suspense fallback={<p className="text-white text-center mt-4">Loading Wallet...</p>}>
              <WalletConnectButton />
            </Suspense>
          </div>
        )}

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
                    {/* Pass openForgenomicsModal to ForgenomicsSection */}
                    <div id="forgenomics">
                      <ForgenomicsSection openForgenomicsModal={openForgenomicsModal} />
                    </div>
                    <div id="faq">
                      <FAQSection />
                    </div>
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

        {/* Render the modals conditionally at the root level */}
        {isForgenomicsModalOpen && (
          <Suspense fallback={<p>Loading Forgenomics...</p>}>
            <ForgenomicsModal onClose={closeForgenomicsModal} />
          </Suspense>
        )}
        {isFaqModalOpen && (
          <Suspense fallback={<p>Loading FAQ...</p>}>
            <FAQModal onClose={closeFaqModal} />
          </Suspense>
        )}
      </div>
    </Router>
  );
};

export default App;
