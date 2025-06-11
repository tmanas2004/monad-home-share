
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { house, users } from 'lucide-react';

const RoleSelection = () => {
  const { setUserRole } = useWallet();

  const handleRoleSelect = (role: 'landlord' | 'tenant') => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to MonadRent</h1>
          <p className="text-xl text-purple-200">Choose your role to get started</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <house className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Landlord</CardTitle>
              <CardDescription className="text-purple-200">
                List your properties and earn from rentals
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-purple-100 mb-6 space-y-2">
                <li>• Create property NFTs with Pinata IPFS</li>
                <li>• Set rental prices and terms</li>
                <li>• Manage bookings and payments</li>
                <li>• Track rental income</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelect('landlord')}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                Continue as Landlord
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Tenant</CardTitle>
              <CardDescription className="text-purple-200">
                Find and book amazing properties
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <ul className="text-purple-100 mb-6 space-y-2">
                <li>• Browse verified properties</li>
                <li>• Secure blockchain payments</li>
                <li>• Rate and review properties</li>
                <li>• Manage your bookings</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelect('tenant')}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Continue as Tenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
