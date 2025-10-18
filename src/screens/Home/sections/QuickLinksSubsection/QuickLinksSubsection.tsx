import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const quickLinksData = [
  {
    title: "SIX  Kampus XYZ",
    description:
      "Temukan informasi dan peraturan akademik lebih cepat dan mudah",
    link: "Kunjungi Situs",
  },
  {
    title: "Edunex LMS  Kampus XYZ",
    description: "Akses materi pembelajaran secara fleksibel dan interaktif",
    link: "Kunjungi Situs",
  },
  {
    title: "Admission  Kampus XYZ",
    description: "Dapatkan informasi seputar pendaftaran program studi",
    link: "Kunjungi Situs",
  },
  {
    title: "Continuing & Professional\nEducation",
    description: "Ikuti pelatihan untuk wujudkan pendidikan yang berkelanjutan",
    link: "Kunjungi Situs",
  },
];

export const QuickLinksSubsection = (): JSX.Element => {
  return (
    <section className="relative overflow-hidden bg-white py-[60px] overflow-x-hidden">
      <div className="flex flex-col items-center gap-12 px-4">
        <div className="w-full container mx-auto">
        <h2 className="font-h5-bold font-[number:var(--h5-bold-font-weight)] text-[#3d3d3d] text-[length:var(--h5-bold-font-size)] text-center tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
          Quick Links Kampus XYZ
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full auto-rows-fr">
          {quickLinksData.map((item, index) => (
              <div key={index} className="h-full flex flex-col justify-between p-6 bg-white rounded shadow-sm">
              <div>
                <div className="w-full min-h-[26px] flex items-center justify-center">
                  <h3 className="font-h10-bold font-[number:var(--h10-bold-font-weight)] text-[#333333] text-[length:var(--h10-bold-font-size)] text-center tracking-[var(--h10-bold-letter-spacing)] leading-[var(--h10-bold-line-height)] [font-style:var(--h10-bold-font-style)] whitespace-pre-line">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-4 w-full font-body-text-16px-regular font-[number:var(--body-text-16px-regular-font-weight)] text-[#4c4c4c] text-[length:var(--body-text-16px-regular-font-size)] text-center tracking-[var(--body-text-16px-regular-letter-spacing)] leading-[var(--body-text-16px-regular-line-height)] [font-style:var(--body-text-16px-regular-font-style)]">
                  {item.description}
                </p>
              </div>

              <div className="mt-4">
                <Button asChild variant="link" className="inline-flex items-center gap-0.5 p-0 h-auto [font-family:'Inter',Helvetica] font-medium text-brand text-base">
                  <a href={item.title.includes('SIX') ? '/external/six' : item.title.includes('Admission') ? '/programs' : '#'}>
                    {item.link}
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};
