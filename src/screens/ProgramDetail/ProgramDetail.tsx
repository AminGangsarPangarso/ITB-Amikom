import { ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Badge } from "../../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { getApplications, type Application } from "../../lib/applicationStorage";

const programDetails: Record<string, any> = {
	"struktur-lepas-pantai": {
		degree: "Sarjana",
		type: "Program Spesialisasi",
		faculty: "FTSL / Teknik Kelautan",
		title: "Struktur Lepas Pantai",
		description:
			"Program spesialisasi yang berfokus pada pengenalan bangunan lepas pantai, jenis/tipe, sistem bangunan lepas pantai, perencanaan terpadu struktur bangunan lepas pantai, hidrodinamika, korosi baja dan beton bertulang di lingkungan air laut, metode konstruksi, dan evaluasi kelaiakan bangunan lepas pantai.",
		minSKS: 14,
		brochureUrl: "#",
		requirements: [
			"Terdaftar sebagai mahasiswa Program Studi Teknik Kelautan",
			"Telah mengambil mata kuliah prasyarat yaitu :",
			[
				"Analisis Rekayasa Dasar I",
				"Analisis Rekayasa Dasar II",
				"Mekanika Gelombang Air",
				"Bahan Bangunan Laut",
				"Pengetahuan Fisik Laut",
			],
			"Telah lulus mata kuliah prasyarat dengan nilai minimal C",
			"Telah mendapatkan persetujuan dari dosen pembimbing akademik",
			"Menulis Motivation Letter dengan jumlah kata maksimal 1000 kata",
		],
		registrationNote: "Akses pendaftaran tersedia mulai mahasiswa semester 3",
		courses: [
			{ no: 1, code: "KL4120", name: "Anjungan Lepas Pantai", sks: 3 },
			{ no: 2, code: "KL3105", name: "Ekonomi Rekayasa", sks: 3 },
			{ no: 3, code: "KL1101", name: "Pipa Bawah Laut", sks: 3 },
			{ no: 4, code: "KL4220", name: "Struktur Baja", sks: 3 },
			{ no: 5, code: "KL3207", name: "Metode Elemen Hingga", sks: 3 },
			{ no: 6, code: "KL4221", name: "Struktur Terapung", sks: 2 },
		],
		totalSKS: 16,
		otherPrograms: [
			{ title: "Teknik Pantai dan Kawasan Pesisi", faculty: "FTSL", department: "Teknik Kelautan" },
			{ title: "Pelabuhan, Transportasi Laut dan Logistik", faculty: "FTSL", department: "Teknik Kelautan" },
			{ title: "Lingkungan Laut, Reklamasi dan Pengerukan", faculty: "FTSL", department: "Teknik Kelautan" },
			{ title: "Energi Kelautan", faculty: "FTSL", department: "Teknik Kelautan" },
		],
	},
	"fisika-bangunan": {
		degree: "Sarjana",
		type: "Program Minor",
		faculty: "FTI / Teknik Fisika",
		title: "Fisika Bangunan",
		description:
			"Program minor yang mempelajari fenomena fisika pada bangunan seperti termal, akustik, dan pencahayaan. Seluruh aspek ini perlu diperhitungkan untuk mencapai kenyamanan optimum bagi pengguna gedung yang dipengaruhi oleh tujuan penggunaan.",
		minSKS: 14,
		brochureUrl: "#",
		requirements: [
			"Terdaftar sebagai mahasiswa Program Studi Teknik Fisika atau program studi lain",
			"Bagi mahasiswa dari program studi lain, diwajibkan memiliki IPK ≥ 3.0 saat mendaftar",
			"Telah mengambil mata kuliah prasyarat yaitu :",
			[
				"Matematika IA",
				"Matematika IIA",
				"Fisika Dasar IA",
				"Fisika Dasar IIA",
				"Pengantar Rekayasa dan Desain",
			],
			"Telah lulus mata kuliah prasyarat dengan nilai minimal C",
			"Telah mendapatkan persetujuan dari dosen pembimbing akademik",
			"Menulis Motivation Letter dengan jumlah kata maksimal 1000 kata",
		],
		registrationNote: "Akses pendaftaran tersedia mulai mahasiswa semester 3",
		courses: [
			{ no: 1, code: "TF3030", name: "Laboratorium Fisika Bangunan", sks: 3, done: true },
			{ no: 2, code: "TF3202", name: "Fisika Bangunan", sks: 3 },
			{ no: 3, code: "TF4031", name: "Teknik Akustik", sks: 3 },
			{ no: 4, code: "TF4032", name: "Teknik Pencahayaan", sks: 3 },
			{ no: 5, code: "TF4033", name: "Rekayasa Lingkungan Thermal", sks: 3 },
		],
		totalSKS: 16,
		otherPrograms: [
			{ title: "Material Maju", faculty: "FTI", department: "Teknik Fisika" },
			{ title: "Industry 4.0", faculty: "FTI", department: "Teknik Fisika" },
			{ title: "Instrumentasi & Kontrol", faculty: "FTI", department: "Teknik Fisika" },
			{ title: "Perencanaan Wilayah & Kota", faculty: "SAPPK", department: "Perencanaan Wilayah & Kota" },
		],
	},
	"teknik-lingkungan": {
		degree: "Sarjana",
		type: "Program Double Major",
		faculty: "FTI / Teknik Lingkungan",
		title: "Teknik Lingkungan",
		description:
			"Bidang keilmuan yang mempelajari tindakan kuratif dan preventif untuk menyelamatkan lingkungan hidup yang terdiri dari air, tanah, udara, dan kesehatan lingkungan. Melalui pendekatan rekayasa teknik, efek negatif limbah dapat diminimalisir.",
		minSKS: 14,
		brochureUrl: "#",
		requirements: [
			"Terdaftar sebagai mahasiswa Program Studi Sarjana",
			"Telah menempuh semester 3",
			"Memiliki IPK ≥ 3.00",
			"Telah mendapatkan persetujuan dari dosen pembimbing akademik",
			"Menulis Motivation Letter dengan jumlah kata maksimal 100 kata",
		],
		registrationNote: "Akses pendaftaran tersedia mulai mahasiswa semester 3",
		semesters: [
			{
				title: "Semester 3",
				totalSKS: 12,
				courses: [
					{ no: 1, code: "BP5103", name: "Manajemen Sumberdaya Biologis", type: "MKWI", sks: 3, done: true },
					{ no: 2, code: "BP5103", name: "Ekonomi Ekologi", type: "MKVP", sks: 3 },
					{ no: 3, code: "BP5103", name: "Manajemen Bisnis Keanekaragaman Hayati", type: "MKOP", sks: 3 },
					{ no: 4, code: "KL4220", name: "Analisis Elemen dan Sistem Kepariwisataan", type: "MKPB", sks: 3 },
				],
			},
			{
				title: "Semester 4",
				totalSKS: 12,
				courses: [
					{ no: 1, code: "BP5201", name: "Etika Profesi", type: "MKWI", sks: 3, done: true },
					{ no: 2, code: "BP5201", name: "Ekonomi Ekologi", type: "MKVP", sks: 3 },
					{ no: 3, code: "BP5201", name: "Perancangan Proyek Akhir", type: "MKOP", sks: 3 },
					{ no: 4, code: "BP5201", name: "Pariwisata Berbasis Masyarakat", type: "MKPB", sks: 3 },
				],
			},
			{
				title: "Semester 5",
				totalSKS: 12,
				courses: [
					{ no: 1, code: "BP5103", name: "Manajemen Sumberdaya Biologis", type: "MKWI", sks: 3, done: true },
					{ no: 2, code: "BP5103", name: "Ekonomi Ekologi", type: "MKVP", sks: 3 },
					{ no: 3, code: "BP5103", name: "Manajemen Bisnis Keanekaragaman Hayati", type: "MKOP", sks: 3 },
					{ no: 4, code: "KL4220", name: "Analisis Elemen dan Sistem Kepariwisataan", type: "MKPB", sks: 3 },
				],
			},
			{
				title: "Semester 6",
				totalSKS: 12,
				courses: [
					{ no: 1, code: "BP5201", name: "Etika Profesi", type: "MKWI", sks: 3, done: true },
					{ no: 2, code: "BP5201", name: "Ekonomi Ekologi", type: "MKVP", sks: 3 },
					{ no: 3, code: "BP5201", name: "Perancangan Proyek Akhir", type: "MKOP", sks: 3 },
					{ no: 4, code: "BP5201", name: "Pariwisata Berbasis Masyarakat", type: "MKPB", sks: 3 },
				],
			},
		],
		otherPrograms: [
			{ title: "Teknik Lingkungan", faculty: "FTI", department: "" },
			{ title: "Teknik Elektro", faculty: "STEI", department: "" },
			{ title: "Teknik Material", faculty: "FTMD", department: "" },
			{ title: "Teknik Elektro", faculty: "STEI", department: "" },
		],
	},
	"pariwisata-hayati-berkelanjutan": {
		degree: "Magister",
		type: "Program Multidisiplin",
		faculty: "SAPPK/Perencanaan Kepariwisataan • SITH / Biomanajemen",
		title: "Pariwisata Hayati Berkelanjutan",
		description:
			"Program multidisiplin yang menggabungkan 2 program studi yakni Magister Biomanajemen SITH dan Magister Perencanaan Kepariwisataan SAPPK. Berfokus pada penguasaan keilmuan dan kemampuan penelitian serta penerapan di bidang pariwisata hayati.",
		minSKS: 14,
		brochureUrl: "#",
		requirements: [
			"Ijazah dan transkrip dari jenjang pendidikan sebelumnya",
			"Melampirkan surat pernyataan tujuan (statement of purpose) dan portofolio",
			"Telah mendapatkan kesediaan dari calon dosen pembimbing",
			"Telah lolos seleksi Ujian Potensi Dasar Akademik (UPDA Kampus XYZ)",
			"Telah mengikuti English Language Proficiency Test",
		],
		registrationNote: "Akses pendaftaran tersedia mulai mahasiswa semester 3",
		courses: [
			{ no: 1, code: "BP5103", name: "Laboratorium Fisika Bangunan", sks: 3 },
			{ no: 2, code: "BP5103", name: "Fisika Bangunan", sks: 2 },
			{ no: 3, code: "BP5103", name: "Manajemen Bisnis Keanekaragaman Hayati", sks: 3 },
			{ no: 4, code: "BP5103", name: "Analisis Elemen dan Sistem Kepariwisataan", sks: 3 },
			{ no: 5, code: "BP5201", name: "Etika Profesi", sks: 3 },
			{ no: 6, code: "BP5201", name: "Studi Kasus dalam Biomanajemen", sks: 3 },
			{ no: 7, code: "BP5201", name: "Perancangan Proyek Akhir", sks: 3 },
			{ no: 8, code: "BP5201", name: "Pariwisata Berbasis Masyarakat", sks: 3 },
			{ no: 9, code: "BP6902", name: "Proyek Akhir dan Seminar", sks: 3 },
			{ no: 10, code: "BP6114", name: "Rekayasa Sosial dalam Biomanajemen", sks: 3 },
			{ no: 11, code: "PK5106", name: "Ekowisata Berkelanjutan", sks: 3 },
			{ no: 12, code: "PK5106", name: "Metode Analisis Kepariwisataan", sks: 3 },
			{ no: 13, code: "PK5103", name: "Perencanaan Pengembangan Kepariwisataan", sks: 3 },
			{ no: 14, code: "BP6002", name: "Tesis dan Sidang Akhir", sks: 3 },
		],
		totalSKS: 16,
		otherPrograms: [
			{ title: "Teknologi Nano", faculty: "FTSL/Teknik Kelautan SAPPK/Perencanaan Kepariwisataan" },
			{ title: "Teknologi Kesehatan", faculty: "FTSL/Teknik Kelautan SAPPK/Perencanaan Kepariwisataan" },
			{ title: "Pendidikan Sains 4.0", faculty: "FTSL/Teknik Kelautan SAPPK/Perencanaan Kepariwisataan" },
			{ title: "Digital Technopreneurship", faculty: "FTSL/Teknik Kelautan SAPPK/Perencanaan Kepariwisataan" },
		],
	},
};

