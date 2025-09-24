import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Cookies",
  description: "Kebijakan cookies Aikita - bagaimana kami menggunakan cookies untuk meningkatkan pengalaman pengguna",
};

export default function CookiesPolicyPage() {
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm7 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-5 4.5h4c0 1.1-.9 2-2 2s-2-.9-2-2z"/>
              </svg>
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Legal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Kebijakan
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-2">
                Cookies
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Bagaimana kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda
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

              {/* Section 1: Apa itu Cookies */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                    <span>Apa itu Cookies?</span>
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-500/20">
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      <strong>Cookies adalah file teks kecil yang disimpan di perangkat Anda</strong><br />
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                        Memungkinkan website mengingat preferensi dan tindakan Anda untuk pengalaman yang lebih baik
                      </span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mengingat Preferensi</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Theme mode, bahasa, dan pengaturan lainnya
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Meningkatkan Performa</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Loading lebih cepat dan pengalaman yang optimal
                      </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics & Insights</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Memahami penggunaan untuk meningkatkan layanan
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Jenis Cookies */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <span>Jenis Cookies yang Kami Gunakan</span>
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6">
                    {/* Functional Cookies */}
                    <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-500/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cookies Fungsional</h3>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs px-3 py-1 rounded-full font-medium">Diperlukan</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>theme-preference</strong> - Mode terang/gelap</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>compareList</strong> - Tools perbandingan</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>user-preferences</strong> - Pengaturan umum</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>session-token</strong> - Keamanan sesi</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-lg border border-blue-200 dark:border-blue-500/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cookies Analytics</h3>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full font-medium">Opsional</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Google Analytics</strong> - _ga, _ga_*, _gid</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Page Views</strong> - Halaman populer</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>User Journey</strong> - Alur navigasi</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Performance</strong> - Kecepatan loading</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preference Cookies */}
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-lg border border-purple-200 dark:border-purple-500/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cookies Preferensi</h3>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs px-3 py-1 rounded-full font-medium">Enhancing</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Tools Favorit</strong> - Tools yang ditandai</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Search History</strong> - Riwayat pencarian</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>View Preferences</strong> - Cara tampil konten</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <span className="text-purple-500 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm"><strong>Language</strong> - Preferensi bahasa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Durasi & Mengelola */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                      </div>
                      <span>Durasi Penyimpanan</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Session Cookies</span>
                        <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Sementara</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Preferensi Theme</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">1 tahun</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Compare List</span>
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">30 hari</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Google Analytics</span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded">2 tahun</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">User Preferences</span>
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs px-2 py-1 rounded">6 bulan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <span>Mengelola Cookies</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg text-center">
                        <svg className="w-6 h-6 text-blue-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Chrome</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Settings → Privacy</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg text-center">
                        <svg className="w-6 h-6 text-orange-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Firefox</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Privacy & Security</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg text-center">
                        <svg className="w-6 h-6 text-gray-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Safari</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Preferences → Privacy</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg text-center">
                        <svg className="w-6 h-6 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Edge</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Site permissions</p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-500/20">
                      <p className="text-yellow-800 dark:text-yellow-300 text-xs text-center">
                        💡 <strong>Tips:</strong> Izinkan cookies fungsional untuk pengalaman optimal
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 4: Google Analytics & Contact */}
              <Card className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 border-cyan-200 dark:border-cyan-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Google Analytics & Hubungi Kami
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Google Analytics</h3>
                      </div>
                      <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                        <p>Kami menggunakan Google Analytics untuk:</p>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span>Menganalisis tren penggunaan situs</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span>Memahami preferensi konten pengguna</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span>Meningkatkan performa dan UX</span>
                          </div>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                            → Opt-out dari Google Analytics
                          </a>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hubungi Kami</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <a href="mailto:admin@aikita.id" className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 transition-colors text-sm">
                              admin@aikita.id
                            </a>
                          </div>
                          <div className="flex items-center space-x-3">
                            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Jakarta, Indonesia</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">Subject: Pertanyaan Cookies</span>
                          </div>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                          <p className="text-purple-800 dark:text-purple-300 text-xs">
                            <strong>💡 Rekomendasi:</strong> Izinkan cookies fungsional dan preferensi untuk pengalaman optimal.
                            Analytics cookies opsional tanpa mengganggu fungsi utama.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Kebijakan cookies ini dapat berubah sewaktu-waktu untuk mencerminkan perubahan praktik kami.
                      Baca juga <Link href="/privacy-policy" className="text-cyan-600 dark:text-cyan-400 hover:underline">Kebijakan Privasi</Link>
                      dan <Link href="/terms-of-service" className="text-cyan-600 dark:text-cyan-400 hover:underline">Syarat & Ketentuan</Link> kami.
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