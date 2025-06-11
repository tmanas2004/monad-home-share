
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import WalletConnect from '@/components/WalletConnect';
import RoleSelection from '@/components/RoleSelection';
import Navigation from '@/components/Navigation';
import Dashboard from '@/components/Dashboard';
import PropertyBrowser from '@/components/PropertyBrowser';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { connected, userRole } = useWallet();

  // Show property preview for non-connected users
  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Header with wallet connection */}
        <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">MonadRent</h1>
            <WalletConnect />
          </div>
        </nav>

        <div className="max-w-7xl mx-auto p-6">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white mb-4">
                MonadRent
              </h1>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                The future of property rentals on the Monad blockchain. 
                Secure, transparent, and powered by NFT property verification.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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

          {/* Property Preview Section */}
          <div className="mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Explore Available Properties</h2>
              <p className="text-purple-200 mb-6">Browse our collection of NFT-verified properties. Connect your wallet to book and manage rentals.</p>
            </div>
            <PropertyBrowser />
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
