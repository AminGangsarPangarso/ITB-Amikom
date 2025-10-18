import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { MainLayout } from '../../components/layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/breadcrumb';

const campuses = [
    'Kampus Ganesha',
    'Kampus Jatinangor',
    'Kampus Cirebon',
    'Kampus Jakarta',
];

export const About = (): JSX.Element => {
    const [activeCampus, setActiveCampus] = React.useState(0);
    const [isTourOpen, setIsTourOpen] = React.useState(false);
    const tourVideoId = 'ScMzIvxBSi4'; // replace with real YouTube id

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsTourOpen(false);
        };
        if (isTourOpen) {
            document.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isTourOpen]);

    return (
        <MainLayout>
            <div className="mx-auto max-w-[1100px] px-6 py-16">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" className="text-brand">Beranda</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator>
                            <ChevronRight className="w-4 h-4 text-brand" />
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Tentang Kami</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className=' flex flex-col gap-[160px] mt-6'>
                    <div className="grid grid-cols-12 gap-12 items-center">
                        <div className="col-span-7">
                            <h1 className="text-3xl font-bold mb-4">Tentang Akademik dan Kemahasiswaan kampus xyz</h1>
                            <p className="text-gray-700 mb-4">Sebagai sekolah tinggi teknik pertama dan terbaik di Indonesia, kampus xyz menyadari pentingnya mengoptimalkan teknologi dalam pendidikan, terutama untuk layanan akademik.</p>
                            <p className="text-gray-700">Oleh karena itu, kampus xyz mengembangkan situs akademik untuk membantu civitas dan masyarakat luas mengakses informasi program akademik dan pendaftaran.</p>
                        </div>
                        <div className="col-span-5">
                            <img src="/about-hero.png" alt="about hero" className="w-full rounded-[12px]" />
                        </div>
                    </div>

                    <section className="pb-8 border-b border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-20">Dukungan Kami Melalui Program Akademik<br />Untuk Mengukir Impian Anak Negeri</h2>
                        <div className="grid grid-cols-4 gap-10">
                            <div className="border-l-4 border-[#069dd8] pl-4">
                                <div className="text-4xl md:text-5xl font-bold text-brand-dark">150</div>
                                <div className="text-sm font-medium mt-2">Spesialisasi</div>
                                <div className="text-xs text-gray-500 mt-2">Perdalam keilmuan prodi utama melalui spesialisasi</div>
                            </div>
                            <div className="border-l-4 border-[#069dd8] pl-4">
                                <div className="text-4xl md:text-5xl font-bold text-brand-dark">60</div>
                                <div className="text-sm font-medium mt-2">Minor</div>
                                <div className="text-xs text-gray-500 mt-2">Lengkapi pengetahuan bidang studi utama secara komprehensif</div>
                            </div>
                            <div className="border-l-4 border-[#069dd8] pl-4">
                                <div className="text-4xl md:text-5xl font-bold text-brand-dark">50</div>
                                <div className="text-sm font-medium mt-2">Double Major</div>
                                <div className="text-xs text-gray-500 mt-2">Tingkatkan kompetensi untuk karier atau pendidikan lanjut</div>
                            </div>
                            <div className="border-l-4 border-[#069dd8] pl-4">
                                <div className="text-4xl md:text-5xl font-bold text-brand-dark">39</div>
                                <div className="text-sm font-medium mt-2">Multidisiplin</div>
                                <div className="text-xs text-gray-500 mt-2">Kembangkan solusi inovatif melalui kolaborasi pembelajaran</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-3xl md:text-4xl font-bold mb-20 text-brand-dark text-center">Multikampus Unggulan untuk Mendukung Riset Terdepan</h3>
                        <div className="flex items-center justify-center mb-6">
                            <nav className="flex gap-6 border-b w-full max-w-[700px] justify-start md:justify-center px-4">
                                {campuses.map((c, i) => (
                                    <button
                                        key={c}
                                        onClick={() => setActiveCampus(i)}
                                        className={`pb-3 -mb-px ${i === activeCampus ? 'text-brand font-medium border-b-2 border-[#069dd8]' : 'text-gray-500'}`}>
                                        {c}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="grid grid-cols-12 gap-8 items-start">
                            <div className="col-span-7">
                                <img src="/about-campus.png" alt="campus" className="w-full rounded-[12px]" />
                            </div>
                            <div className="col-span-5">
                                <h4 className="text-lg font-semibold">kampus xyz Kampus Ganesha</h4>
                                <p className="text-sm text-gray-700 mb-4">Sebagai kampus utama kampus xyz, Kampus Ganesha memiliki luas sekitar 28 hektar...</p>
                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gray-400" /> <span>Jl. Ganesa No. 10 Coblong, Kota Bandung, Jawa Barat</span></div>
                                    <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gray-400" /> <span>+62811-210-1920</span></div>
                                    <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-gray-400" /> <span>humas@kampusxyz.ac.id</span></div>
                                    <button onClick={() => setIsTourOpen(true)} className="mt-4 px-4 py-2 rounded-full border border-[#069dd8] text-[#069dd8] hover:bg-[#069dd8]/10">Virtual Tour kampus xyz Kampus Ganesha</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {isTourOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsTourOpen(false)} />
                            <div className="relative w-[92%] max-w-4xl mx-auto">
                                <div className="bg-white rounded-[12px] overflow-hidden shadow-lg">
                                    <div className="flex items-center justify-between px-4 py-2 bg-white">
                                        <div className="text-sm font-medium">Virtual Tour Kampus Ganesha</div>
                                        <button aria-label="Close tour" className="w-8 h-8 rounded-full bg-[#069dd8] text-white flex items-center justify-center" onClick={() => setIsTourOpen(false)}>×</button>
                                    </div>
                                    <div className="relative" style={{ paddingTop: '56.25%' }}>
                                        <iframe
                                            className="absolute left-0 top-0 w-full h-full"
                                            src={`https://www.youtube.com/embed/${tourVideoId}?autoplay=1`}
                                            title="Virtual Tour"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <section className="bg-gradient-to-r from-[#0b78c4] to-[#0660a6] rounded-[12px] p-8 text-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">Jelajahi Kampus Teknik Terbaik di Indonesia</h3>
                                <p className="text-sm opacity-90">Kunjungi situs kami untuk informasi lebih lanjut mengenai program dan fasilitas.</p>
                            </div>
                            <div>
                                <button className="bg-white text-[#0660a6] rounded-full px-4 py-2">Kunjungi Situs Kami</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </MainLayout>
    );
};

export default About;
