import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Badge } from "../../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { getApplications, type Application } from "../../lib/applicationStorage";

const statusConfig = {
  "sedang-ditinjau": {
    label: "Sedang Ditinjau",
    bgColor: "bg-gray-200",
    textColor: "text-gray-700",
    buttonLabel: "Sedang Ditinjau",
    buttonBg: "bg-gray-300",
  },
  "program-selesai": {
    label: "Program Selesai",
    bgColor: "bg-[#e6f7ff]",
    textColor: "text-[#069dd8]",
    buttonLabel: "Program Selesai",
    buttonBg: "bg-[#069dd8]",
  },
  "permintaan-ditolak": {
    label: "Permintaan Ditolak",
    bgColor: "bg-[#ffe6e6]",
    textColor: "text-[#ff4d4f]",
    buttonLabel: "Permintaan Ditolak",
    buttonBg: "bg-[#ff4d4f]",
  },
};

export const Profile = (): JSX.Element => {
  const [applications] = useState<Application[]>(getApplications());

  return (
    <MainLayout>
      <div className="mx-auto max-w-[1200px] w-full px-6 py-10">
        {/* Breadcrumb */}
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
                <BreadcrumbPage>Profil</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-3xl font-bold text-[#333] mb-8">Profil Saya</h1>

        {/* Profile Info - No Card */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                 <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-lg">IM</span>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#333]">Ismail Mail</h2>
                <div className="text-sm text-[#808080]">15522024</div>
                <div className="text-sm text-[#808080]">Fakultas Teknik Sipil & Kelautan / Teknik Kelautan</div>
              </div>
            </div>
            <button className="text-[#ff4d4f] hover:underline font-medium">
              Keluar
            </button>
          </div>
        </div>

        {/* Program Aktif Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-xl font-semibold text-[#333]">Program Aktif</h2>
          </div>
          <div className="text-center py-8 text-[#808080]">
            Belum ada program aktif
          </div>
        </div>

        {/* Status Program Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6V10L13 13M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-xl font-semibold text-[#333]">Status Program</h2>
          </div>
            {applications.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-[#808080] text-lg mb-4">Belum ada program yang didaftarkan</div>
                <Button asChild className="bg-[#069dd8] hover:bg-[#069dd8]/90 rounded-[25px]">
                  <Link to="/programs">Jelajahi Program</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app) => {
                  const config = statusConfig[app.status];
                  return (
                    <Card key={app.id} className="rounded-2xl shadow-[0px_2px_25px_#000e331a] border-0">
                      <CardContent className="flex flex-col gap-3 pt-4 pb-0 px-4">
                        <div className="flex flex-col gap-4 pt-0 pb-4">
                          <Badge className={`h-6 w-fit bg-[#ffefd4] text-[#e99400] rounded-lg`}>
                            {app.programDegree}
                          </Badge>
                          <h4 className="font-bold text-[#333333] text-base min-h-[43px]">
                            {app.programTitle}
                          </h4>
                          <div className="flex flex-col gap-1">
                            <span className="text-sm text-[#333333]">
                              {app.faculty}
                            </span>
                          </div>
                          <Button 
                            className={`h-10 w-full ${config.buttonBg} hover:${config.buttonBg}/90 rounded-[25px] text-white font-medium`}
                            disabled={app.status === "sedang-ditinjau"}
                          >
                            {config.buttonLabel}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
