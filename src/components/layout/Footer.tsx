import { GlobeIcon, MapPinIcon, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from 'react-router-dom';
import { SiLine, SiTiktok, SiRss } from 'react-icons/si';

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
    <footer className="w-full bg-[#f5f5f5]">
      <div className="max-w-[1224px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-14 h-14 bg-[#005aab] rounded-full flex-shrink-0" />
              <div className="font-semibold text-[#333333] text-sm leading-5">
                Akademik dan Kemahasiswaan
                <br />
                Kampus XYZ
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0 mt-0.5" />
                <div className="text-[#3d3d3d] text-sm leading-relaxed">
                  Kantor Direktorat Pendidikan ITB
                  <br />
                  Gedung CCAR ITB Lantai 4
                  <br />
                  Jalan Tamansari Nomor 64 Bandung 40116
                </div>
              </div>

              <div className="flex items-center gap-2">
                <GlobeIcon className="w-5 h-5 text-[#3d3d3d] flex-shrink-0" />
                <div className="text-[#3d3d3d] text-sm">
                  xyz.ac.id
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[#0660a6] text-base">
              Temukan
            </h3>

            <nav className="flex flex-col gap-3">
              {findLinks.map((link, index) => (
                link.external ? (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#333333] text-sm hover:underline transition-all"
                  >
                    <span>{link.text}</span>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-[#333333] text-sm hover:underline transition-all"
                  >
                    {link.text}
                  </Link>
                )
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[#0660a6] text-base">
              Bantuan &amp; Dukungan
            </h3>

            <nav className="flex flex-col gap-3">
              {supportLinks.map((link, index) => (
                link.external ? (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#333333] text-sm hover:underline transition-all"
                  >
                    <span>{link.text}</span>
                    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.url}
                    className="text-[#333333] text-sm hover:underline transition-all"
                  >
                    {link.text}
                  </Link>
                )
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[#0660a6] text-base">
              Media Sosial
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#a3d4f5] flex items-center justify-center hover:bg-[#7fc3f0] transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-300">
        <div className="max-w-[1224px] mx-auto px-4 py-4">
          <p className="text-[#9e9e9e] text-sm text-center md:text-left">
            ©2024 Direktorat Pendidikan Akademik dan Kemahasiswaan Kampus
          </p>
        </div>
      </div>
    </footer>
  );
};