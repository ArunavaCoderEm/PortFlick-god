import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/my-component/app-sidebar";
import Dashboard from "@/pages/dashboard";

export default function DashboardLayout() {
  return (
    <div className="mt-20 w-full">
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="md:hidden ml-3 bg-purple-800 w-10 h-10 flex items-center justify-center p-2" />
            <Dashboard />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
