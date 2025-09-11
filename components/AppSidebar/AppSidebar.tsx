import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import AppSidebarShopsGroup from "./AppSidebarShopsGroup/AppSidebarShopsGroup";
import AppSidebarHeader from "./AppSidebarHeader/AppSidebarHeader";

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <AppSidebarShopsGroup />
      </SidebarContent>
    </Sidebar>
  );
}
