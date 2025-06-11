
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Help & FAQ</h1>
          <p className="text-xl text-purple-200">
            Find answers to common questions about MonadRent
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-purple-200">
              Everything you need to know about using MonadRent
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="wallet" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  How do I connect my Phantom wallet?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  Click the "Connect Phantom Wallet" button and follow the prompts. 
                  Make sure you have the Phantom wallet extension installed in your browser.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kyc" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  What is KYC and why is it required?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  KYC (Know Your Customer) is a verification process that helps ensure 
                  platform security. You need to complete KYC to book properties or list 
                  properties for rent. Your documents are securely stored on IPFS.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="nft" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  How do NFTs verify property ownership?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  Each property on MonadRent is backed by an NFT that contains verified 
                  ownership documents and property details. This NFT is stored on IPFS 
                  via Pinata, ensuring immutable proof of ownership.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  How does the booking process work?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  After connecting your wallet and completing KYC, you can book properties 
                  by clicking "Book This Property". A smart contract will be deployed to 
                  handle the rental agreement and payments automatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fees" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  What are the fees for using MonadRent?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  MonadRent charges minimal platform fees. You'll only pay blockchain 
                  transaction fees (gas fees) for smart contract interactions. 
                  No hidden fees or excessive commissions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="landlord" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-purple-200">
                  How can I list my property as a landlord?
                </AccordionTrigger>
                <AccordionContent className="text-purple-200">
                  Connect your wallet, select "Landlord" role, complete KYC verification, 
                  and then you can list your properties with NFT-backed ownership verification.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Need More Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-200">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="space-y-2 text-purple-200">
              <p>📧 Email: support@monadrent.com</p>
              <p>💬 Live Chat: Available 24/7</p>
              <p>📖 Documentation: docs.monadrent.com</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
