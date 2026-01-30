import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-6 transition-all duration-300">
        <TopNavbar />
        <div className="animate-fade-in">{children}</div>
      </main>
    </div>
  );
}
