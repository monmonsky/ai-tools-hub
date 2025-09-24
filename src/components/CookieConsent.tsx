"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { setCookieConsent, shouldShowConsentBanner } from "@/lib/cookies";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if we should show the consent banner
    if (shouldShowConsentBanner()) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent('all');
    setIsVisible(false);
    console.log('✅ All cookies accepted');
  };

  const handleAcceptEssential = () => {
    setCookieConsent('essential');
    setIsVisible(false);
    console.log('✅ Essential cookies only');
  };

  const handleRejectAll = () => {
    setCookieConsent('rejected');
    setIsVisible(false);
    console.log('❌ All non-essential cookies rejected');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" />

      {/* Cookie Consent Card */}
      <Card className="relative w-full max-w-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-cyan-200 dark:border-cyan-500/30 shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-4 duration-500">
        {/* Header with Cookie Icon */}
        <div className="flex items-center justify-center pt-6 pb-2">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mb-2 relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-40"></div>
            <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm7 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-5 4.5h4c0 1.1-.9 2-2 2s-2-.9-2-2z"/>
            </svg>
          </div>
        </div>

        <CardContent className="space-y-6 px-6 pb-6">
          {/* Title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Kami Menggunakan Cookies 🍪
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Untuk memberikan pengalaman terbaik dan menganalisis penggunaan situs
            </p>
          </div>

          {/* Basic Info */}
          {!showDetails && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-500/20">
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                  Kami menggunakan cookies untuk mengingat preferensi Anda, menganalisis traffic,
                  dan memberikan konten yang relevan. Data Anda aman dan tidak dijual ke pihak ketiga.
                </p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Terima Semua 🚀
                </Button>
                <Button
                  onClick={handleAcceptEssential}
                  variant="outline"
                  className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-400 py-3 rounded-lg transition-all duration-300"
                >
                  Hanya Penting
                </Button>
              </div>

              {/* Detail Toggle */}
              <div className="text-center">
                <button
                  onClick={() => setShowDetails(true)}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium transition-colors duration-300 underline-offset-2 hover:underline"
                >
                  Lihat Detail & Pengaturan
                </button>
              </div>
            </div>
          )}

          {/* Detailed Info */}
          {showDetails && (
            <div className="space-y-4">
              <div className="grid gap-4">
                {/* Essential Cookies */}
                <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border border-green-200 dark:border-green-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>Cookies Penting</span>
                    </h4>
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full font-medium">
                      Wajib
                    </span>
                  </div>
                  <p className="text-green-800 dark:text-green-300 text-sm">
                    Diperlukan untuk fungsi dasar: theme, navigation, keamanan
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                      </svg>
                      <span>Analytics & Performa</span>
                    </h4>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full font-medium">
                      Opsional
                    </span>
                  </div>
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    Google Analytics untuk memahami penggunaan dan meningkatkan layanan
                  </p>
                </div>

                {/* Preference Cookies */}
                <div className="bg-purple-50 dark:bg-purple-900/10 p-4 rounded-lg border border-purple-200 dark:border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                      <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>Personalisasi</span>
                    </h4>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full font-medium">
                      Enhancing
                    </span>
                  </div>
                  <p className="text-purple-800 dark:text-purple-300 text-sm">
                    Tools favorit, riwayat pencarian, preferensi tampilan
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ✅ Terima Semua
                </Button>
                <Button
                  onClick={handleAcceptEssential}
                  variant="outline"
                  className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-400 py-3 rounded-lg transition-all duration-300"
                >
                  ⚙️ Hanya Penting
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 border-2 border-red-300 dark:border-red-600 hover:border-red-500 dark:hover:border-red-400 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 py-3 rounded-lg transition-all duration-300"
                >
                  ❌ Tolak Semua
                </Button>
              </div>

              {/* Back Button */}
              <div className="text-center">
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors duration-300"
                >
                  ← Kembali
                </button>
              </div>
            </div>
          )}

          {/* Footer Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <Link href="/privacy-policy" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Kebijakan Privasi
              </Link>
              <span>•</span>
              <Link href="/cookies-policy" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Kebijakan Cookies
              </Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 group"
            aria-label="Tutup"
          >
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </CardContent>
      </Card>
    </div>
  );
}