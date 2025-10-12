import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1366px] flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};