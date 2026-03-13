'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg"
          role="dialog"
          aria-label="Cookie consent banner"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Cookie Consent</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies to enhance your browsing experience and analyze site traffic. By
                  clicking "Accept", you consent to our use of cookies.{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

