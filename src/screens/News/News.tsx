import { Calendar as CalendarIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Badge } from "../../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Card } from "../../components/ui/card";

type NewsItem = {
    id: string;
    slug?: string;
    title: string;
    category: string;
    date: string;
    image?: string;
};

const sampleImages = [
    'https://picsum.photos/id/1018/1200/800',
    'https://picsum.photos/id/1025/1200/800',
    'https://picsum.photos/id/1035/1200/800',
    'https://picsum.photos/id/1043/1200/800',
];

const sampleNews: NewsItem[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `news-${i + 1}`,
    slug: `news-${i + 1}`,
    title: i % 3 === 0 ? "Wisuda Kedua ITB Tahun Akademik 2023/2024" : i % 3 === 1 ? "Sosialisasi SNBP, SNBT, dan Penerimaan Mahasiswa Baru" : "Beasiswa LPDP ITB Batch 2 Khusus Pendaftar Daerah",
    category: i % 3 === 0 ? "Wisuda" : i % 3 === 1 ? "Sosialisasi" : "Beasiswa",
    date: ["20 Mei 2024", "6 Mei 2024", "19 Juni 2024"][i % 3],
    image: sampleImages[i % sampleImages.length],
}));

export const News = (): JSX.Element => {
    const [query, setQuery] = useState("");

    const filtered = sampleNews.filter(n => n.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <MainLayout>
            <div className="mx-auto max-w-[1200px] w-full px-6 py-10">
                <div className="mb-6">
                    <Breadcrumb>
                        <BreadcrumbList className="gap-1 items-center">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full  text-[#069dd8]">Beranda</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <ChevronRightIcon className="w-4 h-4" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Berita dan Acara</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <h1 className="text-3xl font-bold mb-6">Berita & Acara Terkini</h1>

                <div className="flex items-center justify-between gap-4 mb-6">
                    <div />
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 ">
                            <div className="flex items-center gap-2 w-full px-4 py-2 rounded-full border border-solid border-[#e6e6e6] bg-white">
                                <input type="text" placeholder="Pilih Tanggal" className="border-0 p-0 h-6" />
                                <CalendarIcon className="w-5 h-5 text-[#b3b3b3]" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 w-[320px]">
                            <div className="flex items-center gap-2 w-full px-4 py-2 rounded-full border border-solid border-[#e6e6e6] bg-white">
                                <SearchIcon className="w-5 h-5 text-[#b3b3b3]" />
                                <input type="text" value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} placeholder="Cari Berita & Acara" className="border-0 p-0 h-6" />
                            </div>
                        </div>
                    </div>
                </div>

                {query && (
                    <div className="mb-6 text-sm text-[#808080]">Hasil pencarian untuk kata "<span className="text-[#069dd8] font-medium">{query}</span>" ({filtered.length} Hasil)</div>
                )}

                {query && filtered.length === 0 ? (
                    <div className="w-full py-12 flex flex-col items-center">
                        <img src="/not-found.png" alt="Not found" className="w-[420px] mb-6" />
                        <h3 className="text-xl font-semibold mb-2">Hasil Tidak Ditemukan</h3>
                        <p className="text-sm text-[#808080] text-center max-w-[560px]">Maaf, kami tidak dapat menemukan hasil yang sesuai. Silakan coba dengan kata kunci lain.</p>
                    </div>
                ) : (
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filtered.map(item => (
                        <Link key={item.id} to={`/news/${item.slug}`} className="block">
                            <Card className="rounded-[16px] shadow-[0px_10px_30px_rgba(0,0,0,0.06)] overflow-visible pb-8 hover:shadow-xl transition-shadow">
                                <div className="relative">
                                    <div className="h-56 w-full overflow-hidden rounded-t-[16px] relative">
                                        <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                                        {/* gradient overlay to blend into white panel */}
                                        <div className="absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />
                                    </div>

                                    <div className="absolute left-4 top-4">
                                        <Badge className="bg-[#e6fbf7] text-[#27ae60]">{item.category}</Badge>
                                    </div>

                                    <div className="absolute w-full left-4 right-4 -bottom-6">
                                        <div className="bg-white rounded-[12px] p-4 shadow-lg max-w-[calc(100%-32px)]">
                                            <h3 className="font-semibold text-[#333333] text-base h-[48px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">{item.title}</h3>
                                            <div className="mt-3 flex items-center gap-2 text-sm text-[#808080]">
                                                <CalendarIcon className="w-4 h-4 text-[#808080]" />
                                                <span>{item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
                )}

                {!(query && filtered.length === 0) && (
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button className="w-[44px] h-[44px] rounded-full bg-[#d9d9d9] flex items-center justify-center text-white shadow">{'<'}</button>
                    <div className="inline-flex items-center gap-3">
                        <div className="w-[44px] h-[44px] flex items-center justify-center rounded border bg-white">1</div>
                        <div className="text-sm text-[#808080]">dari 10</div>
                    </div>
                    <button className="w-[44px] h-[44px] rounded-full bg-[#069dd8] flex items-center justify-center text-white shadow">{'>'}</button>
                </div>
                )}
            </div>
        </MainLayout>
    );
};

export default News;
