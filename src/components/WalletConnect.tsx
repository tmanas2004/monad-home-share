
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';

const WalletConnect = () => {
  const { connected, connecting, publicKey, connect, disconnect } = useWallet();

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <span className="text-sm text-muted-foreground">Connected:</span>
          <span className="ml-2 font-mono text-sm">
            {publicKey.slice(0, 6)}...{publicKey.slice(-4)}
          </span>
        </div>
        <Button variant="outline" onClick={disconnect}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button 
      onClick={connect} 
      disabled={connecting}
      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
    >
      {connecting ? 'Connecting...' : 'Connect Phantom Wallet'}
    </Button>
  );
};

export default WalletConnect;
