
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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

interface PropertyCardProps {
  property: Property;
  onView: (property: Property) => void;
  onBook?: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onView, onBook }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.images[0] || '/placeholder.svg'} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={property.available ? "default" : "secondary"}>
            {property.available ? "Available" : "Booked"}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-white text-lg">{property.title}</CardTitle>
        <CardDescription className="text-purple-200">
          {property.location}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center text-purple-100">
          <span>{property.bedrooms} bed • {property.bathrooms} bath</span>
          <span className="font-bold text-white">{property.price} MONAD/night</span>
        </div>
        
        <p className="text-purple-200 text-sm line-clamp-2">{property.description}</p>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={() => onView(property)}
            className="flex-1 border-white/20 text-white hover:bg-white/10"
          >
            View Details
          </Button>
          {onBook && property.available && (
            <Button 
              onClick={() => onBook(property)}
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Book Now
            </Button>
          )}
        </div>
        
        <div className="text-xs text-purple-300">
          NFT: {property.nftHash.slice(0, 10)}...{property.nftHash.slice(-6)}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
