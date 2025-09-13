import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import AppSidebarShopsGroup from "./AppSidebarShopsGroup/AppSidebarShopsGroup";
import AppSidebarHeader from "./AppSidebarHeader/AppSidebarHeader";
import AppSidebarPublicLinksGroup from "./AppSidebarPublicLinksGroup/AppSidebarPublicLinksGroup";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <AppSidebarPublicLinksGroup />
        <Separator />
        <AppSidebarShopsGroup />
      </SidebarContent>
    </Sidebar>
  );
}
