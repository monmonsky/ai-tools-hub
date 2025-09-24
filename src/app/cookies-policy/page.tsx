import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Cookies",
  description: "Kebijakan cookies Aikita - bagaimana kami menggunakan cookies untuk meningkatkan pengalaman pengguna",
};

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Kebijakan Cookies
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Terakhir diperbarui: 23 September 2024
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">

                <h2>1. Apa itu Cookies?</h2>
                <p>
                  Cookies adalah file teks kecil yang disimpan di perangkat Anda (komputer, tablet, atau ponsel)
                  saat Anda mengunjungi website. Cookies memungkinkan website untuk mengingat tindakan dan
                  preferensi Anda selama periode waktu tertentu, sehingga Anda tidak perlu memasukkan informasi
                  yang sama berulang kali.
                </p>

                <h2>2. Bagaimana Aikita Menggunakan Cookies</h2>
                <p>
                  Aikita menggunakan cookies untuk berbagai tujuan yang membantu meningkatkan pengalaman
                  pengguna dan mengoptimalkan layanan kami:
                </p>

                <h3>2.1 Cookies Fungsional</h3>
                <p>Cookies ini diperlukan agar website berfungsi dengan baik:</p>
                <ul>
                  <li><strong>Preferensi Tema:</strong> Mengingat pilihan mode terang/gelap Anda</li>
                  <li><strong>Bahasa:</strong> Menyimpan preferensi bahasa interface</li>
                  <li><strong>Session Management:</strong> Menjaga sesi Anda tetap aktif saat browsing</li>
                  <li><strong>Keamanan:</strong> Melindungi dari serangan CSRF dan menjaga keamanan form</li>
                </ul>

                <h3>2.2 Cookies Analytics</h3>
                <p>Membantu kami memahami bagaimana pengunjung menggunakan website:</p>
                <ul>
                  <li><strong>Google Analytics:</strong> Mengumpulkan data anonim tentang penggunaan situs</li>
                  <li><strong>Page Views:</strong> Melacak halaman yang paling populer</li>
                  <li><strong>User Journey:</strong> Memahami alur navigasi pengguna</li>
                  <li><strong>Performance:</strong> Mengukur kecepatan loading dan performa situs</li>
                </ul>

                <h3>2.3 Cookies Preferensi</h3>
                <p>Meningkatkan pengalaman browsing yang dipersonalisasi:</p>
                <ul>
                  <li><strong>Tools Favorit:</strong> Mengingat tools AI yang Anda tandai</li>
                  <li><strong>Comparison List:</strong> Menyimpan daftar tools yang ingin dibandingkan</li>
                  <li><strong>Search History:</strong> Menyimpan riwayat pencarian untuk saran yang lebih baik</li>
                  <li><strong>View Preferences:</strong> Mengingat cara Anda lebih suka melihat konten</li>
                </ul>

                <h2>3. Jenis Cookies yang Digunakan</h2>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3>First-Party Cookies</h3>
                  <p>Cookies yang ditetapkan langsung oleh Aikita:</p>
                  <ul>
                    <li><code>theme-preference</code> - Menyimpan pilihan tema (terang/gelap)</li>
                    <li><code>compareList</code> - Daftar tools yang dipilih untuk perbandingan</li>
                    <li><code>user-preferences</code> - Pengaturan umum pengguna</li>
                    <li><code>session-token</code> - Token sesi untuk keamanan</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3>Third-Party Cookies</h3>
                  <p>Cookies dari layanan pihak ketiga yang kami gunakan:</p>
                  <ul>
                    <li><strong>Google Analytics:</strong> <code>_ga</code>, <code>_ga_*</code>, <code>_gid</code></li>
                    <li><strong>Google Fonts:</strong> Cookies untuk loading font optimal</li>
                    <li><strong>CDN Services:</strong> Cookies untuk optimasi pengiriman konten</li>
                  </ul>
                </div>

                <h2>4. Durasi Penyimpanan Cookies</h2>

                <h3>4.1 Session Cookies</h3>
                <p>
                  Cookies sementara yang dihapus ketika Anda menutup browser. Digunakan untuk:
                  menjaga sesi aktif dan keamanan formulir.
                </p>

                <h3>4.2 Persistent Cookies</h3>
                <p>Cookies yang disimpan untuk periode tertentu:</p>
                <ul>
                  <li><strong>Preferensi Tema:</strong> 1 tahun</li>
                  <li><strong>Compare List:</strong> 30 hari</li>
                  <li><strong>Google Analytics:</strong> 2 tahun (sesuai kebijakan Google)</li>
                  <li><strong>User Preferences:</strong> 6 bulan</li>
                </ul>

                <h2>5. Mengelola Cookies</h2>

                <h3>5.1 Pengaturan Browser</h3>
                <p>Anda dapat mengontrol cookies melalui pengaturan browser:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4><strong>Chrome:</strong></h4>
                    <p>Settings → Privacy and Security → Cookies and other site data</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4><strong>Firefox:</strong></h4>
                    <p>Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4><strong>Safari:</strong></h4>
                    <p>Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4><strong>Edge:</strong></h4>
                    <p>Settings → Site permissions → Cookies and site data</p>
                  </div>
                </div>

                <h3>5.2 Opsi Pengelolaan</h3>
                <ul>
                  <li><strong>Blokir Semua Cookies:</strong> Dapat mengganggu fungsi website</li>
                  <li><strong>Blokir Third-Party Cookies:</strong> Mengurangi tracking tanpa mengganggu fungsi utama</li>
                  <li><strong>Hapus Cookies Secara Berkala:</strong> Membersihkan data lama</li>
                  <li><strong>Mode Incognito/Private:</strong> Tidak menyimpan cookies setelah sesi berakhir</li>
                </ul>

                <h2>6. Google Analytics</h2>
                <p>
                  Aikita menggunakan Google Analytics untuk memahami bagaimana pengunjung berinteraksi
                  dengan situs kami. Data yang dikumpulkan bersifat anonim dan digunakan untuk:
                </p>
                <ul>
                  <li>Menganalisis tren penggunaan situs</li>
                  <li>Memahami preferensi konten</li>
                  <li>Meningkatkan performa dan pengalaman pengguna</li>
                  <li>Mengidentifikasi area yang perlu diperbaiki</li>
                </ul>

                <p>
                  Anda dapat opt-out dari Google Analytics dengan menginstal{' '}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>

                <h2>7. Dampak Menonaktifkan Cookies</h2>
                <p>
                  Jika Anda memilih untuk menonaktifkan cookies, beberapa fitur mungkin tidak berfungsi optimal:
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3>Tanpa Cookies, Anda mungkin mengalami:</h3>
                  <ul>
                    <li>Perlu mengatur preferensi tema setiap kali berkunjung</li>
                    <li>Kehilangan daftar tools yang dipilih untuk perbandingan</li>
                    <li>Pengalaman yang kurang personal</li>
                    <li>Performa situs yang tidak optimal</li>
                    <li>Beberapa formulir mungkin tidak berfungsi</li>
                  </ul>
                </div>

                <h2>8. Keamanan Cookies</h2>
                <p>Aikita menerapkan praktik keamanan terbaik untuk cookies:</p>
                <ul>
                  <li><strong>Secure Flag:</strong> Cookies hanya dikirim melalui koneksi HTTPS</li>
                  <li><strong>HttpOnly:</strong> Cookies tertentu tidak dapat diakses via JavaScript</li>
                  <li><strong>SameSite:</strong> Perlindungan terhadap serangan CSRF</li>
                  <li><strong>Enkripsi:</strong> Data sensitif dienkripsi sebelum disimpan</li>
                </ul>

                <h2>9. Cookies dari Link Eksternal</h2>
                <p>
                  Aikita berisi link ke website tools AI dan layanan pihak ketiga. Website tersebut
                  memiliki kebijakan cookies mereka sendiri yang tidak kami kontrol. Kami menyarankan
                  Anda untuk membaca kebijakan cookies mereka sebelum menggunakan layanan tersebut.
                </p>

                <h2>10. Perubahan Kebijakan Cookies</h2>
                <p>
                  Kami dapat memperbarui kebijakan cookies ini dari waktu ke waktu untuk mencerminkan
                  perubahan dalam praktik kami atau untuk alasan operasional, legal, atau regulasi lainnya.
                  Perubahan akan efektif setelah dipublikasikan di halaman ini.
                </p>

                <h2>11. Kontak</h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang penggunaan cookies di Aikita, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <p><strong>Email:</strong> admin@aikita.id</p>
                  <p><strong>Subject:</strong> Pertanyaan Kebijakan Cookies</p>
                  <p><strong>Website:</strong> <a href="https://aikita.id">aikita.id</a></p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
                  <h3>💡 Tips untuk Pengalaman Optimal</h3>
                  <p>
                    Untuk mendapatkan pengalaman terbaik di Aikita, kami menyarankan untuk mengizinkan
                    cookies fungsional dan preferensi. Anda tetap dapat memblokir cookies analytics
                    jika menginginkan privasi ekstra tanpa mengganggu fungsi utama website.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}