import { ChevronRightIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Badge } from "../../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const programDetails: Record<string, any> = {
	"struktur-lepas-pantai": {
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
};

export const ProgramDetail = (): JSX.Element => {
	const { programSlug } = useParams();
	const detail = programDetails[programSlug ?? ""];

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
								<BreadcrumbLink href="#">Sarjana</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator>
								<ChevronRightIcon className="w-4 h-4" />
							</BreadcrumbSeparator>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">{detail.type}</BreadcrumbLink>
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

				{/* Main content */}
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Left content */}
					<div className="flex-1 flex flex-col gap-6">
						<div className="flex gap-2 mb-2">
							<Badge className="bg-[#ffefd4] text-[#e99400] rounded-lg">Sarjana</Badge>
							<Badge className="bg-[#e6f7ff] text-[#069dd8] rounded-lg">{detail.type}</Badge>
						</div>
						<div className="text-[#808080] text-sm mb-1">{detail.faculty}</div>
						<h1 className="text-3xl font-bold text-[#333] mb-2">{detail.title}</h1>
						<p className="text-[#333] text-base mb-2">{detail.description}</p>
						<div className="flex items-center gap-4 mb-2">
							<div className="text-[#808080] text-base">SKS Minimal <span className="font-bold text-[#069dd8]">{detail.minSKS}</span></div>
							<a href={detail.brochureUrl} className="text-[#069dd8] text-base flex items-center gap-2 underline">
								<span>Unduh Brosur</span>
							</a>
						</div>
						<Button className="h-10 w-[180px] bg-[#069dd8] hover:bg-[#069dd8]/90 rounded-[25px] text-white font-medium">Daftar Sekarang</Button>
						<div className="text-xs text-[#808080] mt-2">{detail.registrationNote}</div>
					</div>

					{/* Right card */}
					<div className="w-full lg:w-[340px]">
						<Card className="rounded-2xl shadow-[0px_2px_25px_#000e331a]">
							<CardContent className="flex flex-col gap-4 p-6">
								<div className="flex gap-2 mb-2">
									<Badge className="bg-[#ffefd4] text-[#e99400] rounded-lg">Sarjana</Badge>
									<Badge className="bg-[#e6f7ff] text-[#069dd8] rounded-lg">{detail.type}</Badge>
								</div>
								<div className="text-[#808080] text-sm mb-1">{detail.faculty}</div>
								<h2 className="text-lg font-bold text-[#333] mb-2">{detail.title}</h2>
								<div className="text-[#808080] text-base">SKS Minimal <span className="font-bold text-[#069dd8]">{detail.minSKS}</span></div>
								<a href={detail.brochureUrl} className="text-[#069dd8] text-base flex items-center gap-2 underline">
									<span>Unduh Brosur</span>
								</a>
								<Button className="h-10 w-full bg-[#069dd8] hover:bg-[#069dd8]/90 rounded-[25px] text-white font-medium">Daftar Sekarang</Button>
								<div className="text-xs text-[#808080] mt-2">{detail.registrationNote}</div>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Academic requirements */}
				<div className="mt-10">
					<h2 className="text-xl font-bold text-[#333] mb-4">Pendaftaran & Persyaratan Akademik</h2>
					<div className="text-[#333] text-base mb-4">Program {detail.type} {detail.title} memiliki persyaratan akademik sebagai syarat wajib untuk mengikuti program ini. Oleh karena itu, mahasiswa wajib memenuhi beberapa persyaratan di bawah ini:</div>
					<ul className="list-none pl-0 mb-4">
						{detail.requirements.map((req: any, idx: number) =>
							Array.isArray(req) ? (
								<ul key={idx} className="list-disc pl-6 mb-2">
									{req.map((sub: string, i: number) => (
										<li key={i} className="text-[#333] text-base mb-1">{sub}</li>
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

				{/* Program structure */}
				<div className="mt-10">
					<h2 className="text-xl font-bold text-[#333] mb-4">Struktur Program</h2>
					<div className="text-[#333] text-base mb-4">Total jumlah SKS yang ditawarkan untuk program ini adalah <span className="font-bold">{detail.totalSKS} SKS</span>, yang terdiri dari mata kuliah dari <span className="font-bold">semester 5 hingga jenjang S2</span>. Tersedia beragam mata kuliah yang dapat dipilih dan dapat disesuaikan dengan kebutuhan mahasiswa. Perlu diperhatikan bahwa beberapa mata kuliah memiliki prasyarat dari mata kuliah yang wajib harus diambil. Setelah menyelesaikan program, mahasiswa akan mendapatkan pengakuan khusus mengenai spesialisasi/minor pada transkrip akademik mereka.</div>
					<div className="overflow-x-auto">
						<table className="min-w-[600px] w-full border-collapse rounded-xl overflow-hidden shadow">
							<thead className="bg-[#e6f7ff]">
								<tr>
									<th className="py-2 px-4 text-left font-bold text-[#069dd8]">No</th>
									<th className="py-2 px-4 text-left font-bold text-[#069dd8]">Kode</th>
									<th className="py-2 px-4 text-left font-bold text-[#069dd8]">Mata Kuliah</th>
									<th className="py-2 px-4 text-left font-bold text-[#069dd8]">SKS</th>
								</tr>
							</thead>
							<tbody>
								{detail.courses.map((course: any) => (
									<tr key={course.code} className="border-b last:border-b-0">
										<td className="py-2 px-4">{course.no}</td>
										<td className="py-2 px-4">{course.code}</td>
										<td className="py-2 px-4">
											<span className="text-[#069dd8] underline cursor-pointer">{course.name}</span>
											{course.done && (
												<span className="ml-2 px-2 py-0.5 bg-[#e6f7ff] text-[#069dd8] rounded text-xs">Telah Diambil</span>
											)}
										</td>
										<td className="py-2 px-4">{course.sks}</td>
									</tr>
								))}
							</tbody>
							<tfoot>
								<tr className="bg-[#f5f5f5]">
									<td colSpan={3} className="py-2 px-4 text-right font-bold text-[#333]">Total SKS</td>
									<td className="py-2 px-4 font-bold text-[#069dd8]">{detail.totalSKS}</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>

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
										<Button className="h-10 w-full bg-[#069dd8] hover:bg-[#069dd8]/90 rounded-[25px] text-white font-medium">Daftar Sekarang</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</MainLayout>
	);
};
