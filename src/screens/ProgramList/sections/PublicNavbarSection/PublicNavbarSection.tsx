import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const topNavLinks = [{ label: "Berita dan Acara" }, { label: "Hubungi Kami" }];

const mainNavLinks = [
  { label: "Program" },
  { label: "Akademik" },
  { label: "Kemahasiswaan" },
];

export const PublicNavbarSection = (): JSX.Element => {
  return (
    <header className="w-full flex flex-col">
      <nav className="flex flex-col items-center justify-center gap-2.5 px-[71px] py-2.5 bg-[#0660a6] border-b-[0.6px] border-solid border-[#cccccc]">
        <div className="w-full max-w-[1224px] flex items-center justify-end gap-2.5">
          <div className="flex items-center gap-1 flex-1" />

          <div className="inline-flex items-center justify-center gap-6">
            {topNavLinks.map((link, index) => (
              <button
                key={index}
                className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-white text-[length:var(--body-text-14px-regular-font-size)] text-center tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]"
              >
                {link.label}
              </button>
            ))}

            <img
              className="flex-shrink-0"
              alt="Frame"
              src="/frame-427328239.svg"
            />

            <Button
              variant="secondary"
              className="h-auto inline-flex items-center gap-1 px-2.5 py-1.5 bg-white rounded-[100px] shadow-blur-7px hover:bg-white"
            >
              <img className="w-5 h-5" alt="Frame" src="/frame-427328268.svg" />

              <span className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] text-center tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                Quick Links
              </span>

              <ChevronDownIcon className="w-5 h-5 text-[#333333]" />
            </Button>
          </div>
        </div>
      </nav>

      <nav className="flex flex-col h-20 items-center justify-center gap-2.5 bg-white shadow-shadow-blur-2px">
        <div className="w-full max-w-[1224px] flex items-center justify-between">
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
              {mainNavLinks.map((link, index) => (
                <button key={index} className="inline-flex items-center gap-1">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#333333] text-base text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    {link.label}
                  </span>

                  <ChevronDownIcon className="w-6 h-6 text-[#333333]" />
                </button>
              ))}
            </div>

            <div className="inline-flex items-center justify-end gap-3">
              <div className="inline-flex items-center justify-end gap-4">
                <Button
                  variant="outline"
                  className="h-12 w-28 gap-2.5 p-4 rounded-3xl border border-solid border-[#069dd8] bg-transparent hover:bg-transparent"
                >
                  <span className="font-body-text-16px-medium font-[number:var(--body-text-16px-medium-font-weight)] text-[#069dd8] text-[length:var(--body-text-16px-medium-font-size)] text-center tracking-[var(--body-text-16px-medium-letter-spacing)] leading-[var(--body-text-16px-medium-line-height)] whitespace-nowrap [font-style:var(--body-text-16px-medium-font-style)]">
                    Login
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
