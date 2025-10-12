import { MapPinIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const tabs = [
  { id: "student-exchange", label: "Student Exchange", active: true },
  { id: "double-degree", label: "Double Degree", active: false },
  { id: "summer-school", label: "Summer School", active: false },
];

const programs = [
  {
    id: 1,
    title: "Student Exchange Program 2024",
    university: "Chiba University",
    location: "Japan",
    badge: "Sarjana",
    image: "/frame-427322943-1.png",
  },
  {
    id: 2,
    title: "2022 Student Exchange in Croatia",
    university: "University of Zagreb",
    location: "Croatia",
    badge: "Sarjana",
    image: "/frame-427322943-1.png",
  },
  {
    id: 3,
    title: "Hokkaido University Student Exchange Program 2021",
    university: "Hokkaido University",
    location: "Japan",
    badge: "Sarjana",
    image: "/frame-427322943-1.png",
  },
];

export const ExternalProgramSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-end gap-8">
          <div className="flex flex-col items-start gap-2.5">
            <h2 className="w-full max-w-[566px] font-h5-bold font-[number:var(--h5-bold-font-weight)] text-[length:var(--h5-bold-font-size)] tracking-[var(--h5-bold-letter-spacing)] leading-[var(--h5-bold-line-height)] [font-style:var(--h5-bold-font-style)]">
              <span className="text-[#333333]">
                Perluas Wawasan dan Jaringan
                <br />
                melalui{" "}
              </span>
              <span className="text-[#0660a6]">Program Internasional</span>
            </h2>

            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-5">
                <nav className="flex items-start justify-center">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`flex items-center gap-2 px-3 py-2 ${
                        tab.active
                          ? "border-b-4 border-[#333333]"
                          : "border-b-2 border-[#cccccc]"
                      }`}
                    >
                      <span
                        className={`${
                          tab.active
                            ? "font-h10-bold font-[number:var(--h10-bold-font-weight)] text-[#333333] text-[length:var(--h10-bold-font-size)] tracking-[var(--h10-bold-letter-spacing)] leading-[var(--h10-bold-line-height)] [font-style:var(--h10-bold-font-style)]"
                            : "font-body-text-18px-regular font-[number:var(--body-text-18px-regular-font-weight)] text-[#808080] text-[length:var(--body-text-18px-regular-font-size)] tracking-[var(--body-text-18px-regular-letter-spacing)] leading-[var(--body-text-18px-regular-line-height)] [font-style:var(--body-text-18px-regular-font-style)]"
                        } text-center whitespace-nowrap`}
                      >
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="flex flex-col items-start justify-center gap-6 w-full">
                  <p className="font-body-text-16px-regular font-[number:var(--body-text-16px-regular-font-weight)] text-[#4c4c4c] text-[length:var(--body-text-16px-regular-font-size)] tracking-[var(--body-text-16px-regular-letter-spacing)] leading-[var(--body-text-16px-regular-line-height)] [font-style:var(--body-text-16px-regular-font-style)]">
                    Nikmati kesempatan belajar di luar negeri untuk mendapatkan
                    pengalaman baru dan mempelajari budaya lain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-end gap-6">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="relative w-72 h-[277px] bg-[#f4f4f4] rounded-[18px] overflow-hidden border-0"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[215px] rounded-[12.26px]">
                    <img
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-[12.26px]"
                      alt={program.title}
                      src={program.image}
                    />
                    <div className="absolute top-0 left-0 w-full h-full rounded-[17.99px] bg-[linear-gradient(180deg,rgba(244,244,244,0)_0%,rgba(244,244,244,1)_49%,rgba(244,244,244,1)_100%)]" />
                  </div>

                  <div className="absolute top-[146px] left-1/2 -translate-x-1/2 w-[266px] h-[121px] flex bg-white rounded-[18px] shadow-blur-4px">
                    <div className="flex p-4 w-full flex-col items-start gap-2">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex flex-col items-start gap-2.5 w-full">
                          <h3 className="w-full h-11 [font-family:'Inter',Helvetica] font-bold text-[#3d3d3d] text-base tracking-[0] leading-[22px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                            {program.title}
                          </h3>
                        </div>

                        <div className="flex flex-col items-start gap-1.5 w-full">
                          <div className="flex justify-center gap-2.5 w-full rounded-[5px] overflow-hidden items-center">
                            <div className="flex items-center justify-center flex-1 font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#4c4c4c] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                              {program.university}
                            </div>
                          </div>

                          <div className="flex gap-1 w-full rounded-[5px] overflow-hidden items-center">
                            <MapPinIcon className="w-4 h-4 text-[#808080]" />
                            <div className="flex items-center justify-center font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#808080] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                              {program.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Badge className="absolute top-[11px] left-[9px] h-6 gap-2.5 p-2 bg-[#c4e3d7] rounded-lg flex items-center justify-center overflow-hidden border-0 hover:bg-[#c4e3d7]">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#10995e] text-xs tracking-[0] leading-[normal]">
                      {program.badge}
                    </span>
                  </Badge>
                </CardContent>
              </Card>
            ))}

            <Card className="flex flex-col w-[286px] h-[277px] items-start gap-3 pt-6 pb-0 px-6 relative rounded-[25px] overflow-hidden shadow-[0px_2px_25px_#000e331a] bg-[linear-gradient(323deg,rgba(6,96,166,1)_0%,rgba(106,160,202,1)_100%)] border-0">
              <CardContent className="p-0 w-full h-full relative">
                <div className="absolute top-[50px] left-[71px] w-[280px] h-[280px] rounded-[140px] bg-[linear-gradient(75deg,rgba(21,106,172,0.36)_0%,rgba(0,103,171,1)_100%)]" />

                <h3 className="relative w-[218px] h-[60px] font-h9-bold font-[number:var(--h9-bold-font-weight)] text-white text-[length:var(--h9-bold-font-size)] tracking-[var(--h9-bold-letter-spacing)] leading-[var(--h9-bold-line-height)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] [font-style:var(--h9-bold-font-style)]">
                  Semua Program Student Exchange
                </h3>

                <div className="relative w-[135px] h-[135px] rounded-[67.5px] bg-[linear-gradient(2deg,rgba(36,123,190,0)_0%,rgba(48,123,181,1)_100%)]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
