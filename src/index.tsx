import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyProgram from "./screens/ApplyProgram/ApplyProgram";
import { ProgramList } from "./screens/ProgramList";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProgramList />} />
        <Route path="/apply" element={<ApplyProgram />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
