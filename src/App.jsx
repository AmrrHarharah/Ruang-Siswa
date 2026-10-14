import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/component/app-sidebar";
import { useLocation, useRoutes } from "react-router";
import { appRoutes } from "./router";

function App() {
  const routes = useRoutes(appRoutes);
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/admin");

  if (!isDashboard) {
    return (
      <TooltipProvider>
        <main className="min-h-screen">{routes}</main>
      </TooltipProvider>
    );
  }

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-14 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <h1 className="font-semibold">Dashboard Pembelajaran</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">{routes}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default App;
