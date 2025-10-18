import { ChevronRightIcon } from "lucide-react";
import React from 'react';
import { MainLayout } from "../../components/layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
// Brand icons
import { SiInstagram, SiStackoverflow, SiWhatsapp, SiZoom } from 'react-icons/si';

export const Contact = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-[1200px] w-full px-6 py-10">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList className="gap-1">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Hubungi Kami</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-3xl font-bold mb-8">Temukan Informasi Selengkapnya melalui Kontak Kami</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="lg:col-span-2 relative bg-red">
            <div className="rounded-2xl h-fit overflow-hidden">
              <div className="">
                <img src="/contact.png" alt="Gedung Direktorat Pendidikan kampus xyz" className="w-full object-cover" />
                <div className="absolute left-6 bottom-6  p-4 ">
                  <h3 className="font-semibold text-lg">Direktorat Pendidikan kampus xyz</h3>
                  <a className="text-sm text-[#069dd8] underline" href="#">Jalan Tamansari Nomor 64 Bandung 40116</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact card */}
          <div className="lg:col-span-1">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#01458E] rounded-full flex items-center justify-center text-white">
                      {React.createElement(SiWhatsapp as any, { className: 'w-5 h-5', 'aria-hidden': true })}
                      <span className="sr-only">Whatsapp</span>
                    </div>
                    <div>
                      <div className="font-semibold">Whatsapp</div>
                      <a href="tel:+6281121020" className="text-sm text-[#069dd8]">+62811-210-1920</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#01458E] rounded-full flex items-center justify-center text-white">
                      {React.createElement(SiInstagram as any, { className: 'w-5 h-5', 'aria-hidden': true })}
                      <span className="sr-only">Instagram</span>
                    </div>
                    <div>
                      <div className="font-semibold">Instagram</div>
                      <a href="https://instagram.com/akademik_kampusxyz" className="text-sm text-[#069dd8]">@akademik_kampusxyz</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#01458E] rounded-full flex items-center justify-center text-white">
                      {React.createElement(SiZoom as any, { className: 'w-5 h-5', 'aria-hidden': true })}
                      <span className="sr-only">Zoom</span>
                    </div>
                    <div>
                      <div className="font-semibold">Layanan Zoom</div>
                      <div className="text-sm text-[#808080]">Hari: Selasa dan Kamis<br/>Jam: 13.30 s.d 14.30 WIB</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#01458E] rounded-full flex items-center justify-center text-white">
                      {React.createElement(SiStackoverflow as any, { className: 'w-5 h-5', 'aria-hidden': true })}
                      <span className="sr-only">Pusat Bantuan</span>
                    </div>
                    <div>
                      <div className="font-semibold">Pusat Bantuan SIX</div>
                      <a className="text-sm text-[#069dd8]" href="https://helpdesk.six.kampusxyz.ac.id">helpdesk.six.kampusxyz.ac.id</a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-[#01458E] hover:bg-[#069dd8]/90 rounded-[25px] text-white">Hubungi Sekarang</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Contact;
