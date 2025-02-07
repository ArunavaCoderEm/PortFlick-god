import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/my-component/app-sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="mt-20">
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger className="md:hidden block" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
    </div>
  );
}
