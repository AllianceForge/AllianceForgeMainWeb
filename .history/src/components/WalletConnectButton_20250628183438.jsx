import React, { useEffect, useState } from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const WalletConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    // Initialize WalletConnect only once
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
      qrcodeModal: QRCodeModal,
      chainId: 25,
      rpc: {
        25: "https://evm.cronos.org",
      },
    });

    // Handle existing session
    if (connector.connected) {
      setIsConnected(true);
      setAccount(connector.accounts[0]);
    }

    // Event handlers
    const handleConnect = (error, payload) => {
      if (error) {
        console.error("Connection error:", error);
        setLoading(false);
        setIsConnected(false);
        setAccount(null);
        return;
      }
      console.log("Wallet connected:", payload);
      setLoading(false);
      setIsConnected(true);
      setAccount(payload.accounts[0]);
    };

    const handleDisconnect = () => {
      console.log("Wallet disconnected");
      setIsConnected(false);
      setAccount(null);
    };

    connector.on("connect", handleConnect);
    connector.on("disconnect", handleDisconnect);

    // Cleanup
    return () => {
      connector.off("connect", handleConnect);
      connector.off("disconnect", handleDisconnect);
      if (connector.connected) {
        connector.killSession();
      }
    };
  }, []); // Empty deps array ensures one-time setup

  const connectWallet = async () => {
    if (!isConnected && !loading) {
      setLoading(true);
      try {
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org",
          qrcodeModal: QRCodeModal,
          chainId: 25,
          rpc: { 25: "https://evm.cronos.org" },
        });
        await connector.createSession();
      } catch (error) {
        console.error("Wallet connection error:", error);
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <p className="text-white text-center mt-4">Connecting to Wallet...</p>
      ) : (
        <button
          onClick={connectWallet}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-all sm:px-4 sm:py-2 sm:text-base md:text-sm lg:px-5 lg:py-3 lg:text-base xl:px-6 xl:py-4 xl:text-lg"
        >
          {isConnected
            ? `Connected: ${account ? account.substring(0, 6) + "..." : "..."}`
            : "Connect Wallet"}
        </button>
      )}
      {/* Optional: Show QR modal during connection (handled by QRCodeModal library) */}
    </div>
  );
};

export default WalletConnectButton;