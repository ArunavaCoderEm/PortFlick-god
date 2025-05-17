import * as React from "react";
import {
  Search,
} from "lucide-react";


import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { data } from "@/data/data";
import { NavItem, NavSection } from "@/types/types";


export function AppSidebar():React.ReactNode {

  const { user } = useUser();

  return (
    <Sidebar>
      <SidebarHeader className="xl:mt-10 mt-24">

        <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <SidebarInput
                id="search"
                placeholder="Search dashboard..."
                className="pl-8 ring-purple-500 border-none focus:border-none focus:outline-none outline-none focus:ring focus:ring-purple-500"
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item: NavSection) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item && item?.items?.map((subItem: NavItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild isActive={subItem.isActive}>
                      <Link to={subItem.url}>{subItem.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter className="grid grid-cols-10 gap-2 p-4 border-t">
        <div className="col-span-2 flex flex-col items-center justify-center">
          <UserButton />
        </div>
        <div className="flex col-span-8 flex-col text-sm">
          <span className="font-medium">{user?.fullName || "Guest"}</span>
          <span className="text-neutral-400 tracking-tight">
            {user?.emailAddresses[0]?.emailAddress || "No email"}
          </span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
