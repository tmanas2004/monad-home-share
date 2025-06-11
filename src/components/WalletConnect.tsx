
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <img 
            src="https://phantom.app/img/phantom-logo.png" 
            alt="Phantom" 
            className="w-8 h-8"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          Connect Phantom Wallet
        </CardTitle>
        <CardDescription>
          Connect your Phantom wallet to access MonadRent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={connect} 
          disabled={connecting}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default WalletConnect;
