import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProgramList } from "./screens/ProgramList";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ProgramList />
  </StrictMode>,
);
