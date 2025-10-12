import React, { createContext, useContext } from "react";

type ProgramName = "sarjana" | "pascasarjana" | "profesi" | string | null;

type ProgramType = "spesialisasi" | "minor" | "double-major" | "multidisiplin" | string | null;

interface ProgramContextValue {
  programName: ProgramName;
  programType: ProgramType;
}

const ProgramContext = createContext<ProgramContextValue | undefined>(undefined);

export const ProgramProvider = ({ programName, programType, children }: { programName: ProgramName; programType: ProgramType; children: React.ReactNode }) => {
  return <ProgramContext.Provider value={{ programName, programType }}>{children}</ProgramContext.Provider>;
};

export const useProgram = () => {
  const ctx = useContext(ProgramContext);
  if (!ctx) throw new Error("useProgram must be used within ProgramProvider");
  return ctx;
};
