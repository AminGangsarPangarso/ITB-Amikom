import { Calendar as CalendarIcon, Check, ChevronRightIcon, Link as LinkIcon } from 'lucide-react';
import React from 'react';
import { SiFacebook, SiLinkedin, SiWhatsapp, SiX } from 'react-icons/si';
import { Link, useParams } from 'react-router-dom';
import { MainLayout } from '../../components/layout';
import { Badge } from '../../components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';

type Article = {
    title: string;
    category: string;
    date: string;
    image: string;
    intro: string;
    sections: Array<{
        number?: number;
        text: string;
        bullets?: string[];
    }>;
};

const articles: Record<string, Article> = {
    'news-1': {
    title: 'Wisuda Kedua kampus xyz Tahun Akademik 2023/2024',
        category: 'Wisuda',
        date: '19 Juni 2024',
        image: 'https://picsum.photos/id/1043/1200/800',
        intro: 'Berikut ini disampaikan beberapa ketentuan terkait pendaftaran pada Wisuda Pertama Tahun Akademik 2023/2024 dan mekanisme pengambilan ijazah sebagai berikut:',
        sections: [
            {
                number: 1,
                text: 'Proses Wisuda Kedua kampus xyz Tahun Akademik 2023/2024 akan dilaksanakan pada hari Sabtu, tanggal 27 April 2024 mulai pukul 08.00-10.30 WIB, di Sasana Budaya Ganesha (Sabuga) kampus xyz.',
                bullets: [
                    'Hanya lulusan pada Yudisium Bulan November 2023 s.d. Maret 2024 yang telah menyelesaikan administrasi kelulusan sesuai ketentuan, berhak mengikuti prosesi wisuda.',
                    'Untuk melihat waktu dan nama per-fakultas, silahkan perhatikan pada acara prosesi wisuda mulai tanggal 27 Maret 2024 sampai dengan tanggal 18 April 2024 pukul 10.00 WIB melalui laman Sistem Informasi Akademik (SIA-NG).',
                    'Lulusan yang tidak melakukan konfirmasi kehadiran pada saat proses wisuda sampai dengan tanggal 18 April 2024, tidak dapat mengikuti prosesi wisuda.',
                    'Orang/Keluarga wisudawan mengikuti acara wisuda secara daring.'
                ]
            },
            {
                number: 2,
                text: 'Sesuai dengan peraturan Rektor kampus xyz nomor 13/IT1.A/PER/2024 tentang Perubahan Pertama Atas Peraturan Rektor nomor 07/IT1.A/PER/2023 tentang Wisuda bahwa Wisudawan tidak dipungut biaya prosesi wisuda, dan hanya menanggung biaya penyediaan toga dan dokumentasi.'
            },
            {
                number: 3,
                text: 'Toga, topi dan kalung Wisuda kampus xyz dapat dipesan mulai tanggal 2 April 2024 melalui kampusxyz Press dengan mengakses tautan berikut https://www.kampusxyz.press/togaitb/.'
            },
            {
                number: 4,
                text: 'Bagi lulusan yang memerlukan Buku Lulusan dalam bentuk hardcopy, dapat memesan melalui kampusxyz Press mulai tanggal 18 April 2024.'
            },
            {
                number: 5,
                text: 'Undangan Wisuda dibagikan oleh Fakultas/Sekolah mulai tanggal 24 s.d. 28 April 2024.'
            },
            {
                number: 6,
                text: 'Acara Prosesi Wisuda dilaksanakan dengan ketentuan sebagai berikut:',
                bullets: [
                    'Hanya lulusan pada Yudisium Bulan November 2023 s.d. Maret 2024 yang telah menyelesaikan administrasi kelulusan sesuai ketentuan, berhak mengikuti prosesi wisuda.',
                    'Wisudawan wajib menggunakan toga dan kalung Wisuda kampus xyz sesuai aturan.',
                    'Wisudawan disarankan tidak membawa kendaraan roda dua dalam perjalanan untuk kendaraan roda empat/bus wisuda terutama untuk berkegiatan lokasi wisuda hanya untuk kendaraan roda dua dan parkirnya disiapkan untuk lokasi wisuda Sabuga untuk ketertiban pergerakan lalu lintas.',
                    'kampus xyz menyediakan tempat parkir dalam jumlah yang sangat terbatas, yang dapat digunakan oleh wisudawan untuk menitipkan parkir.',
                    'Masing-masing wisudawan wajib membawa botol minum (tumbler) dan memastikan sudah makan sebelum melaksanakan acara.'
                ]
            },
            {
                number: 7,
                text: 'Syukuran wisuda dilaksanakan oleh masing-masing Fakultas/Sekolah, dengan ketentuan:',
                bullets: [
                    'Informasi mengenai waktu dan tempat pelaksanaan Syukuran Wisuda akan diinformasikan lebih lanjut oleh masing-masing Fakultas/Sekolah.',
                    'Para Wisudawan dan orangtua/keluarga wisudawan yang menghadiri Syukuran Wisuda di dalam kampus harus menunjukkan keterangan lulus pemilik tiket dari SI Sentralisasi Dekan dan/atau Kajprodi, 2) Lulusan selanjut dalam sampai ramah tamah, dengan total durasi kegiatan maksimal selama 3 (tiga) jam.'
                ]
            }
        ]
    }
};

