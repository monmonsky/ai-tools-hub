import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan platform Aikita - direktori AI tools terlengkap Indonesia",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-black dark:via-purple-900/50 dark:to-black py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Syarat dan Ketentuan
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Terakhir diperbarui: 23 September 2024
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">

                <h2>1. Penerimaan Syarat</h2>
                <p>
                  Dengan mengakses dan menggunakan platform Aikita ("Layanan"), Anda menyetujui untuk terikat
                  oleh syarat dan ketentuan ini ("Syarat"). Jika Anda tidak menyetujui syarat ini, harap tidak
                  menggunakan layanan kami.
                </p>

                <h2>2. Deskripsi Layanan</h2>
                <p>
                  Aikita adalah platform direktori AI tools yang menyediakan:
                </p>
                <ul>
                  <li>Informasi dan review tentang berbagai tools kecerdasan buatan</li>
                  <li>Perbandingan fitur dan harga tools AI</li>
                  <li>Rating dan ulasan dari pengguna</li>
                  <li>Newsletter dengan update tools AI terbaru</li>
                  <li>Konten edukatif tentang penggunaan AI tools</li>
                </ul>

                <h2>3. Eligibilitas Pengguna</h2>
                <p>
                  Untuk menggunakan layanan Aikita, Anda harus:
                </p>
                <ul>
                  <li>Berusia minimal 13 tahun</li>
                  <li>Memiliki kapasitas hukum untuk membuat perjanjian yang mengikat</li>
                  <li>Tidak dilarang menggunakan layanan berdasarkan hukum yang berlaku</li>
                  <li>Menyediakan informasi yang akurat dan lengkap saat mendaftar</li>
                </ul>

                <h2>4. Penggunaan yang Diizinkan</h2>
                <p>Anda diperbolehkan menggunakan Aikita untuk:</p>
                <ul>
                  <li>Mencari dan membandingkan AI tools untuk kebutuhan pribadi atau bisnis</li>
                  <li>Membaca review dan rating dari pengguna lain</li>
                  <li>Berlangganan newsletter untuk mendapatkan update</li>
                  <li>Memberikan review dan rating yang jujur tentang tools yang pernah Anda gunakan</li>
                </ul>

                <h2>5. Penggunaan yang Dilarang</h2>
                <p>Anda tidak diperbolehkan:</p>
                <ul>
                  <li>Menggunakan layanan untuk tujuan yang ilegal atau tidak sah</li>
                  <li>Mengirim spam, malware, atau konten berbahaya lainnya</li>
                  <li>Memberikan informasi palsu atau menyesatkan</li>
                  <li>Melanggar hak kekayaan intelektual pihak ketiga</li>
                  <li>Menggunakan bot atau script otomatis tanpa izin</li>
                  <li>Mencoba mendapatkan akses tidak sah ke sistem kami</li>
                  <li>Mengganggu atau merusak integritas atau performa layanan</li>
                </ul>

                <h2>6. Konten Pengguna</h2>
                <h3>6.1 Review dan Rating</h3>
                <p>
                  Dengan mengirimkan review, rating, atau konten lainnya ke Aikita, Anda:
                </p>
                <ul>
                  <li>Menyatakan bahwa konten tersebut asli dan tidak melanggar hak pihak ketiga</li>
                  <li>Memberikan Aikita lisensi non-eksklusif untuk menggunakan, menampilkan, dan mendistribusikan konten</li>
                  <li>Bertanggung jawab atas akurasi dan kebenaran informasi yang diberikan</li>
                </ul>

                <h3>6.2 Moderasi Konten</h3>
                <p>
                  Aikita berhak untuk meninjau, mengedit, atau menghapus konten yang:
                </p>
                <ul>
                  <li>Melanggar syarat dan ketentuan ini</li>
                  <li>Mengandung informasi palsu atau menyesatkan</li>
                  <li>Bersifat spam atau promosi berlebihan</li>
                  <li>Mengandung konten yang tidak pantas atau ofensif</li>
                </ul>

                <h2>7. Kekayaan Intelektual</h2>
                <p>
                  Semua konten di Aikita, termasuk teks, grafik, logo, dan desain, dilindungi oleh
                  hak cipta dan hak kekayaan intelektual lainnya. Anda tidak diperbolehkan:
                </p>
                <ul>
                  <li>Menyalin, memodifikasi, atau mendistribusikan konten tanpa izin</li>
                  <li>Menggunakan nama "Aikita" atau logo untuk tujuan komersial</li>
                  <li>Membuat karya turunan dari konten kami</li>
                </ul>

                <h2>8. Link Afiliasi</h2>
                <p>
                  Aikita dapat menggunakan link afiliasi untuk beberapa tools yang direview.
                  Ini berarti kami mungkin menerima komisi jika Anda membeli melalui link tersebut.
                  Link afiliasi tidak mempengaruhi objektivitas review kami.
                </p>

                <h2>9. Penafian Tanggung Jawab</h2>
                <p>
                  Layanan Aikita disediakan "sebagaimana adanya" tanpa jaminan apapun. Kami tidak bertanggung jawab atas:
                </p>
                <ul>
                  <li>Akurasi informasi tentang tools pihak ketiga</li>
                  <li>Ketersediaan atau performa tools yang direview</li>
                  <li>Kerugian yang timbul dari penggunaan tools yang disarankan</li>
                  <li>Gangguan atau kesalahan dalam layanan</li>
                  <li>Kehilangan data atau kerusakan sistem</li>
                </ul>

                <h2>10. Batasan Tanggung Jawab</h2>
                <p>
                  Dalam batas maksimal yang diizinkan hukum, tanggung jawab total Aikita kepada Anda
                  untuk semua klaim yang timbul dari atau terkait dengan penggunaan layanan tidak akan
                  melebihi Rp 1.000.000 (satu juta rupiah).
                </p>

                <h2>11. Ganti Rugi</h2>
                <p>
                  Anda setuju untuk mengganti rugi dan membebaskan Aikita dari segala klaim, kerugian,
                  atau biaya yang timbul dari:
                </p>
                <ul>
                  <li>Pelanggaran Anda terhadap syarat dan ketentuan ini</li>
                  <li>Konten yang Anda kirimkan ke platform</li>
                  <li>Pelanggaran hak pihak ketiga</li>
                </ul>

                <h2>12. Penghentian Layanan</h2>
                <p>
                  Aikita berhak untuk:
                </p>
                <ul>
                  <li>Menghentikan atau menangguhkan akses Anda kapan saja tanpa pemberitahuan</li>
                  <li>Memodifikasi atau menghentikan layanan (atau bagian darinya) dengan atau tanpa pemberitahuan</li>
                  <li>Menghapus akun yang tidak aktif atau melanggar syarat</li>
                </ul>

                <h2>13. Privasi</h2>
                <p>
                  Penggunaan informasi pribadi Anda diatur oleh{' '}
                  <a href="/privacy-policy">Kebijakan Privasi</a> kami, yang merupakan bagian
                  integral dari syarat dan ketentuan ini.
                </p>

                <h2>14. Perubahan Syarat</h2>
                <p>
                  Aikita dapat mengubah syarat dan ketentuan ini kapan saja. Perubahan akan efektif
                  setelah dipublikasikan di situs. Penggunaan layanan yang berkelanjutan setelah
                  perubahan dianggap sebagai penerimaan syarat yang baru.
                </p>

                <h2>15. Hukum yang Berlaku</h2>
                <p>
                  Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa
                  akan diselesaikan di pengadilan yang berwenang di Jakarta, Indonesia.
                </p>

                <h2>16. Ketentuan Umum</h2>
                <ul>
                  <li><strong>Keterpisahan:</strong> Jika ada bagian dari syarat ini yang tidak dapat dilaksanakan, bagian lainnya tetap berlaku</li>
                  <li><strong>Keseluruhan Perjanjian:</strong> Syarat ini merupakan keseluruhan perjanjian antara Anda dan Aikita</li>
                  <li><strong>Tidak Ada Pelepasan:</strong> Kegagalan Aikita untuk menegakkan hak tidak berarti pelepasan hak tersebut</li>
                </ul>

                <h2>17. Hubungi Kami</h2>
                <p>
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
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