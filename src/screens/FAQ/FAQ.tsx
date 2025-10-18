import { ChevronDown, ChevronRight, ChevronUp, Link2 } from 'lucide-react';
import React from 'react';
import { SiInstagram, SiStackoverflow, SiWhatsapp, SiZoom } from 'react-icons/si';
import { MainLayout } from '../../components/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';

const categories = [
  'Perkuliahan',
  'Mahasiswa Baru',
  'Keuangan',
  'Layanan',
  'Kasus',
];

const sampleFaq = [
  {
    question: 'Apakah saya harus melakukan aktivasi akun di laman akademik.kampusxyz.ac.id ?',
    answer:
      'Ya. Lakukan aktivasi akun di laman akademik.kampusxyz.ac.id untuk memperoleh nomor registrasi dan melanjutkan proses pendaftaran. Gunakan alamat e-mail yang aktif untuk melakukan aktivasi di laman tersebut.',
  },
  {
    question: 'Bagaimana jika saya belum memiliki memiliki Surat Keterangan Lulus (SKL) Sementara untuk melakukan pendaftaran ulang?',
    answer:
      'Jika belum memiliki SKL sementara, ikuti panduan pendaftaran ulang yang tersedia pada form pendaftaran atau hubungi layanan akademik untuk panduan lebih lanjut.',
  },
  {
    question: 'Apakah kampus xyz memberikan subsidi UKT?',
    answer: 'Informasi mengenai subsidi UKT tersedia di bagian Keuangan; silakan hubungi bagian keuangan untuk detail.'
  }
];

export const FAQ = (): JSX.Element => {
  const [active, setActive] = React.useState<number>(0);
  const [selectedCategory, setSelectedCategory] = React.useState<number>(1); // Mahasiswa Baru default like screenshot

  const copyLink = async (i: number) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#faq-${i}`;
      await navigator.clipboard.writeText(url);
      // small visual feedback could be added later
      // eslint-disable-next-line no-console
      console.log('copied', url);
    } catch (e) {
      // ignore
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-[1100px] py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-brand">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="w-4 h-4 text-brand" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>FAQ</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-semibold mt-6 mb-8">Temukan Jawaban yang Kamu Butuhkan</h1>

        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <nav className="space-y-1">
              {categories.map((c, i) => {
                const activeItem = i === selectedCategory;
                return (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(i)}
                    className="relative flex items-center w-full text-left"
                  >
                    <span className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${activeItem ? 'bg-[var(--brand-hex)]' : 'bg-transparent'}`} />
                    <span className={`block w-full pl-4 pr-3 py-3 text-sm ${activeItem ? 'text-brand font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>{c}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <main className="col-span-9">
            <div className="space-y-0">
              {sampleFaq.map((f, i) => {
                const isOpen = active === i;
                return (
                  <div key={i} id={`faq-${i}`} className="border-b last:border-b-0">
                    <button
                      onClick={() => setActive(isOpen ? -1 : i)}
                      className="w-full px-5 py-5 text-left flex items-start justify-between"
                    >
                      <div className="max-w-[900px]">
                        <div className="font-medium text-sm text-gray-800">{f.question}</div>
                      </div>
                      <div className="text-gray-500">{isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}</div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 text-sm text-gray-700">
                        <p className="mb-3">{f.answer}</p>

                        {i === 0 && (
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <div>Bagikan jawaban untuk pertanyaan ini melalui link berikut:</div>
                            <button onClick={() => copyLink(i)} className="inline-flex items-center gap-2 text-brand hover:underline">
                              <Link2 className="w-4 h-4" />
                              <span>Salin link</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-white shadow rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-4">Tidak Menemukan Jawaban?</h3>
              <div className="flex items-center justify-center gap-8">
                <a className="inline-flex items-center gap-3" href="#" aria-label="Whatsapp">
                    <span className="w-10 h-10 rounded-full bg-[#0660a6] text-white flex items-center justify-center">
                    {React.createElement(SiWhatsapp as any, { className: 'w-5 h-5' })}
                  </span>
                  <span className="text-sm text-gray-700">Whatsapp</span>
                </a>

                <a className="inline-flex items-center gap-3" href="#" aria-label="Instagram">
                    <span className="w-10 h-10 rounded-full bg-[#0660a6] text-white flex items-center justify-center">
                    {React.createElement(SiInstagram as any, { className: 'w-5 h-5' })}
                  </span>
                  <span className="text-sm text-gray-700">Instagram</span>
                </a>

                <a className="inline-flex items-center gap-3" href="#" aria-label="Zoom">
                    <span className="w-10 h-10 rounded-full bg-[#0660a6] text-white flex items-center justify-center">
                    {React.createElement(SiZoom as any, { className: 'w-5 h-5' })}
                  </span>
                  <span className="text-sm text-gray-700">Layanan Zoom</span>
                </a>

                <a className="inline-flex items-center gap-3" href="#" aria-label="Pusat Bantuan SIX">
                    <span className="w-10 h-10 rounded-full bg-[#0660a6] text-white flex items-center justify-center">
                    {React.createElement(SiStackoverflow as any, { className: 'w-5 h-5' })}
                  </span>
                  <span className="text-sm text-gray-700">Pusat Bantuan SIX</span>
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
