import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Aikita - bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/20 dark:to-black py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5"></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-8">
              <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Legal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Kebijakan
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-2">
                Privasi
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda
            </p>
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Terakhir diperbarui: 23 September 2024
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">

              {/* Section 1: Informasi yang Kami Kumpulkan */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span>Informasi yang Kami Kumpulkan</span>
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    Aikita mengumpulkan informasi untuk memberikan layanan yang lebih baik kepada pengguna kami.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informasi yang Anda Berikan</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span><strong>Email & Kontak:</strong> Saat mendaftar newsletter atau menghubungi kami</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span><strong>Review & Rating:</strong> Feedback yang Anda berikan untuk AI tools</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Informasi Otomatis</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span><strong>Data Penggunaan:</strong> Halaman yang dikunjungi dan interaksi</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span><strong>Cookies:</strong> Data untuk meningkatkan pengalaman browsing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Penggunaan Informasi */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span>Bagaimana Kami Menggunakan Informasi</span>
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">Menyediakan dan memelihara layanan Aikita</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">Mengirim newsletter dan update AI tools terbaru</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">Memberikan dukungan pelanggan</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">Menganalisis penggunaan untuk meningkatkan layanan</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300">Melindungi keamanan platform</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Keamanan & Cookies */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <span>Keamanan Data</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <svg className="w-4 h-4 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Enkripsi data saat transmisi (SSL/TLS)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-4 h-4 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Akses terbatas pada informasi pribadi</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <svg className="w-4 h-4 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">Monitoring sistem secara berkala</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span>Cookies & Analytics</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Kami menggunakan Google Analytics dan cookies untuk meningkatkan pengalaman Anda.
                    </p>
                    <Link
                      href="/cookies-policy"
                      className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors text-sm"
                    >
                      <span>Lihat Kebijakan Cookies</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* Section 4: Hak Anda & Kontak */}
              <Card className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 border-cyan-200 dark:border-cyan-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Hak Anda & Cara Menghubungi Kami
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hak Privasi Anda</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">Akses & koreksi data pribadi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">Penghapusan informasi pribadi</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">Berhenti berlangganan newsletter</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hubungi Kami</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                          <a href="mailto:admin@aikita.id" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors text-sm">
                            admin@aikita.id
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">Jakarta, Indonesia</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                      Kami berkomitmen melindungi privasi Anda. Jika ada pertanyaan tentang kebijakan ini,
                      jangan ragu untuk menghubungi kami.
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}