import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/home/separator";

const academicScheduleData = [
  {
    date: "20 Mei - 4 Jun 2024",
    description:
      "Pengisian Kuesioner Evaluasi Perkuliahan Semester II-2023/2024",
  },
  {
    date: "20 Mei - 20 Jun 2024",
    description:
      "Periode Pembukaan Kelas/Mata Kuliah Semester Pendek 2023/2024 oleh Program Studi",
  },
  {
    date: "22 Mei 2024",
    description:
      "Batas Waktu Pemenuhan Persyaratan Administrasi Kelulusan untuk Yudisium Mei 2024",
  },
  {
    date: "24 Mei 2024",
    description: "Hari Terakhir Masa Kuliah Semester II-2023/2024",
  },
];

const academicServicesData = [
  {
    title: "Dokumen Kemahasiswaan",
    icon: true,
  },
  {
    title: "Dokumen Wisuda",
    icon: true,
  },
  {
    title: "Dokumen Registrasi dan Aktivasi Akun",
    icon: true,
  },
  {
    title: "Dokumen Alumni",
    icon: true,
  },
];

export const AltSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1222px] mx-auto px-4 flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-12 flex-1">
          <h2 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-[#3d3d3d] text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
            Jadwal Akademik 2023/2024
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {academicScheduleData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex gap-3">
                    <div className="w-[210px] flex-shrink-0">
                      <div className="font-h10-bold font-[number:var(--h10-bold-font-weight)] text-[#333333] text-[length:var(--h10-bold-font-size)] tracking-[var(--h10-bold-letter-spacing)] leading-[var(--h10-bold-line-height)] [font-style:var(--h10-bold-font-style)]">
                        {item.date}
                      </div>
                    </div>
                    <div className="flex-1 font-body-text-16px-regular font-[number:var(--body-text-16px-regular-font-weight)] text-[#4c4c4c] text-[length:var(--body-text-16px-regular-font-size)] tracking-[var(--body-text-16px-regular-letter-spacing)] leading-[var(--body-text-16px-regular-line-height)] [font-style:var(--body-text-16px-regular-font-style)]">
                      {item.description}
                    </div>
                  </div>
                  {index < academicScheduleData.length - 1 && (
                    <Separator className="bg-gray-200" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <Button
              variant="outline"
              className="h-auto px-4 py-4 rounded-[100px] border-[#069dd8] text-[#069dd8] hover:bg-[#069dd8] hover:text-white font-medium text-base w-fit"
            >
              Semua Jadwal Akademik
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full lg:w-[494px]">
          <h2 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-[#3d3d3d] text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
            Layanan Akademik Kampus XYZ
          </h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {academicServicesData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex gap-3 items-center cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="w-7 h-7 flex-shrink-0">
                      <img
                        className="w-full h-full object-contain"
                        alt="Service icon"
                      />
                    </div>
                    <div className="flex-1 font-h10-semibold font-[number:var(--h10-semibold-font-weight)] text-[#333333] text-[length:var(--h10-semibold-font-size)] tracking-[var(--h10-semibold-letter-spacing)] leading-[var(--h10-semibold-line-height)] [font-style:var(--h10-semibold-font-style)]">
                      {item.title}
                    </div>
                  </div>
                  {index < academicServicesData.length - 1 && (
                    <Separator className="bg-gray-200" />
                  )}
                </React.Fragment>
              ))}
            </div>

            <Button
              variant="outline"
              className="h-auto px-4 py-4 rounded-[100px] border-[#069dd8] text-[#069dd8] hover:bg-[#069dd8] hover:text-white font-medium text-base w-fit"
            >
              Semua Layanan Akademik
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
