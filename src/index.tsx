import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApplicationSuccess, ApplyProgram } from "./screens/ApplyProgram";
import { ElementHomepage } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { ProgramDetail } from "./screens/ProgramDetail/ProgramDetail";
import { ProgramList } from "./screens/ProgramList";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementHomepage />} />
        <Route path="/programs" element={<ProgramList />} />
        <Route path="/programs/:programName/:programType" element={<ProgramList />} />
        <Route path="/programs/:programName/:programType/:programSlug" element={<ProgramDetail />} />
        <Route path="/programs/:programName/:programType/:programSlug/apply" element={<ApplyProgram />} />
        <Route path="/programs/:programName/:programType/:programSlug/apply/success" element={<ApplicationSuccess />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
