import { ChevronRightIcon } from 'lucide-react';
import { MainLayout } from '../../components/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';

export const Privacy = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="mx-auto container py-10">
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                      <BreadcrumbLink href="#" className="text-brand">Beranda</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                      <ChevronRightIcon className="w-4 h-4 text-brand" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Kebijakan Privasi</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
          </Breadcrumb>
        </div>

  <h1 className="text-3xl font-semibold mb-2">Kebijakan Privasi</h1>
        <div className="text-sm text-[#808080] mb-8">Telah diperbarui: 27/5/2024</div>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Pendahuluan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami menggunakan Pemberitahuan Privasi ini untuk mengungkapkan praktik privasi untuk kampus xyz sesuai dengan peraturan terkait, yaitu Undang-Undang Nomor 19 Tahun 2019 tentang Informasi dan Transaksi Elektronik, dan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik. Kami bertujuan untuk membantu Anda dalam memahami Data Pribadi apa yang Kami kumpulkan, bagaimana Kami menggunakannya, dan kontrol apa yang Anda miliki atas data tersebut. Pemberitahuan ini hanya berlaku untuk data yang dikumpulkan oleh <a className="text-blue-600 underline" href="https://www.kampusxyz.ac.id">www.kampusxyz.ac.id</a> dan seluruh subdomainnya. Pemberitahuan ini akan menentukan hal-hal berikut:</p>
          <p className="text-sm text-[#333333] leading-relaxed">Kami menggunakan Pemberitahuan Privasi ini untuk mengungkapkan praktik privasi untuk kampus xyz sesuai dengan peraturan terkait, yaitu Undang-Undang Nomor 19 Tahun 2019 tentang Informasi dan Transaksi Elektronik, dan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik. Kami bertujuan untuk membantu Anda dalam memahami Data Pribadi apa yang Kami kumpulkan, bagaimana Kami menggunakannya, dan kontrol apa yang Anda miliki atas data tersebut. Pemberitahuan ini hanya berlaku untuk data yang dikumpulkan oleh <a className="text-brand underline" href="https://www.kampusxyz.ac.id">www.kampusxyz.ac.id</a> dan seluruh subdomainnya. Pemberitahuan ini akan menentukan hal-hal berikut:</p>

          <div className="mt-4">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                <svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-sm text-[#333333] leading-relaxed">Data Pribadi apa yang dikumpulkan dari situs web. Bagaimana Data Pribadi dikumpulkan, digunakan, dibagikan, disimpan, dan diproses. Prosedur keamanan yang diterapkan untuk melindungi data Anda. Hak dan pilihan Anda terkait penggunaan data Anda. Bagaimana Anda dapat menghubungi Kami jika terjadi masalah seperti mengoreksi ketidakakuratan pada data Anda atau meminta penghapusan Data Pribadi Anda</p>
            </div>
          </div>

          <p className="text-sm text-[#333333] leading-relaxed mt-4">Harap baca Pemberitahuan Privasi berikut untuk memahami pemrosesan, perlindungan, dan hak Anda terkait dengan Data Pribadi Anda.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Tentang Kami</h2>
          <p className="text-sm text-[#333333] leading-relaxed">kampus xyz adalah perguruan tinggi negeri berbadan hukum yang berada di Kota Bandung, Republik Indonesia. Misi kampus xyz adalah menjadi perguruan tinggi yang unggul, bermartabat, mandiri, dan diakui dunia serta memandu perubahan yang mampu meningkatkan kesejahteraan bangsa Indonesia dan dunia. Untuk mencapai misi tersebut, Kami mengumpulkan dan menggunakan Data Pribadi yang Anda berikan. Untuk tujuan pemberitahuan ini, Kami bertindak sebagai 'Pengendali Data'. Kami berperan sebagai pihak yang akan menentukan bagaimana Data Pribadi Anda digunakan dan diproses.</p>

          <p className="text-sm text-[#333333] leading-relaxed mt-4">Kami telah menunjuk Pejabat Pengelola Informasi dan Dokumen (PPID) untuk membantu dengan persyaratan, permintaan, dan keluhan terkait Pemberitahuan Privasi dan pengumpulan serta Pemrosesan Data Pribadi Anda. Untuk detail tentang bagaimana menghubungi kami, lihat bagian Informasi Kontak di akhir pemberitahuan ini.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Data Yang Dikumpulkan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami mengumpulkan informasi pribadi Anda ketika Anda secara sukarela memberikannya kepada kami, seperti saat Anda:</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Membuat akun pengguna</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Mendaftar untuk kursus atau acara</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Mengirimkan email kepada kami</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Berpartisipasi dalam forum atau survei</span></li>
          </ul>

          <p className="text-sm text-[#333333] leading-relaxed mt-4">Informasi pribadi yang kami kumpulkan mungkin termasuk nama, alamat email, alamat pos, nomor telepon, dan informasi demografis lainnya. Kami juga dapat mengumpulkan informasi tentang aktivitas Anda di website akademik kampus xyz, seperti halaman yang Anda kunjungi dan waktu yang Anda habiskan di setiap halaman.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Penggunaan Data</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Data Pribadi Anda dapat digunakan untuk tujuan berikut:</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kustomisasi konten dan pengalaman pengguna</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kustomisasi konten dan pengalaman pengguna</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Memproses identitas Anda saat Anda menggunakan situs berdomain <a className="text-blue-600 underline" href="https://www.kampusxyz.ac.id">www.kampusxyz.ac.id</a></span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Memproses identitas Anda saat Anda menggunakan situs berdomain <a className="text-brand underline" href="https://www.kampusxyz.ac.id">www.kampusxyz.ac.id</a></span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Pengaturan dan administrasi akun</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Melakukan polling dan survei</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Penelitian dan pengembangan internal</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kewajiban administrasi dan hukum</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Audit internal</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Proses rekrutmen</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Pemenuhan kewajiban yang digariskan dalam setiap perjanjian dengan pengguna</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Pemenuhan kewajiban untuk kegiatan penunjang pendidikan, penelitian, dan pengabdian masyarakat</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Mengumpulkan umpan balik dan pendapat tentang layanan yang Kami sediakan</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Pemberitahuan kepada pengguna tentang perubahan layanan</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Menanggapi permintaan dan komentar Anda</span></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Dasar Hukum Pemrosesan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami memproses Data Pribadi untuk tujuan sebagai berikut:</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Tujuan kepentingan yang sah, yakni memproses Data Pribadi untuk tujuan kepentingan Kami sendiri asalkan kepentingan tersebut tidak mengesampingkan kepentingan, hak, dan kebebasan pemilik data. Kepentingan ini termasuk pemrosesan untuk tujuan penelitian, pembelajaran, dan pengembangan bisnis.</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kepentingan umum, yakni memproses Data Pribadi untuk kepentingan pemerintah setempat. Kepentingan ini adalah kepentingan yang berkaitan dengan sensus dan administrasi yang akan dilaporkan ke pemerintah.</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kepentingan vital, yakni pemrosesan yang dilakukan karena berkaitan dengan kebutuhan akan kesehatan untuk bertahan hidup. Kepentingan ini berkaitan dengan Pemrosesan Data untuk administrasi kesehatan.</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Kontrak, yakni pemrosesan yang dilakukan berdasarkan kontrak. Kontrak yang dimaksud adalah seperti kontrak pegawai, kontrak peneliti, dan sebagainya. Subjek Data harus menjadi bagian dari kontrak agar pemrosesan ini dapat dilaksanakan.</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">Persetujuan, yakni pemrosesan yang dilakukan setelah mendapatkan izin atau Persetujuan untuk memproses data untuk tujuan tertentu. Sehingga dibutuhkan dokumentasi dan bukti pemrosesan karena termasuk pada Persetujuan yang telah dikumpulkan secara tertulis. Untuk Persetujuan Data berdasarkan Persetujuan, Anda memiliki hak untuk menarik Persetujuan pemrosesan untuk tujuan tertentu, dengan mengisi formulir pengajuan keberatan di halaman <a className="text-blue-600 underline" href="https://ppid.kampusxyz.ac.id/keberatan">https://ppid.kampusxyz.ac.id/keberatan</a>.</span></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Pengaksesan Data Spesifik</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Untuk dapat mengakses situs sepenuhnya, Anda dapat mengakses menggunakan akun INA yang dapat dimiliki oleh mahasiswa, staf/dosen yang memiliki NIP, staf/dosen/peneliti yang tidak memiliki NIP, dan tamu. Untuk melakukan registrasi akun INA, kunjungi <a className="text-blue-600 underline" href="https://dti.kampusxyz.ac.id/layanan-akun-ina">https://dti.kampusxyz.ac.id/layanan-akun-ina</a>. Data tertentu akan dikumpulkan selama proses ini, termasuk nama dan alamat email Anda. Data ini digunakan untuk menghubungi Anda, menyarankan informasi yang sesuai, dan meningkatkan pengalaman pengguna Anda.</p>

          <p className="text-sm text-[#333333] leading-relaxed mt-3">Untuk keperluan administrasi ke kementerian terkait yakni Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi Republik Indonesia, sebagai pengguna data utama terdaftar, Data Pribadi Anda dapat diberikan berupa nama, jabatan, program studi, NIM/NIP, dan mata kuliah yang diambil/diampu.</p>

          <p className="text-sm text-[#333333] leading-relaxed mt-3">Data Pribadi dapat digunakan tanpa sepengetahuan atau Persetujuan dalam situasi ketika diwajibkan atau diizinkan secara hukum, atau ketika Data Pribadi telah dianonimkan sehingga tidak lagi dikaitkan dengan Subjek Data. Kami juga dapat menghapus Informasi pegawai pribadi sehingga data yang Kami berikan tidak dapat dikaitkan kembali dengan Anda sebagai individu.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Perlindungan Data</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Mengamankan data Anda adalah prioritas bagi Kami, baik saat dalam jaringan (daring) maupun luar jaringan (luring). Kami telah menerapkan pengamanan yang tepat untuk mencegah Data Pribadi hilang, disalahgunakan, diakses, atau diungkapkan oleh pihak yang tidak berwenang. Kami mengumpulkan Data Pribadi Anda saat melakukan aktivitas di seluruh situs milik kampus xyz. Data ini dienkripsi dan diamankan selama transmisinya. Akses web yang aman dapat diverifikasi dengan ikon kunci di bilah alamat browser internet Anda dan dengan menggunakan “https” di awal alamat web, di mana “s” menunjukkan koneksi yang aman.</p>

          <p className="text-sm text-[#333333] leading-relaxed mt-3">Pegawai dan pihak ketiga hanya diberikan Data Pribadi berdasarkan kebutuhan untuk mengetahui jumlah minimum yang mereka perlukan untuk menyelesaikan pekerjaan spesifik mereka. Semua pegawai juga tunduk pada perjanjian kerahasiaan dan menjalani pelatihan tahunan tentang penanganan data sensitif yang benar.</p>

          <p className="text-sm text-[#333333] leading-relaxed mt-3">Prosedur telah dikembangkan dan diuji untuk menangani potensi pelanggaran data. Prosedur ini dirancang untuk memastikan individu dan regulator yang terkena dampak diberitahu tentang pelanggaran dan tindakan perbaikan dalam jangka waktu yang relevan sesuai peraturan yang berlaku. Kami juga menerapkan kebijakan retensi dan penghapusan data untuk memastikan Data Pribadi tidak disimpan lebih lama dari yang diperlukan untuk tujuan yang dikumpulkan.</p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Privacy;
