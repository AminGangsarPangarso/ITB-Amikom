import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

const programDetails: Record<string, any> = {
  "sarjana/spesialisasi/struktur-lepas-pantai": {
    title: "Struktur Lepas Pantai",
    faculty: "FTSL / Teknik Kelautan",
    description: `Program spesialisasi yang berfokus pada pengenalan bangunan lepas pantai, jenis/tipe, sistem bangunan lepas pantai, perencanaan terpadu struktur bangunan lepas pantai, hidrodinamika, korosi baja dan beton bertulang di lingkungan air laut, metode konstruksi, dan evaluasi kelayakan bangunan lepas pantai.`,
    sks: 14,
  },
  "sarjana/minor/fisika-bangunan": {
    title: "Fisika Bangunan",
    faculty: "FTI / Teknik Fisika",
    description: `Program minor yang mempelajari fenomena fisik pada bangunan seperti termal, akustik, dan pencahayaan. Seluruh aspek ini perlu diperhitungkan untuk mencapai kenyamanan optimum bagi pengguna gedung yang dipengaruhi oleh tujuan penggunaan.`,
    sks: 14,
  },
};

export const ProgramDetail = (): JSX.Element => {
  const { programName, programType, programSlug } = useParams();
  const key = `${programName}/${programType}/${programSlug}`;
  const data = programDetails[key];

  if (!data) {
    return (
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-2xl font-bold">Program tidak ditemukan</h2>
        <p className="mt-2 text-gray-600">Data detail untuk program ini belum tersedia.</p>
        <Link to="/programs" className="inline-block mt-4">
          <Button>Kembali ke Program</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-16">
      <div className="mb-6">
        <nav className="text-sm text-[#069dd8] mb-4">
          <Link to="/">Beranda</Link>
          <span className="mx-2">/</span>
          <Link to={`/programs/${programName}`}>{programName}</Link>
          <span className="mx-2">/</span>
          <Link to={`/programs/${programName}/${programType}`}>{programType}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{data.title}</span>
        </nav>

        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{data.faculty}</div>
        <p className="text-gray-700 mb-6">{data.description}</p>

        <div className="inline-flex items-center gap-4">
          <Button className="bg-[#069dd8]">Daftar Sekarang</Button>
          <a className="text-sm text-[#069dd8]" href="#">Unduh Brosur</a>
        </div>
      </div>

      <section className="bg-white rounded-lg p-6 shadow">
        <h3 className="font-semibold mb-3">Pendaftaran & Persyaratan Akademik</h3>
        <p className="text-gray-600">Detail persyaratan belum tersedia pada dataset contoh ini.</p>
      </section>
    </div>
  );
};

export default ProgramDetail;
