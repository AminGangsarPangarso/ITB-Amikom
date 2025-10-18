import { ChevronRightIcon } from 'lucide-react';
import { MainLayout } from '../../components/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';

export const Terms = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-[900px] px-6 py-10">
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" className="text-blue-600">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4 text-blue-600" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Syarat & Ketentuan</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-4xl font-semibold mb-2">Syarat & Ketentuan</h1>
        <div className="text-sm text-[#808080] mb-8">Telah diperbarui: 27/5/2024</div>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Persyaratan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Dengan mengakses Situs Web ini, Anda setuju untuk terikat dengan Syarat dan Ketentuan Penggunaan Situs Web ini. Jika Anda tidak setuju dengan salah satu persyaratan ini, Anda dilarang mengakses situs ini. Materi yang terkandung dalam Situs Web ini dilindungi oleh undang-undang hak cipta dan merek dagang.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Gunakan Lisensi</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Izin diberikan untuk menggunakan website untuk tujuan yang sah dan sesuai dengan hukum. Oleh karena itu, Anda dilarang:</p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">memodifikasi atau menyalin materi;</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">menggunakan materi untuk tujuan komersial apa pun atau untuk tampilan publik apa pun;</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">menghapus hak cipta atau notasi kepemilikan lainnya dari materi; atau</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">mentransfer materi ke orang lain atau "mencerminkan" materi di server lain mana pun;</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">menerbitkan konten yang bersifat SARA</span></li>
            <li className="flex items-start gap-3"><span className="flex-shrink-0 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"><svg className="w-5 h-5 text-[#069dd8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text-sm text-[#333333]">menggunakan informasi pribadi pengguna lain</span></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Batasan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami tidak bertanggung jawab atas segala kerugian yang akan timbul dengan penggunaan atau ketidakmampuan untuk menggunakan materi pada Situs Web. Beberapa yurisdiksi tidak mengizinkan batasan pada jaminan tersirat atau batasan tanggung jawab atas kerusakan insidental, batasan ini mungkin tidak berlaku untuk Anda.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Tautan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami tidak bertanggung jawab atas isi dari situs terkait pihak ketiga. Penggunaan situs web tertaut adalah risiko pengguna sendiri.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Modifikasi Persyaratan</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Kami dapat merevisi Ketentuan Penggunaan Situs Web ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan menggunakan Situs Web ini, Anda setuju untuk terikat dengan versi terbaru dari Syarat dan Ketentuan Penggunaan ini.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold mb-2">Privasi Anda</h2>
          <p className="text-sm text-[#333333] leading-relaxed">Harap baca Kebijakan Privasi kami untuk informasi lebih lanjut tentang bagaimana kami menangani data pribadi Anda.</p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Terms;
