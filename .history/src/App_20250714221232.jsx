import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Marketplace from './components/Marketplace';
import video from './assets/video3.mp4';

// Carga diferida de secciones y modales
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const ForgenomicsSection = React.lazy(() => import('./components/ForgenomicsSection.jsx'));
// const FAQSection = React.lazy(() => import("./components/FAQSection.jsx")); // Comentado para eliminar la sección FAQ
const WalletConnectButton = React.lazy(() => import('./components/WalletConnectButton'));

// Importar los modales
const ForgenomicsModal = React.lazy(() => import('./components/ForgenomicsModal.jsx'));
const FAQModal = React.lazy(() => import('./components/FAQModal.jsx'));
const WhitepaperModal = React.lazy(() => import('./components/WhitepaperModal.jsx')); // Importar WhitepaperModal

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Estado para gestionar la visibilidad de los modales
  const [isForgenomicsModalOpen, setIsForgenomicsModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false); // Estado para WhitepaperModal

  // Estado para gestionar la visibilidad del WalletConnectButton
  const [isWalletVisible] = useState(false); // Cambiar a 'true' para mostrarlo

  // Funciones para abrir y cerrar los modales
  const openForgenomicsModal = () => setIsForgenomicsModalOpen(true);
  const closeForgenomicsModal = () => setIsForgenomicsModalOpen(false);
  
  const openFaqModal = () => setIsFaqModalOpen(true);
  const closeFaqModal = () => setIsFaqModalOpen(false);

  const openWhitepaperModal = () => setIsWhitepaperModalOpen(true); // Función para abrir WhitepaperModal
  const closeWhitepaperModal = () => setIsWhitepaperModalOpen(false); // Función para cerrar WhitepaperModal

  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Video de fondo */}
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

        {/* Barra de navegación y botón de conexión de billetera */}
        {/* Pasar todas las funciones de apertura de modal a la barra de navegación */}
        <Navbar
          openForgenomicsModal={openForgenomicsModal}
          openFaqModal={openFaqModal}
          openWhitepaperModal={openWhitepaperModal} // Pasar openWhitepaperModal
        />
        
        {/* Renderizar condicionalmente el WalletConnectButton según su estado */}
        {isWalletVisible && (
          <div className="fixed top-4 left-4 z-20">
            <Suspense fallback={<p className="text-white text-center mt-4">Cargando billetera...</p>}>
              <WalletConnectButton />
            </Suspense>
          </div>
        )}

        {/* Contenido principal */}
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
                    {/* Pasar openForgenomicsModal a ForgenomicsSection */}
                    <div id="forgenomics">
                      <ForgenomicsSection openForgenomicsModal={openForgenomicsModal} />
                    </div>
                    {/* La sección FAQSection ha sido eliminada/comentada aquí */}
                    {/*
                    <div id="faq">
                        <FAQSection openFaqModal={openFaqModal} />
                    </div>
                    */}
                  </div>
                }
              />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Pie de página */}
        <Suspense fallback={<p className="text-white text-center mt-4">Cargando pie de página...</p>}>
          <Footer />
        </Suspense>

        {/* Renderizar los modales condicionalmente en el nivel raíz */}
        {isForgenomicsModalOpen && (
          <Suspense fallback={<p>Cargando Forgenomics...</p>}>
            <ForgenomicsModal onClose={closeForgenomicsModal} />
          </Suspense>
        )}
        {isFaqModalOpen && (
          <Suspense fallback={<p>Cargando FAQ...</p>}>
            <FAQModal onClose={closeFaqModal} />
          </Suspense>
        )}
        {isWhitepaperModalOpen && ( // Renderizar condicionalmente WhitepaperModal
          <Suspense fallback={<p>Cargando Whitepaper...</p>}>
            <WhitepaperModal onClose={closeWhitepaperModal} />
          </Suspense>
        )}
      </div>
    </Router>
  );
};

export default App;
