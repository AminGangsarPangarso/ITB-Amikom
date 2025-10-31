import { CalendarIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

const sampleImages = [
  'https://picsum.photos/id/1018/1200/800',
  'https://picsum.photos/id/1025/1200/800',
  'https://picsum.photos/id/1035/1200/800',
  'https://picsum.photos/id/1043/1200/800',
];

const newsData = [
  {
    title: "Beasiswa LPDP Kampus XYZ Batch 2 Khusus Pendaftar Daerah Afirmasi",
    date: "19 Juni 2024",
    category: "Beasiswa",
    slug: "beasiswa-lpdp-batch-2",
    image: sampleImages[0],
  },
  {
    title: "Informasi Wisuda Pertama Tahun Akademik 2023/2024",
    date: "20 Mei 2024",
    category: "Wisuda",
    slug: "wisuda-pertama-2023-2024",
    image: sampleImages[1],
  },
  {
    title:
      "Sosialisasi SNBP, SNBT, dan Penerimaan Mahasiswa Baru 2024 di Kampus XYZ Kampus Cirebon",
    date: "6 Mei 2024",
    category: "Sosialisasi",
    slug: "sosialisasi-snbp-snbt-2024",
    image: sampleImages[2],
  },
  {
    title:
      "Penerbitan Ijazah April 2024 untuk Lulusan Yudisium Februari-Maret 2024",
    date: "27 April 2024",
    category: "Ijazah",
    slug: "penerbitan-ijazah-april-2024",
    image: sampleImages[3],
  },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 w-full py-10">
      <div className="flex flex-col items-center gap-10 w-full container mx-auto px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {newsData.map((item, index) => (
            <Link key={index} to={`/news/${item.slug}`} className="block">
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
      </div>
      <Button asChild variant="outline" className="h-12 px-4 py-4 rounded-[100px] border-[#069dd8] text-[#069dd8] hover:bg-[#069dd8]/10 hover:text-[#069dd8]">
        <a href="/news" className="[font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">Semua Berita dan Acara</a>
      </Button>
    </section>
  );
};
