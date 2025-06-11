
import React from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { House, Users } from 'lucide-react';

const RoleSelection = () => {
  const { setUserRole } = useWallet();

  const handleRoleSelect = (role: 'landlord' | 'tenant') => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Role</h2>
          <p className="text-purple-200">Select how you want to use MonadRent</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={() => handleRoleSelect('landlord')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center">
                <House className="w-8 h-8 text-red-400" />
              </div>
              <CardTitle className="text-white">Landlord</CardTitle>
              <CardDescription className="text-purple-200">
                List and manage your properties on the blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-purple-200 space-y-2 mb-6">
                <li>• Create NFT-verified property listings</li>
                <li>• Manage rental agreements with smart contracts</li>
                <li>• Receive secure payments in MONAD tokens</li>
                <li>• Track property performance and analytics</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelect('landlord')}
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
              >
                Continue as Landlord
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer" onClick={() => handleRoleSelect('tenant')}>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-white">Tenant</CardTitle>
              <CardDescription className="text-purple-200">
                Find and rent verified properties with confidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-purple-200 space-y-2 mb-6">
                <li>• Browse NFT-verified property listings</li>
                <li>• Secure rentals with smart contract protection</li>
                <li>• Make payments with MONAD tokens</li>
                <li>• Access transparent rental agreements</li>
              </ul>
              <Button 
                onClick={() => handleRoleSelect('tenant')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
