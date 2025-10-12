import { CalendarIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const newsData = [
  {
    title: "Beasiswa LPDP ITB Batch 2 Khusus Pendaftar Daerah Afirmasi",
    date: "19 Juni 2024",
    badge: "Beasiswa",
    gradientOverlay:
      "bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)]",
  },
  {
    title: "Informasi Wisuda Pertama Tahun Akademik 2023/2024",
    date: "20 Mei 2024",
    badge: "Wisuda",
    gradientOverlay:
      "bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)]",
  },
  {
    title:
      "Sosialisasi SNBP, SNBT, dan Penerimaan Mahasiswa Baru 2024 di ITB Kampus Cirebon",
    date: "6 Mei 2024",
    badge: "Sosialisasi",
    gradientOverlay:
      "bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%),linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_100%)]",
  },
  {
    title:
      "Penerbitan Ijazah April 2024 untuk Lulusan Yudisium Februari-Maret 2024",
    date: "27 April 2024",
    badge: "Ijazah",
    gradientOverlay:
      "bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%)]",
  },
];

export const FrameSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-10 w-full py-10">
      <div className="flex flex-col items-center gap-10 w-full max-w-[1224px]">
        <div className="grid grid-cols-4 gap-6 w-full">
          {newsData.map((item, index) => (
            <div key={index} className="relative w-full h-[277px]">
              <div className="absolute top-0 left-0 w-full h-[216px]">
                <div
                  className={`w-full h-[278px] rounded-[18px] ${item.gradientOverlay}`}
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-[217px] rounded-[17.99px_17.99px_0px_0px] bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%)]" />

              <Card className="absolute top-[146px] left-1/2 -translate-x-1/2 w-[266px] h-[121px] shadow-blur-2px border-0">
                <CardContent className="flex flex-col gap-2 p-4 h-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="h-[66px]">
                      <h3 className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#333333] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)] line-clamp-2 overflow-hidden text-ellipsis">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-[#666666]" />
                    <span className="flex-1 font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#666666] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                      {item.date}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Badge className="absolute top-[11px] left-2.5 h-[23px] px-[7.83px] py-[7.83px] bg-[#c4e3d7] hover:bg-[#c4e3d7] rounded-[7.83px] border-0">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#10995e] text-[11.7px] tracking-[0] leading-normal whitespace-nowrap">
                  {item.badge}
                </span>
              </Badge>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="h-12 px-4 py-4 rounded-[100px] border-[#069dd8] text-[#069dd8] hover:bg-[#069dd8]/10 hover:text-[#069dd8]"
        >
          <span className="[font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
            Semua Berita dan Acara
          </span>
        </Button>
      </div>
    </section>
  );
};