export const ProgramDetail = (): JSX.Element => {
	const { programSlug, programName, programType } = useParams();
	const navigate = useNavigate();
	const detail = programDetails[programSlug ?? ""];
	const [existingApplication, setExistingApplication] = useState<Application | null>(null);

	useEffect(() => {
		// Check if this program has been applied for
		const applications = getApplications();
		const found = applications.find(app => app.programSlug === programSlug);
		setExistingApplication(found || null);
	}, [programSlug]);

	const handleDaftar = () => {
		if (existingApplication) {
			// If already applied, go to profile
			navigate('/profile');
		} else {
			// If not applied, go to apply page
			navigate(`/programs/${programName}/${programType}/${programSlug}/apply`);
		}
	};

	const getButtonConfig = () => {
		if (!existingApplication) {
			return {
				label: "Daftar Sekarang",
				className: "bg-[#069dd8] hover:bg-[#069dd8]/90",
				disabled: false,
			};
		}

		switch (existingApplication.status) {
			case "sedang-ditinjau":
				return {
					label: "Sedang Ditinjau",
					className: "bg-gray-300 cursor-not-allowed",
					disabled: true,
				};
			case "program-selesai":
				return {
					label: "Program Selesai",
					className: "bg-[#069dd8] hover:bg-[#069dd8]/90",
					disabled: false,
				};
			case "permintaan-ditolak":
				return {
					label: "Permintaan Ditolak",
					className: "bg-[#ff4d4f] hover:bg-[#ff4d4f]/90",
					disabled: false,
				};
			default:
				return {
					label: "Daftar Sekarang",
					className: "bg-[#069dd8] hover:bg-[#069dd8]/90",
					disabled: false,
				};
		}
	};

	const buttonConfig = getButtonConfig();

	if (!detail) {
		return (
			<MainLayout>
				<div className="max-w-[1200px] mx-auto px-6 py-10">
					<h2 className="text-2xl font-bold">Program tidak ditemukan</h2>
				</div>
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<div className="mx-auto container w-full px-6 py-10">
				{/* Breadcrumb */}
				<div className="mb-6">
					<Breadcrumb>
						<BreadcrumbList className="gap-1">
							<BreadcrumbItem>
								<BreadcrumbLink className="text-[#069DD8]" href="#">Beranda</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<ChevronRightIcon className="w-4 h-4 text-[#069DD8]" />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink className="text-[#069DD8]" href="#">{(programName ?? "Sarjana").toString().replace(/\b\w/g, (c) => c.toUpperCase())}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<ChevronRightIcon className="w-4 h-4 text-[#069DD8]" />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink className="text-[#069DD8]" href="#">{
									({
										"spesialisasi": "Spesialisasi",
										"minor": "Minor",
										"double-major": "Double Major",
										"multidisiplin": "Multidisiplin",
									} as Record<string, string>)[(programType ?? "spesialisasi").toString()] ?? detail.type
								}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<ChevronRightIcon className="w-4 h-4" />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbPage>{detail.title}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="w-[80%]">
					<div className="flex gap-2 mb-2">
						<Badge className="bg-[#ffefd4] text-[#e99400] rounded-lg">{detail.degree}</Badge>
						<Badge className="bg-[#e6f7ff] text-[#069dd8] rounded-lg">{detail.type}</Badge>
					</div>
					<br />
					<div className="text-[#808080] text-sm mb-1">{detail.faculty}</div>
					<h1 className="text-3xl font-bold text-[#333] mb-2">{detail.title}</h1>
					<p className="text-[#333] text-base mb-2">{detail.description}</p>
					<div className="flex flex-col items-start gap-4 mb-2">
						<div className="text-[#808080] text-base">{"SKS Minimal  "} <span className="font-bold text-gray-800 text-3xl">{detail.minSKS}</span></div>
						<a href={detail.brochureUrl} className="text-[#069dd8] text-base flex items-center gap-2 underline">
							<FiDownload />
							<span>Unduh Brosur</span>
						</a>
					</div>
					<br />
					<div className="flex gap-4 items-center">
						<Button
							onClick={handleDaftar}
							className={`h-10 w-[180px] ${buttonConfig.className} rounded-[25px] text-white font-medium`}
							disabled={buttonConfig.disabled}
						>
							{buttonConfig.label}
						</Button>
						<div className="text-xs text-[#808080] mt-2 w-[20%]">{detail.registrationNote}</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className="flex gap-20 items-start justify-start">
					{/* Academic requirements */}
					<div className="mt-10 flex flex-col flex-1">
						<h2 className="text-xl font-bold text-[#333] mb-4">Pendaftaran & Persyaratan Akademik</h2>
						<div className="text-[#333] text-base mb-4">Program {detail.type} {detail.title} memiliki persyaratan akademik sebagai syarat wajib untuk mengikuti program ini. Oleh karena itu, mahasiswa wajib memenuhi beberapa persyaratan di bawah ini:</div>
						<ul className="list-none pl-0 mb-4">
							{detail.requirements.map((req: any, idx: number) =>
								Array.isArray(req) ? (
									<ul key={idx} className="list-disc pl-6 mb-2">
										{req.map((sub: string, i: number) => (
											<li key={i} className="text-[#333] text-base mb-1 ml-8">{sub}</li>
										))}
									</ul>
								) : (
									<li key={idx} className="flex items-start gap-2 text-[#333] text-base mb-1">
										<span className="text-[#069dd8]">&#10003;</span>
										<span>{req}</span>
									</li>
								)
							)}
						</ul>
					</div>

					<div className="w-full lg:w-[340px]">
						<Card className="rounded-2xl shadow-[0px_2px_25px_#000e331a]">
							<CardContent className="flex flex-col gap-4 p-6">
								<div className="flex gap-2 mb-2">
									<Badge className="bg-[#ffefd4] text-[#e99400] rounded-lg">{detail.degree}</Badge>
									<Badge className="bg-[#e6f7ff] text-[#069dd8] rounded-lg">{detail.type}</Badge>
								</div>
								<div className="text-[#808080] text-sm mb-1">{detail.faculty}</div>
								<h2 className="text-lg font-bold text-[#333] mb-2">{detail.title}</h2>
								<div className="text-[#808080] text-base">SKS Minimal <span className="font-bold text-[#069dd8]">{detail.minSKS}</span></div>
								<a href={detail.brochureUrl} className="text-[#069dd8] text-base flex items-center gap-2 underline">
									<span>Unduh Brosur</span>
								</a>
								<Button
									onClick={handleDaftar}
									className={`h-10 w-full ${buttonConfig.className} rounded-[25px] text-white font-medium`}
									disabled={buttonConfig.disabled}
								>
									{buttonConfig.label}
								</Button>
								<div className="text-xs text-[#808080] mt-2">{detail.registrationNote}</div>
							</CardContent>
						</Card>
					</div>
				</div>
				<br />
				<br />
				<br />
				{/* Program structure */}
				<div className="mt-10 w-[80%]">
					<h2 className="text-xl font-bold text-[#333] mb-4">Struktur Program</h2>
					{detail.semesters ? (
						<div className="overflow-x-auto">
							<table className="min-w-[600px] w-full border-collapse rounded-xl overflow-hidden shadow">
								<thead>
									<tr className="bg-[#0d5c92] text-white">
										<th className="py-2 px-4 text-left font-semibold">No</th>
										<th className="py-2 px-4 text-left font-semibold">Kode</th>
										<th className="py-2 px-4 text-left font-semibold">Mata Kuliah</th>
										<th className="py-2 px-4 text-left font-semibold">Jenis MK</th>
										<th className="py-2 px-4 text-left font-semibold">SKS</th>
									</tr>
								</thead>
								<tbody>
									{detail.semesters.map((sem: any, sIdx: number) => (
										<>
											<tr key={`sem-${sIdx}`} className="bg-[#77a9cf] text-white font-semibold">
												<td colSpan={5} className="py-2 px-4 rounded-none">{sem.title}</td>
											</tr>
											{sem.courses.map((course: any) => (
												<tr key={`${sem.title}-${course.code}`} className="border-b last:border-b-0">
													<td className="py-2 px-4">{course.no}</td>
													<td className="py-2 px-4">{course.code}</td>
													<td className="py-2 px-4">
														<span className="text-[#069dd8] underline cursor-pointer">{course.name}</span>
														{course.done && (
															<span className="px-2 py-0.5 bg-[#e6f7e6] text-[#27ae60] rounded text-xs">Telah Diambil</span>
														)}
													</td>
													<td className="py-2 px-4">{course.type}</td>
													<td className="py-2 px-4">{course.sks}</td>
												</tr>
											))}
											<tr className="bg-[#E5F0F7]">
												<td colSpan={4} className="py-2 px-4 text-right font-bold text-[#333]">Total SKS</td>
												<td className="py-2 px-4 font-bold text-[#333]">{sem.totalSKS}</td>
											</tr>
										</>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<>
							<div className="text-[#333] text-base mb-4">Total jumlah SKS yang ditawarkan untuk program ini adalah <span className="font-bold">{detail.totalSKS} SKS</span>. Tersedia beragam mata kuliah yang dapat dipilih dan dapat disesuaikan dengan kebutuhan mahasiswa.</div>
							<div className="overflow-x-auto">
								<table className="min-w-[600px] w-full border-collapse rounded-xl overflow-hidden shadow">
									<thead className="bg-[#0d5c92] text-white">
										<tr>
											<th className="py-2 px-4 text-left font-bold">No</th>
											<th className="py-2 px-4 text-left font-bold">Kode</th>
											<th className="py-2 px-4 text-left font-bold">Mata Kuliah</th>
											<th className="py-2 px-4 text-left font-bold">SKS</th>
										</tr>
									</thead>
									<tbody>
										{detail.courses?.map((course: any) => (
											<tr key={course.code} className="border-b last:border-b-0">
												<td className="py-2 px-4">{course.no}</td>
												<td className="py-2 px-4">{course.code}</td>
												<td className="py-2 px-4">
													<div className="flex justify-between items-center w-full">
														<span className="text-[#069dd8] underline cursor-pointer">{course.name}</span>
														{course.done && (
															<span className="px-2 py-0.5 bg-[#e6f7e6] text-[#27ae60] rounded text-xs">Telah Diambil</span>
														)}
													</div>
												</td>
												<td className="py-2 px-4">{course.sks}</td>
											</tr>
										))}
									</tbody>
									<tfoot>
										<tr className="bg-[#E5F0F7]">
											<td colSpan={3} className="py-2 px-4 text-right font-bold text-[#333]">Total SKS</td>
											<td className="py-2 px-4 font-bold text-[#333]">{detail.totalSKS}</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</>
					)}
				</div>
				<br />
				<br />
				<br />
				{/* Other programs */}
				<div className="mt-10">
					<h2 className="text-xl font-bold text-[#333] mb-4">Program Lainnya</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{detail.otherPrograms.map((prog: any, idx: number) => (
							<Card key={idx} className="rounded-[25px] shadow-[0px_2px_25px_#000e331a] border-0">
								<CardContent className="flex flex-col items-center gap-3 pt-4 pb-0 px-4 h-full">
									<div className="flex flex-col items-start gap-4 pt-0 pb-4 px-0 flex-1 w-full">
										<Badge className="h-6 bg-[#ffefd4] text-[#e99400] rounded-lg">Sarjana</Badge>
										<h4 className="w-full h-[43px] font-bold text-[#333333] text-base overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
											{prog.title}
										</h4>
										<div className="flex flex-col items-start gap-1 w-full">
											<span className="font-body-text-14px-regular text-[#333333]">
												{prog.faculty}
											</span>
											<span className="text-[#808080]">
												{prog.department}
											</span>
										</div>
										<Button
											onClick={handleDaftar}
											className={`h-10 w-full ${buttonConfig.className} rounded-[25px] text-white font-medium`}
											disabled={buttonConfig.disabled}
										>
											{buttonConfig.label}
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
		</MainLayout>
	);
};
