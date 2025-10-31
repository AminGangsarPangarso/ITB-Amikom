import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";

const heroSlides = [
  {
    bg: "/image-20240322-193541-672-1.png",
    title: "Menggali Potensi Diri Mencapai Mimpi dan Meraih Prestasi",
    button: { label: "Jelajahi Program Studi", href: "/programs" },
    image: "/img-4941.png",
    overlay: "/group-427323111.png",
    overlayClass: "hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[140px] md:w-[220px] h-auto",
  },
  {
    bg: "/image-20240322-193541-672-1.png",
    title: "Temukan Inovasi Pembelajaran dalam Berbagai Skema Program",
    button: { label: "Jelajahi Skema Program", href: "/programs" },
    image: "/hero-2.png",
    overlay: null,
    overlayClass: "",
  },
  {
    bg: "/image-20240322-193541-672-1.png",
    title: (
      <>
        <span className="text-blue-700 font-bold">Carve Your Own Dream Path</span><br />
        <span className="text-[#333]">through the Journey of Innovation and Collaboration</span>
      </>
    ),
    button: { label: "Tentang Kami", href: "/about" },
    image: "/hero-3.png",
    overlay: null,
    overlayClass: "",
  },
];

export const HeroUtamaSubsection = (): JSX.Element => {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  const handlePrev = () => setActive((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  const handleNext = () => setActive((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none" style={{ backgroundImage: `url(${slide.bg})` }} />

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          {/* Left: Heading & CTA */}
          <div className="w-full md:w-full flex flex-col items-start gap-5 z-10">
            <h1 className="text-2xl md:text-4xl font-semibold text-[#333333] leading-tight">
              {slide.title}
            </h1>
            <Button asChild className="h-12 justify-center gap-2.5 px-4 bg-[#069dd8] rounded-[100px] hover:bg-[#069dd8]/90">
              <a href={slide.button.href} className="[font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">{slide.button.label}</a>
            </Button>
          </div>

          <div className="w-96 flex items-center justify-center z-10">
            <div className="relative w-[360px] md:w-[560px]">
              <img src={slide.image} alt="Illustration" className="w-full h-auto object-contain" />
              {slide.overlay && (
                <img src={slide.overlay} alt="Group" className={slide.overlayClass} />
              )}
            </div>
          </div>

          <div className=" flex flex-col items-center md:items-end gap-4 z-10">
            <nav className="inline-flex flex-col items-center justify-center gap-4">
              <Button size="icon" className="w-[44px] h-[44px] bg-[#069dd8] rounded-full shadow-[0px_1.75px_17.49px_#0000001a] hover:bg-[#069dd8]/90" onClick={handlePrev} aria-label="Sebelumnya">
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>

              <div className="relative w-8 h-8 bg-[#e5e5e580] rounded-full backdrop-blur-md flex items-center justify-center">
                <div className="inline-flex items-center gap-1 text-blue-Kampus-XYZ text-sm">
                  <span className="font-medium">{active + 1}</span>
                  <span>/</span>
                  <span className="text-[10px]">{heroSlides.length}</span>
                </div>
              </div>

              <Button size="icon" className="w-[44px] h-[44px] bg-[#069dd8] rounded-full shadow-[0px_1.75px_17.49px_#0000001a] hover:bg-[#069dd8]/90" onClick={handleNext} aria-label="Berikutnya">
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
