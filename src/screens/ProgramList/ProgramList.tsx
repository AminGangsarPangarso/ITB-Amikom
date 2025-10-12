import { useParams } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { ProgramProvider } from "./programContext";
import { ProgramListContent } from "./ProgramListContent";

export const ProgramList = (): JSX.Element => {
  const { programName, programType } = useParams();

  return (
    <MainLayout>
      <ProgramProvider programName={programName ?? null} programType={programType ?? null}>
        <ProgramListContent />
      </ProgramProvider>
    </MainLayout>
  );
};
