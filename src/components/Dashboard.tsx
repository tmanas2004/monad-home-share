
import React, { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PropertyBrowser from './PropertyBrowser';
import KYCForm from './KYCForm';

const Dashboard = () => {
  const { userRole, hasCompletedKYC } = useWallet();
  const [currentView, setCurrentView] = useState<'browser' | 'kyc' | 'dashboard'>('dashboard');

  if (currentView === 'browser') {
    return <PropertyBrowser />;
  }

  if (currentView === 'kyc') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setCurrentView('dashboard')}
            className="mb-6 ml-6 text-white border-white/20 hover:bg-white/10"
          >
            ← Back to Dashboard
          </Button>
          <KYCForm />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome, {userRole?.charAt(0).toUpperCase() + userRole?.slice(1)}!
        </h2>
        <p className="text-purple-200">
          {userRole === 'landlord' 
            ? 'Manage your properties and track earnings on the Monad blockchain.'
            : 'Discover amazing properties and book your next stay.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Browse Properties</CardTitle>
            <CardDescription className="text-purple-200">
              Explore all available rental properties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setCurrentView('browser')}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              View Properties
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">KYC Verification</CardTitle>
            <CardDescription className="text-purple-200">
              {hasCompletedKYC ? 'Your KYC is verified' : 'Complete your identity verification'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setCurrentView('kyc')}
              variant={hasCompletedKYC ? "outline" : "default"}
              className={hasCompletedKYC 
                ? "w-full border-green-400 text-green-400 hover:bg-green-400/10" 
                : "w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              }
            >
              {hasCompletedKYC ? 'View KYC Status' : 'Complete KYC'}
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">
              {userRole === 'landlord' ? 'My Properties' : 'My Bookings'}
            </CardTitle>
            <CardDescription className="text-purple-200">
              {userRole === 'landlord' 
                ? 'Manage your listed properties'
                : 'View and manage your bookings'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
              disabled
            >
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {userRole === 'landlord' && (
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white">List New Property</CardTitle>
            <CardDescription className="text-purple-200">
              Add a new property to the platform with NFT verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              disabled
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Add Property (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30">
        <CardHeader>
          <CardTitle className="text-white">🚀 Monad Blockchain Integration</CardTitle>
          <CardDescription className="text-purple-200">
            Your rental platform powered by cutting-edge blockchain technology
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">NFT</div>
              <div className="text-purple-200">Property Verification</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">IPFS</div>
              <div className="text-purple-200">Pinata Storage</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">MONAD</div>
              <div className="text-purple-200">Secure Payments</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
