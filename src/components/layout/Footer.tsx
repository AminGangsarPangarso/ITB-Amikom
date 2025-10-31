import { Facebook, GlobeIcon, Instagram, MapPinIcon, Twitter, Youtube } from "lucide-react";
import type { ComponentType } from 'react';
import { SiLine, SiRss, SiTiktok } from 'react-icons/si';
import { Link } from 'react-router-dom';

const findLinks = [
  { text: "Tentang Kami", url: "/about-us", external: false },
  { text: "Kunjungi Kampus XYZ", url: "https://kampusxyz.ac.id", external: true },
  { text: "Kebijakan Privasi", url: "/kebijakan-privasi", external: false },
  { text: "Syarat dan Ketentuan", url: "/terms", external: false },
];

const supportLinks = [
  { text: "FAQ", url: "/faq", external: false },
  { text: "Pusat Bantuan SIX", url: "https://helpdesk.six.kampusxyz.ac.id", external: true },
];

const socialMediaLinks = [
  { icon: Instagram, url: "https://instagram.com/kampusxyz", label: "Instagram" },
  { icon: Twitter, url: "https://twitter.com/kampusxyz", label: "Twitter" },
  { icon: SiLine, url: "https://line.me/kampusxyz", label: "LINE" },
  { icon: Facebook, url: "https://facebook.com/kampusxyz", label: "Facebook" },
  { icon: Youtube, url: "https://youtube.com/kampusxyz", label: "YouTube" },
  { icon: SiTiktok, url: "https://tiktok.com/@kampusxyz", label: "TikTok" },
  { icon: SiRss, url: "https://kampusxyz.ac.id/rss", label: "RSS Feed" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full relative isolate">
      <div className="absolute inset-x-0 bottom-0  h-[220px] pointer-events-none bg-[#0660A6]/30 blur-3xl  z-[-1]" />
      <div className="relative bg-[#E6EFF6]  z-30 container mx-auto px-4 py-12 rounded-t-[24px]">
        <div className=" backdrop-blur-sm  p-8 bottom-0 relative">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="flex flex-col w-full lg:w-[360px] gap-4">
              <div className="inline-flex items-center gap-3">
                <div className="w-14 h-14 bg-[#005aab] rounded-full" />
                <div>
                  <div className="font-semibold text-[#0f1724]">Akademik dan Kemahasiswaan</div>
                  <div className="text-sm text-[#0f1724]">Kampus XYZ</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-[#3d3d3d]">
                    Kantor Direktorat Pendidikan Kampus XYZ<br />
                    Gedung CCAR Kampus XYZ Lantai 4<br />
                    Jalan Tamansari Nomor 64 Bandung 40116
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <GlobeIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0" />
                  <div className="text-sm text-[#3d3d3d]">xyz.ac.id</div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-start justify-between gap-8">
              <div className="flex gap-12">
                <div>
                  <h3 className="font-h11-bold text-brand mb-4">Temukan</h3>
                  <nav className="flex flex-col gap-3">
                    {findLinks.map((link, idx) => (
                      link.external ? (
                        <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-sm text-[#333333] hover:underline inline-flex items-center gap-2">
                          <span>{link.text}</span>
                          <svg className="w-4 h-4 text-[#9aa7b6]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : (
                        <Link key={idx} to={link.url} className="text-sm text-[#333333] hover:underline">{link.text}</Link>
                      )
                    ))}
                  </nav>
                </div>

                <div>
                  <h3 className="font-h11-bold text-brand mb-4">Bantuan &amp; Dukungan</h3>
                  <nav className="flex flex-col gap-3">
                    {supportLinks.map((link, idx) => (
                      link.external ? (
                        <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-sm text-[#333333] hover:underline inline-flex items-center gap-2">
                          <span>{link.text}</span>
                          <svg className="w-4 h-4 text-[#9aa7b6]" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      ) : (
                        <Link key={idx} to={link.url} className="text-sm text-[#333333] hover:underline">{link.text}</Link>
                      )
                    ))}
                  </nav>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <h3 className="font-h11-bold text-brand mb-4">Media Sosial</h3>
                <div className="flex items-center gap-3">
                  {socialMediaLinks.map((social, idx) => {
                    const IconComponent = social.icon as ComponentType<{ className?: string }>;
                    return (
                      <a key={idx} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label} className="text-white p-2 rounded-full bg-[#5190C1] ro hover:text-brand">
                        <IconComponent className="w-6 h-6 " />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full border-t-2 z-30 bg-white border-gray-100  py-6">
        <div className="max-w-[1224px] mx-auto px-4">
          <p className="text-center text-sm text-[#9e9e9e]">©2024 Direktorat Pendidikan Akademik dan Kemahasiswaan Kampus</p>
        </div>
      </div>
    </footer>
  );
};