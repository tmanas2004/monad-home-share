
import React, { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const KYCForm = () => {
  const { userRole, setHasCompletedKYC } = useWallet();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    idDocument: null as File | null,
    proofOfAddress: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const uploadToPinata = async (file: File): Promise<string> => {
    // Simulate Pinata upload - in real implementation, you'd use Pinata API
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://gateway.pinata.cloud/ipfs/QmExample${Date.now()}`);
      }, 1000);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.idDocument || !formData.proofOfAddress) {
        throw new Error('Please upload both required documents');
      }

      // Upload documents to Pinata IPFS
      console.log('Uploading documents to Pinata IPFS...');
      const idDocumentHash = await uploadToPinata(formData.idDocument);
      const proofOfAddressHash = await uploadToPinata(formData.proofOfAddress);

      console.log('Documents uploaded:', { idDocumentHash, proofOfAddressHash });

      // In a real implementation, you would:
      // 1. Store KYC data securely
      // 2. Initiate verification process
      // 3. Create blockchain record of KYC status

      setHasCompletedKYC(true);
      
      toast({
        title: "KYC Submitted Successfully!",
        description: "Your documents have been uploaded to IPFS and are being reviewed.",
      });

    } catch (error) {
      console.error('KYC submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit KYC. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Upload className="w-6 h-6" />
            Complete Your KYC Verification
          </CardTitle>
          <CardDescription className="text-purple-200">
            {userRole === 'landlord' 
              ? 'Verify your identity to list properties and receive payments securely.'
              : 'Complete KYC verification to book properties and make secure payments.'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-white">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="text-white">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Enter your address"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="idDocument" className="text-white">Government ID Document *</Label>
                <Input
                  id="idDocument"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'idDocument')}
                  className="bg-white/5 border-white/20 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:mr-4"
                  required
                />
                <p className="text-sm text-purple-200">Upload passport, driver's license, or national ID</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="proofOfAddress" className="text-white">Proof of Address *</Label>
                <Input
                  id="proofOfAddress"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                  className="bg-white/5 border-white/20 text-white file:bg-purple-600 file:text-white file:border-0 file:rounded file:mr-4"
                  required
                />
                <p className="text-sm text-purple-200">Upload utility bill, bank statement, or lease agreement</p>
              </div>
            </div>

            <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
              <h4 className="text-blue-300 font-medium mb-2">Secure IPFS Storage</h4>
              <p className="text-blue-200 text-sm">
                Your documents will be encrypted and stored on IPFS via Pinata, ensuring maximum security and decentralization.
              </p>
            </div>

            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              {loading ? 'Uploading to IPFS...' : 'Submit KYC Verification'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default KYCForm;