const relatedNews = [
    { id: '1', slug: 'beasiswa-lpdp', title: 'Beasiswa LPDP kampus xyz Batch 2 Khusus Pendaftar Daerah Af...', category: 'Beasiswa', date: '19 Juni 2024', image: 'https://picsum.photos/id/1018/1200/800' },
    { id: '2', slug: 'wisuda-kedua', title: 'Wisuda Kedua kampus xyz Tahun Akademik 2023/2024', category: 'Wisuda', date: '20 Mei 2024', image: 'https://picsum.photos/id/1025/1200/800' },
    { id: '3', slug: 'sosialisasi-snbp', title: 'Sosialisasi SNBP, SNBT, dan Penerimaan Mahasiswa Bar...', category: 'Sosialisasi', date: '6 Mei 2024', image: 'https://picsum.photos/id/1035/1200/800' },
    { id: '4', slug: 'penerbitan-ijazah', title: 'Penerbitan Ijazah April 2024 untuk Lulusan Yudisium Feb...', category: 'Sosialisasi', date: '27 April 2024', image: 'https://picsum.photos/id/1043/1200/800' }
];

export const NewsDetail = (): JSX.Element => {
    const { slug } = useParams<{ slug: string }>();
    const article = (slug && articles[slug]) ? articles[slug] : Object.values(articles)[0];

    return (
        <MainLayout>
            <div className="mx-auto container px-6 py-10">
                <div className="mb-6">
                    <Breadcrumb>
                        <BreadcrumbList className="gap-1">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/"><span className='text-[#069dd8]'>Beranda</span></BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <ChevronRightIcon className="w-4 h-4" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/news">Berita dan Acara</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <ChevronRightIcon className="w-4 h-4" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>{article.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <h1 className="text-3xl font-bold text-center mb-4">{article.title}</h1>
                <div className="flex items-center justify-center gap-3 mb-8">
                    <Badge className="bg-[#e6fbf7] text-[#27ae60]">{article.category}</Badge>
                    <span className="text-sm text-[#808080]">{article.date}</span>
                </div>

                <div className="flex gap- justify-center">


                    {/* Main content */}
                    <div className="flex-1 max-w-[720px]">
                        <img src={article.image} alt="" className="w-full rounded-[12px] mb-6 object-cover" />
                        <div className="flex gap-6">
                            <div className="hidden lg:block">
                                <div className="sticky top-24 flex flex-col gap-4">
                                    <div className="text-sm text-[#808080] mb-2">Bagikan</div>
                                    <button className="w-12 h-12 rounded-full bg-[#069dd8] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                        {React.createElement(LinkIcon as any, { className: 'w-5 h-5' })}
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-[#069dd8] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                        {React.createElement(SiWhatsapp as any, { className: 'w-5 h-5' })}
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-[#069dd8] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                        {React.createElement(SiFacebook as any, { className: 'w-5 h-5' })}
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-[#069dd8] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                        {React.createElement(SiLinkedin as any, { className: 'w-5 h-5' })}
                                    </button>
                                    <button className="w-12 h-12 rounded-full bg-[#069dd8] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                        {React.createElement(SiX as any, { className: 'w-5 h-5' })}
                                    </button>
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-[#333333] leading-relaxed">{article.intro}</p>

                                {article.sections.map((section, idx) => (
                                    <div key={idx} className="space-y-3">
                                        <p className="text-[#333333] leading-relaxed">
                                            {section.number && <strong>{section.number}. </strong>}
                                            {section.text}
                                        </p>
                                        {section.bullets && (
                                            <ul className="space-y-2 ml-6">
                                                {section.bullets.map((bullet, bidx) => (
                                                    <li key={bidx} className="flex gap-3 text-[#333333] leading-relaxed">
                                                        <Check className="w-5 h-5 text-[#069dd8] flex-shrink-0 mt-0.5" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related news section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">Berita dan Acara Lainnya</h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {relatedNews.map(item => (
                            <Link key={item.id} to={`/news/${item.slug}`} className="block">
                                <div className="rounded-[16px] h-56 shadow-[0px_10px_30px_rgba(0,0,0,0.06)] overflow-visible pb-8 hover:shadow-xl transition-shadow">
                                    <div className="relative">
                                        <div className="h-40 w-full overflow-hidden rounded-t-[16px] relative">
                                            <img src={item.image} alt="" className="w-full mih-h-full object-cover object-center" />
                                            <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                                        </div>

                                        <div className="absolute left-4 top-4">
                                            <Badge className="bg-[#e6fbf7] text-[#27ae60]">{item.category}</Badge>
                                        </div>

                                        <div className="absolute left-4 right-4 -bottom-9">
                                            <div className="bg-white rounded-[12px] p-4 shadow-lg">
                                                <h3 className="font-semibold text-[#333333] text-sm h-[40px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">{item.title}</h3>
                                                <div className="mt-2 flex items-center gap-2 text-xs text-[#808080]">
                                                    <CalendarIcon className="w-4 h-4 text-[#808080]" />
                                                    <span>{item.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default NewsDetail;
