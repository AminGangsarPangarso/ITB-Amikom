import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroUtamaSubsection = (): JSX.Element => {

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url(/image-20240322-193541-672-1.png)] bg-cover bg-center opacity-80 pointer-events-none" />



      {/* Main content: responsive flex with left text, center image, right controls */}
      <div className="relative max-w-[1200px] mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          {/* Left: Heading & CTA (narrower to give space to hero) */}
          <div className="w-full md:w-full flex flex-col items-start gap-5 z-10">
            <h1 className="text-2xl md:text-4xl font-semibold text-[#333333] leading-tight">
              Menggali Potensi Diri Mencapai Mimpi dan Meraih Prestasi
            </h1>

            <Button className="h-12 justify-center gap-2.5 px-4 bg-[#069dd8] rounded-[100px] hover:bg-[#069dd8]/90">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Jelajahi Program Studi
              </span>
            </Button>
          </div>

          {/* Center: Image(s) - responsive and not absolute (made wider) */}
          <div className="w-96 flex items-center justify-center z-10">
            {/* Decorative shapes (hidden on small screens) */}
            {/* <div className="hidden sm:block absolute -top-0 -6 left-1/2 transform -translate-x-1/2  h-auto">
              {decorativeShapes.map((shape, idx) => (
                <div
                  key={idx}
                  className={`${shape.className} ${shape.gradient
                      ? "bg-[linear-gradient(180deg,rgba(205,223,237,1)_0%,rgba(255,255,255,1)_100%)]"
                      : "bg-[#cddfed]"
                    } rounded-[28px] opacity-40 absolute`}
                />
              ))}

              {badges.map((badge, index) => (
                <div key={index} className={`${badge.className} absolute hidden md:block`}>
                  <div className="absolute top-0 left-0 w-full h-[73px] bg-white rounded-[25px] shadow-blur-2px" />
                  <div
                    className={`absolute ${badge.textClassName} bg-[linear-gradient(323deg,rgba(6,96,166,1)_0%,rgba(106,160,202,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] ${badge.multiline
                        ? "[font-family:'Inter',Helvetica] font-bold italic text-transparent text-base text-center tracking-[0] leading-[19px]"
                        : "font-h9-bold font-[number:var(--h9-bold-font-weight)] text-transparent text-[length:var(--h9-bold-font-size)] text-center tracking-[var(--h9-bold-letter-spacing)] leading-[var(--h9-bold-line-height)] [font-style:var(--h9-bold-font-style)]"
                      }`}
                  >
                    {badge.multiline ? (
                      <>
                        CARVE YOUR OWN
                        <br />
                        DREAM PATH
                      </>
                    ) : (
                      badge.text
                    )}
                  </div>
                </div>
              ))}
            </div> */}
            <div className="relative w-[360px] md:w-[560px]">
              <img src="/img-4941.png" alt="Illustration" className="w-full h-auto object-contain" />
              <img
                src="/group-427323111.png"
                alt="Group"
                className="hidden sm:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[140px] md:w-[220px] h-auto"
              />
            </div>
          </div>

          {/* Right: Carousel controls */}
          <div className=" flex flex-col items-center md:items-end gap-4 z-10">
            <nav className="inline-flex flex-col items-center justify-center gap-4">
              <Button size="icon" className="w-[44px] h-[44px] bg-[#069dd8] rounded-full shadow-[0px_1.75px_17.49px_#0000001a] hover:bg-[#069dd8]/90">
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>

              <div className="relative w-8 h-8 bg-[#e5e5e580] rounded-full backdrop-blur-md flex items-center justify-center">
                <div className="inline-flex items-center gap-1 text-blue-Kampus XYZ text-sm">
                  <span className="font-medium">2</span>
                  <span>/</span>
                  <span className="text-[10px]">3</span>
                </div>
              </div>

              <Button size="icon" className="w-[44px] h-[44px] bg-[#069dd8] rounded-full shadow-[0px_1.75px_17.49px_#0000001a] hover:bg-[#069dd8]/90">
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
