import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan platform Aikita - direktori AI tools terlengkap Indonesia",
};

export default function TermsOfServicePage() {
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
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Legal</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Syarat &
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent ml-2">
                Ketentuan
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Aturan penggunaan platform Aikita untuk pengalaman yang aman dan nyaman
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

              {/* Section 1: Penerimaan & Layanan */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <span>Penerimaan Syarat & Layanan Kami</span>
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-cyan-200 dark:border-cyan-500/20">
                    <p className="text-gray-700 dark:text-gray-300 text-center">
                      <strong>Dengan menggunakan Aikita, Anda menyetujui syarat dan ketentuan ini.</strong><br />
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                        Jika tidak setuju, harap tidak menggunakan layanan kami.
                      </span>
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                        <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>Layanan Aikita</span>
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Direktori AI tools terlengkap Indonesia</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Review dan rating dari pengguna</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Perbandingan fitur dan harga tools</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Newsletter update AI tools terbaru</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                        <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Syarat Eligibilitas</span>
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Berusia minimal 13 tahun</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Memiliki kapasitas hukum yang sah</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Memberikan informasi yang akurat</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Tidak dilarang oleh hukum yang berlaku</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Penggunaan yang Diizinkan vs Dilarang */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <span>✅ Diizinkan</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Mencari dan membandingkan AI tools</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Memberikan review yang jujur dan konstruktif</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Berlangganan newsletter untuk update</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Menggunakan untuk keperluan bisnis atau pribadi</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                      </div>
                      <span>❌ Dilarang</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Mengirim spam atau konten berbahaya</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Memberikan informasi palsu atau menyesatkan</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Menggunakan bot tanpa izin</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">Melanggar hak kekayaan intelektual</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 3: Konten & Kekayaan Intelektual */}
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <span>Konten & Hak Kekayaan Intelektual</span>
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Konten Pengguna</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Review dan rating yang Anda berikan</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Harus asli dan tidak melanggar hak pihak ketiga</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>Memberikan lisensi kepada Aikita untuk menampilkan</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Hak Aikita</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Semua konten platform dilindungi hak cipta</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Logo dan nama "Aikita" adalah milik kami</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>Moderasi konten untuk menjaga kualitas</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-500/20">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>Link Afiliasi</span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Aikita menggunakan link afiliasi untuk beberapa tools. Kami menerima komisi jika Anda membeli melalui link tersebut,
                      namun ini tidak mempengaruhi objektivitas review kami.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Tanggung Jawab & Penghentian */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <span>Batasan Tanggung Jawab</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-500/20">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        <strong>Layanan "Sebagaimana Adanya"</strong><br />
                        Kami tidak bertanggung jawab atas akurasi informasi tools pihak ketiga atau kerugian dari penggunaan tools yang disarankan.
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Tanggung jawab maksimal: Rp 1.000.000 sesuai hukum yang berlaku di Indonesia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-lg border-gray-200 dark:border-purple-500/20">
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                        </svg>
                      </div>
                      <span>Penghentian Layanan</span>
                    </h2>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Aikita berhak menghentikan akses kapan saja</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Akun yang melanggar syarat akan ditangguhkan</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Layanan dapat dimodifikasi atau dihentikan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 5: Hukum & Kontak */}
              <Card className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 border-cyan-200 dark:border-cyan-500/20">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                    Hukum yang Berlaku & Hubungi Kami
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Yurisdiksi Indonesia</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Syarat ini diatur oleh hukum Republik Indonesia. Sengketa diselesaikan di pengadilan Jakarta.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hubungi Kami</h3>
                      <div className="space-y-2">
                        <a href="mailto:admin@aikita.id" className="block text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors text-sm">
                          admin@aikita.id
                        </a>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Jakarta, Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Syarat ini dapat berubah sewaktu-waktu. Penggunaan berkelanjutan dianggap sebagai penerimaan perubahan.
                      Baca juga <Link href="/privacy-policy" className="text-cyan-600 dark:text-cyan-400 hover:underline">Kebijakan Privasi</Link> kami.
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