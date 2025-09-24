"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

interface NewsletterResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<NewsletterResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setResponse({
        success: false,
        message: 'Email harus diisi'
      });
      return;
    }

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setResponse(data);

      if (data.success) {
        setEmail(''); // Clear form on success
      }
    } catch (error) {
      setResponse({
        success: false,
        message: 'Terjadi kesalahan. Silakan coba lagi.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-cyan-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 border-cyan-200 dark:border-purple-500/20">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Berlangganan Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Dapatkan update AI tools terbaru, review mendalam, dan tips eksklusif langsung di inbox Anda
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 whitespace-nowrap"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Mengirim...</span>
                </div>
              ) : (
                'Berlangganan'
              )}
            </Button>
          </div>

          {response && (
            <div className={`flex items-center space-x-2 p-3 rounded-lg ${
              response.success
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {response.success ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm font-medium">{response.message}</span>
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Dengan berlangganan, Anda menyetujui{' '}
            <a href="/privacy-policy" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
              Kebijakan Privasi
            </a>{' '}
            dan{' '}
            <a href="/terms-of-service" className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
              Syarat Layanan
            </a>{' '}
            kami. Anda dapat berhenti berlangganan kapan saja.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-cyan-600 dark:text-cyan-400 text-sm">🔥</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Tools Terbaru</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-purple-600 dark:text-purple-400 text-sm">💡</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Tips Eksklusif</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-600 dark:text-green-400 text-sm">📊</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Review Mendalam</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}