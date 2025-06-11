
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import WalletConnect from '@/components/WalletConnect';
import RoleSelection from '@/components/RoleSelection';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const { connected, userRole } = useWallet();

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-white mb-4">
              MonadRent
            </h1>
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              The future of property rentals on the Monad blockchain. 
              Secure, transparent, and powered by NFT property verification.
            </p>
          </div>
          
          <div className="space-y-6">
            <WalletConnect />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">🏠</div>
                <h3 className="text-white font-semibold mb-2">NFT-Verified Properties</h3>
                <p className="text-purple-200 text-sm">Every property is backed by an NFT stored securely on IPFS</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-white font-semibold mb-2">Lightning Fast</h3>
                <p className="text-purple-200 text-sm">Powered by Monad's high-performance blockchain</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-white font-semibold mb-2">Secure & Trustless</h3>
                <p className="text-purple-200 text-sm">Smart contracts ensure secure and automated transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!userRole) {
    return <RoleSelection />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      <Dashboard />
    </div>
  );
};

export default Index;
