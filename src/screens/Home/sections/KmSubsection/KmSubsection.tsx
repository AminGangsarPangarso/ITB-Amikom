import { CalendarIcon } from "lucide-react";
import React from "react";

const menuItems = [
  {
    title: "Pengabdian\nMasyarakat",
    active: true,
    hasIcon: true,
  },
  {
    title: "Wirausaha",
    active: false,
    hasIcon: false,
  },
  {
    title: "Kompetisi",
    active: false,
    hasIcon: false,
  },
  {
    title: "Magang",
    active: false,
    hasIcon: false,
  },
];

const newsItems = [
  {
    date: "6 Mei 2024",
    title: "Pengabdian Masyarakat Bottom Up 2024",
  },
  {
    date: "4 Apr 2024",
    title: "Pengabdian Masyarakat di Desa Mekarmaju",
  },
  {
    date: "8 Agu 2023",
    title: "Pengabdian Masyarakat bersama Kemendes PDTT",
  },
];

export const KmSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        <h2 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-[#333333] text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
          Kegiatan Kemahasiswaan
        </h2>

        <div className="flex items-start justify-between gap-8">
          <nav className="flex flex-col gap-5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index === 0 ? "border-l-4 pl-4 border-[#069dd8]" : ""
                  }`}
              >
                <button
                  className={`font-h10-bold font-[number:var(--h10-bold-font-weight)] text-[length:var(--h10-bold-font-size)] leading-[var(--h10-bold-line-height)] tracking-[var(--h10-bold-letter-spacing)] [font-style:var(--h10-bold-font-style)] text-left whitespace-pre-line ${item.active ? "text-[#069dd8]" : "text-[#51bae4]/70"
                    }`}
                >
                  {item.title}
                </button>
              </div>
            ))}
          </nav>

          <div className="flex flex-col w-[467px] gap-8">
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#4c4c4c] text-lg tracking-[0] leading-[26px]">
              Kampus XYZ berkontribusi untuk pengembangan dan pemberdayaan masyarakat
              melalui KKN Tematik, Layanan Masyarakat seperti pelatihan,
              Pengembangan Masyarakat, dan Kemitraan.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <h3 className="font-h10-bold font-[number:var(--h10-bold-font-weight)] text-[#4c4c4c] text-[length:var(--h10-bold-font-size)] tracking-[var(--h10-bold-letter-spacing)] leading-[var(--h10-bold-line-height)] [font-style:var(--h10-bold-font-style)]">
                  Informasi Terbaru
                </h3>

                <div className="flex flex-col gap-2">
                  {newsItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="flex w-[121px] items-center gap-1.5">
                        <CalendarIcon className="w-5 h-5 text-[#666666]" />
                        <span className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#666666] text-[length:var(--body-text-14px-regular-font-size)] leading-[var(--body-text-14px-regular-line-height)] tracking-[var(--body-text-14px-regular-letter-spacing)] [font-style:var(--body-text-14px-regular-font-style)]">
                          {item.date}
                        </span>
                      </div>
                      <span className="flex-1 font-h11-semibold font-[number:var(--h11-semibold-font-weight)] text-[#4c4c4c] text-[length:var(--h11-semibold-font-size)] leading-[var(--h11-semibold-line-height)] tracking-[var(--h11-semibold-letter-spacing)] [font-style:var(--h11-semibold-font-style)]">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="/programs" className="[font-family:'Inter',Helvetica] font-medium text-brand text-base text-center tracking-[0] leading-[22px] underline">Lihat Semua Program Pengabdian Masyarakat</a>
            </div>
          </div>

          <div className="w-[459px] h-[344px] bg-[#c5c5c5] rounded-[18px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Image"
              src="/image-169.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
