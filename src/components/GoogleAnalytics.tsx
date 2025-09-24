"use client";

import Script from 'next/script';
import { useEffect } from 'react';
import { getCookiePreferences } from '@/lib/cookies';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Initialize Google Analytics with consent mode
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      const preferences = getCookiePreferences();

      // Set initial consent state
      (window as any).gtag('consent', 'default', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
  }, []);

  return (
    <>
      {/* Google Analytics consent mode initialization */}
      <Script
        id="gtag-consent-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Initialize consent mode before GA loads
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });

            gtag('js', new Date());
          `,
        }}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-LVVL872DZ1`}
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'G-LVVL872DZ1', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}