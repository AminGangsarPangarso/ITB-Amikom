import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ElementHomepage } from "./screens/Home";
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
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
