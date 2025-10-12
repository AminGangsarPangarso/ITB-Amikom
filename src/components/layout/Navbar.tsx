import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const topNavLinks = [{ label: "Berita dan Acara" }, { label: "Hubungi Kami" }];

const mainNavItems = [
  { label: "Program", hasDropdown: true },
  { label: "Akademik", hasDropdown: true },
  { label: "Kemahasiswaan", hasDropdown: true },
];

const programDropdownData = {
  sarjana: {
    title: "Sarjana",
    description: "Jenjang pendidikan awal bagi lulusan sekolah menengah atas, ditempuh dalam waktu 4 tahun.",
    programs: {
      itb: ["spesialisasi", "minor", "double-major", "multidisiplin"],
      international: ["students-exchange", "double-major", "summer-school"]
    },
    link: "/programs/sarjana"
  },
  pascasarjana: {
    title: "Pascasarjana", 
    description: "Jenjang pendidikan lanjutan yang mencakup program magister (2 tahun) dan doktor (3 tahun).",
    programs: {
      itb: ["Multidisiplin"],
      international: ["Students Exchange", "Double Major", "Summer School"]
    },
    link: "/programs/pascasarjana"
  },
  profesi: {
    title: "Profesi",
    description: "Jenjang pendidikan tinggi yang berfokus pada keahlian khusus setelah sarjana.",
    programs: {
      itb: [],
      international: []
    },
    link: "/programs/profesi"
  }
};

export const Navbar = (): JSX.Element => {
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  return (
    <nav className="w-full inline-flex flex-col items-start relative">
      <div className="w-full flex flex-col items-start">
        <div className="flex flex-col w-full items-end justify-center gap-2.5 px-[71px] py-2.5 bg-[#0660a6] border-b-[0.6px] [border-bottom-style:solid] border-[#cccccc]">
          <div className="inline-flex items-center justify-end gap-2.5 w-full max-w-[1224px]">
            <div className="flex w-full items-center gap-2.5">
              <div className="flex items-center gap-1 flex-1" />

              <div className="inline-flex items-center justify-center gap-6">
                {topNavLinks.map((link, index) => (
                  <button
                    key={index}
                    className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-white text-[length:var(--body-text-14px-regular-font-size)] text-center tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)] hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-[100px] shadow-blur-7px cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="flex items-center justify-center font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] font-body-text-14px-regular text-center tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                    Quick Links
                  </div>

                  <ChevronDownIcon className="w-5 h-5 text-[#333333]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-20 items-center justify-center gap-2.5 bg-white shadow-shadow-blur-2px">
          <div className="flex w-full max-w-[1224px] items-center justify-between px-4">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-3">
                <div className="w-14 h-14 bg-[#005aab] rounded-[28px]" />

                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#333333] text-sm tracking-[0] leading-5">
                  Akademik dan Kemahasiswaan
                  <br />
                  Kampus XYZ
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-end gap-5">
              <div className="inline-flex items-center gap-4 relative">
                {mainNavItems.map((item, index) => (
                  <div key={index} className="relative">
                    <button
                      className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                      onClick={() => {
                        if (item.label === "Program") {
                          setIsProgramDropdownOpen(!isProgramDropdownOpen);
                        }
                      }}
                    >
                      <div className="font-body-text-16px-regular font-[number:var(--body-text-16px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-16px-regular-font-size)] text-center tracking-[var(--body-text-16px-regular-letter-spacing)] leading-[var(--body-text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-text-16px-regular-font-style)]">
                        {item.label}
                      </div>

                      {item.hasDropdown && (
                        <ChevronDownIcon className={`w-6 h-6 text-[#333333] transition-transform ${
                          item.label === "Program" && isProgramDropdownOpen ? "rotate-180" : ""
                        }`} />
                      )}
                    </button>

                    {/* Program Dropdown */}
                    {item.label === "Program" && isProgramDropdownOpen && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-50">
                        <div className="bg-white rounded-[20px] shadow-[0_16px_64px_rgba(0,0,0,0.15)] p-6 w-[850px] border border-gray-100">
                          <div className="grid grid-cols-3 gap-6">
                            {Object.entries(programDropdownData).map(([key, program]) => (
                              <div key={key} className="flex flex-col border-r border-gray-100 last:border-r-0 pr-6 last:pr-0">
                                <Link 
                                  to={program.link}
                                  className="group mb-3"
                                  onClick={() => setIsProgramDropdownOpen(false)}
                                >
                                  <div className="flex items-center gap-2">
                                    <h3 className="text-[#069dd8] font-semibold text-lg group-hover:underline">
                                      {program.title}
                                    </h3>
                                    <svg className="w-4 h-4 text-[#069dd8] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                </Link>
                                
                                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                  {program.description}
                                </p>

                                <div className="gap-4 flex justify-start items-start">
                                  {program.programs.itb.length > 0 && (
                                    <div>
                                      <h4 className="text-xs font-medium text-gray-500 mb-1">Program ITB</h4>
                                      <div className="space-y-1">
                                        {program.programs.itb.map((prog, idx) => (
                                          <Link key={idx} to={`/programs/${key}/${prog}`} className="text-xs text-gray-700 hover:text-[#069dd8] cursor-pointer transition-colors block">
                                            {prog.replace(/-/g, " ")}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {program.programs.international.length > 0 && (
                                    <div>
                                      <h4 className="text-xs font-medium text-gray-500 mb-1">Program Internasional</h4>
                                      <div className="space-y-1">
                                        {program.programs.international.map((prog, idx) => (
                                          <Link key={idx} to={`/programs/${key}/${prog}`} className="text-xs text-gray-700 hover:text-[#069dd8] cursor-pointer transition-colors block">
                                            {prog.replace(/-/g, " ")}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <Link 
                                  to="/programs" 
                                  className="text-[#069dd8] text-xs font-medium mt-3 hover:underline inline-block"
                                  onClick={() => setIsProgramDropdownOpen(false)}
                                >
                                  Lihat Semua Program Studi
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center justify-end gap-3">
                <div className="inline-flex items-center justify-end gap-4">
                  <Button
                    variant="outline"
                    className="w-28 h-12 rounded-3xl border-[#069dd8] text-[#069dd8] font-body-text-16px-medium font-[number:var(--body-text-16px-medium-font-weight)] text-[length:var(--body-text-16px-medium-font-size)] tracking-[var(--body-text-16px-medium-letter-spacing)] leading-[var(--body-text-16px-medium-line-height)] [font-style:var(--body-text-16px-medium-font-style)] hover:bg-[#069dd8] hover:text-white"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isProgramDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsProgramDropdownOpen(false)}
        />
      )}
    </nav>
  );
};