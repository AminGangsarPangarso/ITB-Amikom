import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { MainLayout } from "../../components/layout";
import { Badge } from "../../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const ApplyProgram = (): JSX.Element => {
  const [motivation, setMotivation] = useState("");

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
                <BreadcrumbLink href="#">Sarjana</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Spesialisasi</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Daftar Program</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-2xl font-bold mb-6">Pendaftaran Program</h1>

        <div className="space-y-6">
          <Card className="rounded-lg">
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Program Spesialisasi</div>
                    <div className="text-lg font-semibold">Struktur Lepas Pantai</div>
                    <div className="text-sm text-gray-400">Fakultas Teknik Sipil &amp; Kelautan / Teknik Kelautan</div>
                  </div>
                  <Badge className="ml-4">Sarjana</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-lg">
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <div className="font-semibold">Ismail Mail</div>
                  <div className="text-sm text-gray-500">15522024</div>
                  <div className="text-sm text-gray-400">Fakultas Teknik Sipil &amp; Kelautan / Teknik Kelautan</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="font-semibold mb-2">Motivation Letter</h3>
            <textarea
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              placeholder="Tulis Motivation Letter di Kolom Ini"
              className="w-full min-h-[220px] border rounded-md p-4 text-sm resize-vertical"
            />
            <div className="text-right text-sm text-gray-400 mt-2">{motivation.length}/10000 Kata</div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#069dd8]">Daftar Program</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplyProgram;
