import React, { useState, useEffect } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import PropertyCard from './PropertyCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  nftHash: string;
  landlord: string;
  available: boolean;
  bedrooms: number;
  bathrooms: number;
}

const PropertyBrowser = () => {
  const { userRole, hasCompletedKYC, connected } = useWallet();
  const { toast } = useToast();
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Mock data for demonstration
  useEffect(() => {
    const mockProperties: Property[] = [
      {
        id: '1',
        title: 'Modern Downtown Apartment',
        description: 'Beautiful 2-bedroom apartment in the heart of the city with stunning skyline views.',
        price: 150,
        location: 'Downtown, Monad City',
        images: ['/placeholder.svg'],
        nftHash: 'QmNfT123abc456def789ghi012jkl345mno678pqr901stu234vwx',
        landlord: '0x742d35Cc6634C0532925a3b8D1EEFF8',
        available: true,
        bedrooms: 2,
        bathrooms: 2,
      },
      {
        id: '2',
        title: 'Cozy Suburban House',
        description: 'Family-friendly 3-bedroom house with garden and garage in quiet neighborhood.',
        price: 200,
        location: 'Suburban Hills, Monad',
        images: ['/placeholder.svg'],
        nftHash: 'QmHouse789xyz123def456ghi789jkl012mno345pqr678stu901',
        landlord: '0x123d35Cc6634C0532925a3b8D1EEFF9',
        available: true,
        bedrooms: 3,
        bathrooms: 2,
      },
      {
        id: '3',
        title: 'Luxury Penthouse Suite',
        description: 'Exclusive penthouse with panoramic city views, private terrace, and premium amenities.',
        price: 500,
        location: 'Elite District, Monad',
        images: ['/placeholder.svg'],
        nftHash: 'QmPenthouse456abc789def012ghi345jkl678mno901pqr234stu',
        landlord: '0x456d35Cc6634C0532925a3b8D1EEFF1',
        available: false,
        bedrooms: 4,
        bathrooms: 3,
      },
    ];
    setProperties(mockProperties);
  }, []);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewProperty = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleBookProperty = (property: Property) => {
    if (!connected) {
      toast({
        title: "Wallet Connection Required",
        description: "Please connect your Phantom wallet to book properties.",
        variant: "destructive",
      });
      return;
    }

    if (!hasCompletedKYC) {
      toast({
        title: "KYC Required",
        description: "Please complete your KYC verification to book properties.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Initiated",
      description: `Booking process started for ${property.title}. Smart contract deployment in progress...`,
    });
    
    console.log('Booking property:', property);
  };

  if (selectedProperty) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Button 
          variant="outline" 
          onClick={() => setSelectedProperty(null)}
          className="mb-6 text-white border-white/20 hover:bg-white/10"
        >
          ← Back to Properties
        </Button>
        
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <div className="h-64 overflow-hidden rounded-t-lg">
            <img 
              src={selectedProperty.images[0] || '/placeholder.svg'} 
              alt={selectedProperty.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-white">{selectedProperty.title}</CardTitle>
                <CardDescription className="text-purple-200 text-lg">
                  {selectedProperty.location}
                </CardDescription>
              </div>
              <Badge variant={selectedProperty.available ? "default" : "secondary"}>
                {selectedProperty.available ? "Available" : "Booked"}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">{selectedProperty.bedrooms}</div>
                <div className="text-purple-200">Bedrooms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{selectedProperty.bathrooms}</div>
                <div className="text-purple-200">Bathrooms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{selectedProperty.price}</div>
                <div className="text-purple-200">MONAD/night</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">NFT</div>
                <div className="text-purple-200">Verified</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-purple-200">{selectedProperty.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Property NFT</h3>
              <div className="bg-black/20 rounded-lg p-3">
                <code className="text-green-400 text-sm break-all">{selectedProperty.nftHash}</code>
              </div>
              <p className="text-sm text-purple-200 mt-2">
                This property is backed by an NFT stored on IPFS via Pinata, ensuring ownership verification.
              </p>
            </div>
            
            {!connected && selectedProperty.available && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-300 text-center">
                  Connect your Phantom wallet to book this property
                </p>
              </div>
            )}
            
            {connected && userRole === 'tenant' && selectedProperty.available && (
              <Button 
                onClick={() => handleBookProperty(selectedProperty)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                {hasCompletedKYC ? 'Book This Property' : 'Complete KYC to Book'}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Available Properties</h2>
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />
          {!connected && (
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              Connect wallet to book properties
            </Badge>
          )}
          {connected && !hasCompletedKYC && userRole === 'tenant' && (
            <Badge variant="outline" className="text-yellow-400 border-yellow-400">
              Complete KYC to book properties
            </Badge>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onView={handleViewProperty}
            onBook={connected && userRole === 'tenant' ? handleBookProperty : undefined}
          />
        ))}
      </div>
      
      {filteredProperties.length === 0 && (
        <div className="text-center text-purple-200 mt-12">
          <p className="text-xl">No properties found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyBrowser;
