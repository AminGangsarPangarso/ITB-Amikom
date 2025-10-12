import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const topNavLinks = [{ label: "Berita dan Acara" }, { label: "Hubungi Kami" }];

const mainNavItems = [
  { label: "Program" },
  { label: "Akademik" },
  { label: "Kemahasiswaan" },
];

export const NavbarMenuPublikSubsection = (): JSX.Element => {
  return (
    <nav className="w-full inline-flex flex-col items-start">
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
              <div className="inline-flex items-center gap-4">
                {mainNavItems.map((item, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity"
                  >
                    <div className="font-body-text-16px-regular font-[number:var(--body-text-16px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-16px-regular-font-size)] text-center tracking-[var(--body-text-16px-regular-letter-spacing)] leading-[var(--body-text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-text-16px-regular-font-style)]">
                      {item.label}
                    </div>

                    <ChevronDownIcon className="w-6 h-6 text-[#333333]" />
                  </button>
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
    </nav>
  );
};
