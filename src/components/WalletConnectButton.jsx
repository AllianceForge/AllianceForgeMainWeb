// src/components/WalletConnectButton.jsx - THIS IS THE REACT WAY

import React, { useEffect, useState } from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const WalletConnectButton = () => {
  // State to manage connection status and account
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  // Initialize WalletConnect connector outside of useEffect if you want it persistent
  // or within useEffect with proper cleanup
  const connector = new WalletConnect({
    bridge: "https://bridge.walletconnect.org",
    qrcodeModal: QRCodeModal,
  });

  // Handle connection logic
  const connectWallet = async () => {
    try {
      if (!connector.connected) {
        await connector.createSession(); // use await for async operations
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      // Handle UI feedback for error
    }
  };

  useEffect(() => {
    // Event listeners should be set up inside useEffect
    // and cleaned up when the component unmounts

    if (connector.connected) {
      setIsConnected(true);
      setAccount(connector.accounts[0]);
    }

    connector.on("connect", (error, payload) => {
      if (error) {
        console.error("Connection error:", error);
        setIsConnected(false);
        setAccount(null);
        return;
      }
      console.log("Connected:", payload);
      setIsConnected(true);
      setAccount(payload.accounts[0]); // assuming single account
    });

    connector.on("disconnect", (error, payload) => {
      if (error) {
        console.error("Disconnection error:", error);
        return;
      }
      console.log("Disconnected:", payload);
      setIsConnected(false);
      setAccount(null);
    });

    // Cleanup function for event listeners
    return () => {
      connector.off("connect");
      connector.off("disconnect");
    };
  }, [connector]); // Dependency array: re-run if connector changes (though it's static here)

  return (
    <button
      onClick={connectWallet}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" // Example styling
    >
      {isConnected ? `Connected: ${account ? account.substring(0, 6) + "..." : "..."}` : "Connect Wallet"}
    </button>
  );
};

export default WalletConnectButton;
