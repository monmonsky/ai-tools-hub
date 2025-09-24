import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Aikita - bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Kebijakan Privasi
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Terakhir diperbarui: 23 September 2024
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">

                <h2>1. Informasi yang Kami Kumpulkan</h2>
                <p>
                  Aikita mengumpulkan informasi untuk memberikan layanan yang lebih baik kepada pengguna kami.
                  Kami mengumpulkan informasi dengan cara berikut:
                </p>

                <h3>1.1 Informasi yang Anda Berikan</h3>
                <ul>
                  <li><strong>Informasi Akun:</strong> Email, nama, dan informasi kontak lainnya saat Anda mendaftar newsletter</li>
                  <li><strong>Konten:</strong> Pesan yang Anda kirim melalui formulir kontak</li>
                  <li><strong>Feedback:</strong> Review dan rating yang Anda berikan untuk AI tools</li>
                </ul>

                <h3>1.2 Informasi yang Dikumpulkan Otomatis</h3>
                <ul>
                  <li><strong>Data Penggunaan:</strong> Halaman yang dikunjungi, waktu yang dihabiskan, dan interaksi dengan konten</li>
                  <li><strong>Informasi Perangkat:</strong> Jenis browser, sistem operasi, dan alamat IP</li>
                  <li><strong>Cookies:</strong> Data yang disimpan di perangkat Anda untuk meningkatkan pengalaman browsing</li>
                </ul>

                <h2>2. Bagaimana Kami Menggunakan Informasi</h2>
                <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul>
                  <li>Menyediakan dan memelihara layanan Aikita</li>
                  <li>Mengirim newsletter dan update tentang AI tools terbaru</li>
                  <li>Merespons pertanyaan dan memberikan dukungan pelanggan</li>
                  <li>Menganalisis penggunaan untuk meningkatkan layanan</li>
                  <li>Mencegah penyalahgunaan dan melindungi keamanan platform</li>
                </ul>

                <h2>3. Berbagi Informasi</h2>
                <p>
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga.
                  Kami dapat membagikan informasi dalam situasi berikut:
                </p>
                <ul>
                  <li><strong>Penyedia Layanan:</strong> Partner yang membantu mengoperasikan platform (hosting, email, analytics)</li>
                  <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi hak kami</li>
                  <li><strong>Persetujuan:</strong> Dengan persetujuan eksplisit Anda</li>
                </ul>

                <h2>4. Google Analytics</h2>
                <p>
                  Aikita menggunakan Google Analytics untuk menganalisis penggunaan website. Google Analytics
                  menggunakan cookies untuk mengumpulkan informasi tentang penggunaan situs. Informasi ini
                  membantu kami memahami bagaimana pengunjung menggunakan situs dan meningkatkan layanan kami.
                </p>
                <p>
                  Anda dapat mempelajari lebih lanjut tentang bagaimana Google menggunakan data di{' '}
                  <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
                    www.google.com/policies/privacy/partners
                  </a>.
                </p>

                <h2>5. Cookies dan Teknologi Serupa</h2>
                <p>
                  Kami menggunakan cookies dan teknologi serupa untuk:
                </p>
                <ul>
                  <li>Mengingat preferensi dan pengaturan Anda</li>
                  <li>Menganalisis lalu lintas dan penggunaan situs</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                  <li>Meningkatkan keamanan dan performa situs</li>
                </ul>
                <p>
                  Anda dapat mengontrol penggunaan cookies melalui pengaturan browser Anda.
                  Lihat <a href="/cookies-policy">Kebijakan Cookies</a> untuk informasi lebih detail.
                </p>

                <h2>6. Keamanan Data</h2>
                <p>
                  Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda:
                </p>
                <ul>
                  <li>Enkripsi data saat transmisi (SSL/TLS)</li>
                  <li>Akses terbatas pada informasi pribadi</li>
                  <li>Monitoring sistem secara berkala</li>
                  <li>Backup data yang aman</li>
                </ul>

                <h2>7. Hak Anda</h2>
                <p>Sesuai dengan hukum yang berlaku, Anda memiliki hak untuk:</p>
                <ul>
                  <li><strong>Akses:</strong> Meminta salinan informasi pribadi yang kami miliki</li>
                  <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki informasi yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan informasi pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi penggunaan informasi pribadi Anda</li>
                  <li><strong>Portabilitas:</strong> Menerima informasi pribadi dalam format yang dapat dibaca mesin</li>
                  <li><strong>Keberatan:</strong> Menolak penggunaan informasi untuk tujuan tertentu</li>
                </ul>

                <h2>8. Penyimpanan Data</h2>
                <p>
                  Kami menyimpan informasi pribadi Anda selama diperlukan untuk memberikan layanan atau
                  memenuhi kewajiban hukum. Data newsletter disimpan hingga Anda memilih untuk berhenti
                  berlangganan. Data analytics disimpan selama 26 bulan sesuai kebijakan Google Analytics.
                </p>

                <h2>9. Transfer Data Internasional</h2>
                <p>
                  Beberapa penyedia layanan kami mungkin berlokasi di luar Indonesia. Kami memastikan
                  bahwa transfer data dilakukan dengan perlindungan yang memadai sesuai dengan standar
                  internasional.
                </p>

                <h2>10. Anak di Bawah Umur</h2>
                <p>
                  Layanan Aikita tidak ditujukan untuk anak di bawah 13 tahun. Kami tidak secara sadar
                  mengumpulkan informasi pribadi dari anak di bawah 13 tahun tanpa persetujuan orang tua.
                </p>

                <h2>11. Perubahan Kebijakan Privasi</h2>
                <p>
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan
                  akan dinotifikasi melalui email atau pemberitahuan di situs. Tanggal "Terakhir diperbarui"
                  di bagian atas akan menunjukkan kapan kebijakan ini terakhir direvisi.
                </p>

                <h2>12. Hubungi Kami</h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak Anda,
                  silakan hubungi kami:
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <p><strong>Email:</strong> admin@aikita.id</p>
                  <p><strong>Alamat:</strong> Jakarta, Indonesia</p>
                  <p><strong>Website:</strong> <a href="https://aikita.id">aikita.id</a></p>
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