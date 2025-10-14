// Local storage management for program applications

export interface Application {
  id: string;
  programSlug: string;
  programName: string;
  programType: string;
  programTitle: string;
  programDegree: string;
  faculty: string;
  status: "sedang-ditinjau" | "program-selesai" | "permintaan-ditolak";
  appliedAt: string;
  motivationLetter: string;
}

const STORAGE_KEY = "program_applications";

export const saveApplication = (application: Omit<Application, "id" | "appliedAt" | "status">): Application => {
  const applications = getApplications();
  
  const newApplication: Application = {
    ...application,
    id: `APP-${Date.now()}`,
    appliedAt: new Date().toISOString(),
    status: "sedang-ditinjau",
  };
  
  applications.push(newApplication);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  
  return newApplication;
};

export const getApplications = (): Application[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    return JSON.parse(stored) as Application[];
  } catch {
    return [];
  }
};

export const getApplicationById = (id: string): Application | undefined => {
  const applications = getApplications();
  return applications.find(app => app.id === id);
};

export const updateApplicationStatus = (
  id: string, 
  status: Application["status"]
): void => {
  const applications = getApplications();
  const index = applications.findIndex(app => app.id === id);
  
  if (index !== -1) {
    applications[index].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }
};

export const deleteApplication = (id: string): void => {
  const applications = getApplications();
  const filtered = applications.filter(app => app.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
