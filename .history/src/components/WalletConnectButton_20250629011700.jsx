import React, { useEffect, useState, useRef } from 'react';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const WalletConnectButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);
  const connectorRef = useRef(null);

  useEffect(() => {
    if (!connectorRef.current) {
      connectorRef.current = new WalletConnect({
        bridge: "https://bridge.walletconnect.org",
        qrcodeModal: QRCodeModal,
        chainId: 25,
        rpc: { 25: "https://evm.cronos.org" },
      });
    }
    const connector = connectorRef.current;

    if (connector.connected) {
      setIsConnected(true);
      setAccount(connector.accounts[0]);
    }

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

    return () => {
      connector.off("connect", handleConnect);
      connector.off("disconnect", handleDisconnect);
      if (connector.connected) {
        connector.killSession();
      }
    };
  }, []);

  const connectWallet = async () => {
    const connector = connectorRef.current;
    if (!isConnected && !loading && connector) {
      setLoading(true);
      try {
        if (!connector.connected) {
          await Promise.race([
            connector.createSession(),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Connection timed out")), 10000))
          ]);
        }
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
    </div>
  );
};

export default WalletConnectButton;