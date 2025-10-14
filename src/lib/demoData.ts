// Demo data generator for testing profile page
import { saveApplication } from "./applicationStorage";

export const generateDemoApplications = () => {
  // Clear existing data
  localStorage.removeItem("program_applications");
  
  // Create demo applications with different statuses
  const demoApps = [
    {
      programSlug: "struktur-lepas-pantai",
      programName: "sarjana",
      programType: "spesialisasi",
      programTitle: "Struktur Lepas Pantai",
      programDegree: "Sarjana",
      faculty: "FTSL / Teknik Kelautan",
      motivationLetter: "Demo motivation letter for testing...",
    },
    {
      programSlug: "fisika-bangunan",
      programName: "sarjana",
      programType: "minor",
      programTitle: "Fisika Bangunan",
      programDegree: "Sarjana",
      faculty: "FTI / Teknik Fisika",
      motivationLetter: "Demo motivation letter for testing...",
    },
    {
      programSlug: "teknik-lingkungan",
      programName: "sarjana",
      programType: "double-major",
      programTitle: "Teknik Lingkungan",
      programDegree: "Sarjana",
      faculty: "FTI / Teknik Lingkungan",
      motivationLetter: "Demo motivation letter for testing...",
    },
  ];
  
  demoApps.forEach(app => saveApplication(app));
  
  // Manually update statuses for demo
  const apps = JSON.parse(localStorage.getItem("program_applications") || "[]");
  if (apps.length >= 2) {
    apps[1].status = "program-selesai";
  }
  if (apps.length >= 3) {
    apps[2].status = "permintaan-ditolak";
  }
  localStorage.setItem("program_applications", JSON.stringify(apps));
  
  console.log("Demo applications created!");
};
