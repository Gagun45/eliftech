import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarShopsGroup from "./SidebarShopsGroup/SidebarShopsGroup";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarShopsGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
