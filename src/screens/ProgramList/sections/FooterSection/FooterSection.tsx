import { GlobeIcon, MapPinIcon } from "lucide-react";
import React from "react";

const footerLinks = {
  temukan: [
    { text: "Tentang Kami", hasArrow: false },
    { text: "Kunjungi Kampus XYZ", hasArrow: true },
    { text: "Kebijakan Privasi", hasArrow: false },
    { text: "Syarat dan Ketentuan", hasArrow: false },
  ],
  bantuan: [
    { text: "FAQ", hasArrow: false },
    { text: "Pusat Bantuan SIX", hasArrow: true },
  ],
};

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white">
      <img className="w-full h-full object-cover" alt="Bg" src="/bg.svg" />

      <div className="flex w-full max-w-[1224px] mx-auto px-4 py-12 items-start justify-between">
        <div className="flex flex-col w-full max-w-[353px] items-start gap-4">
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

          <div className="flex flex-col items-start gap-[13px] w-full">
            <div className="flex items-start gap-1.5 w-full">
              <MapPinIcon className="w-5 h-5 flex-shrink-0 text-[#3d3d3d]" />

              <div className="flex-1 font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#3d3d3d] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                Kantor Direktorat Pendidikan ITB
                <br />
                Gedung CCAR ITB Lantai 4<br />
                Jalan Tamansari Nomor 64 Bandung 40116
              </div>
            </div>

            <div className="flex items-center gap-1.5 w-full">
              <GlobeIcon className="w-5 h-5 flex-shrink-0 text-[#3d3d3d]" />

              <div className="flex-1 font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#3d3d3d] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                xyz.ac.id
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-4">
          <div className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
            Temukan
          </div>

          <div className="inline-flex flex-col items-start gap-4">
            {footerLinks.temukan.map((link, index) => (
              <div
                key={index}
                className="inline-flex items-start gap-1.5 cursor-pointer"
              >
                <div className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                  {link.text}
                </div>
                {link.hasArrow && (
                  <img
                    className="w-4 h-4"
                    alt="Ph arrow up light"
                    src="/ph-arrow-up-light.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-4">
          <div className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
            Bantuan &amp; Dukungan
          </div>

          <div className="inline-flex flex-col items-start gap-4">
            {footerLinks.bantuan.map((link, index) => (
              <div
                key={index}
                className="inline-flex items-start gap-1.5 cursor-pointer"
              >
                <div className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#333333] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
                  {link.text}
                </div>
                {link.hasArrow && (
                  <img
                    className="w-4 h-4"
                    alt="Ph arrow up light"
                    src="/ph-arrow-up-light.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-4">
          <div className="font-h11-bold font-[number:var(--h11-bold-font-weight)] text-[#0660a6] text-[length:var(--h11-bold-font-size)] tracking-[var(--h11-bold-letter-spacing)] leading-[var(--h11-bold-line-height)] [font-style:var(--h11-bold-font-style)]">
            Media Sosial
          </div>

          <img className="flex-shrink-0" alt="Sosmed" src="/sosmed.svg" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-white py-4 border-t">
        <div className="inline-flex items-center gap-2">
          <div className="font-body-text-14px-regular font-[number:var(--body-text-14px-regular-font-weight)] text-[#9e9e9e] text-[length:var(--body-text-14px-regular-font-size)] tracking-[var(--body-text-14px-regular-letter-spacing)] leading-[var(--body-text-14px-regular-line-height)] [font-style:var(--body-text-14px-regular-font-style)]">
            ©2024 Direktorat Pendidikan Akademik dan Kemahasiswaan Kampus
          </div>
        </div>
      </div>
    </footer>
  );
};
