import React, { useEffect, useState } from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const WalletConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // ✅ Inicializar WalletConnect solo una vez
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal,
    chainId: 25, // Cronos Mainnet
    rpc: {
      25: "https://evm.cronos.org", // RPC para Cronos Blockchain
    },
  });

  const connectWallet = async () => {
    try {
      if (!connector) {
        console.error("Error: WalletConnect no está inicializado.");
        return;
      }

      if (!connector.connected) {
        await connector.createSession();
      }
    } catch (error) {
      console.error("Error al conectar la wallet:", error);
    }
  };

  useEffect(() => {
    if (connector.connected) {
      setIsConnected(true);
      setAccount(connector.accounts[0]);
    }

    // ✅ Manejo de eventos correctamente
    connector.on("connect", (error, payload) => {
      if (error) {
        console.error("Error en la conexión:", error);
        setIsConnected(false);
        setAccount(null);
        return;
      }
      console.log("Wallet conectada:", payload);
      setIsConnected(true);
      setAccount(payload.accounts[0]);
    });

    connector.on("disconnect", () => {
      console.log("Wallet desconectada");
      setIsConnected(false);
      setAccount(null);
    });

    // ✅ Limpiar eventos cuando el componente se desmonte
    return () => {
      connector.off("connect");
      connector.off("disconnect");
    };
  }, []); // 🔥 Eliminé `connector` de dependencias para evitar re-renders innecesarios

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={connectWallet}
        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all sm:px-4 sm:py-2 sm:text-base md:text-sm lg:px-5 lg:py-3 lg:text-base xl:px-6 xl:py-4 xl:text-lg"
      >
        {isConnected ? `Connected: ${account ? account.substring(0, 6) + "..." : "..."}` : "Connect Wallet"}
      </button>

      {/* ✅ Wrapping QRCodeModal to adjust size */}
      {connector.connected && (
        <div className="max-w-xs max-h-xs p-4 bg-gray-900 rounded-lg">
          <QRCodeModal />
        </div>
      )}
    </div>
  );
};

export default WalletConnectButton;
