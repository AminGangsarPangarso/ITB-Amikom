import { GlobeIcon, MapPinIcon } from "lucide-react";
import React from "react";

const findLinks = [
  { text: "Tentang Kami", hasExternalIcon: false },
  { text: "Kunjungi Kampus XYZ", hasExternalIcon: true },
  { text: "Kebijakan Privasi", hasExternalIcon: false },
  { text: "Syarat dan Ketentuan", hasExternalIcon: false },
];

const supportLinks = [
  { text: "FAQ", hasExternalIcon: false },
  { text: "Pusat Bantuan SIX", hasExternalIcon: true },
];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1224px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-3">
                <div className="w-14 h-14 bg-[#005aab] rounded-[28px]" />
                <div className="font-semibold text-[#333333] text-sm leading-5">
                  Akademik dan Kemahasiswaan
                  <br />
                  Kampus XYZ
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[13px]">
              <div className="flex items-start gap-1.5">
                <MapPinIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0 mt-0.5" />
                <div className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#3d3d3d] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                  Kantor Direktorat Pendidikan Kampus XYZ
                  <br />
                  Gedung CCAR Kampus XYZ Lantai 4<br />
                  Jalan Tamansari Nomor 64 Bandung 40116
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <GlobeIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0" />
                <div className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#3d3d3d] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                  xyz.ac.id
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
              Temukan
            </h3>

            <nav className="flex flex-col gap-4">
              {findLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex items-start gap-1.5 hover:underline"
                >
                  <span className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                    {link.text}
                  </span>
                  {link.hasExternalIcon && (
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
              Bantuan &amp; Dukungan
            </h3>

            <nav className="flex flex-col gap-4">
              {supportLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex items-start gap-1.5 hover:underline"
                >
                  <span className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                    {link.text}
                  </span>
                  {link.hasExternalIcon && (
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12L12 4M12 4H6M12 4V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
              Media Sosial
            </h3>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200">
        <div className="max-w-[1224px] mx-auto px-4 py-4">
          <p className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#9e9e9e] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
            ©2024 Direktorat Pendidikan Akademik dan Kemahasiswaan Kampus
          </p>
        </div>
      </div>
    </footer>
  );
};
