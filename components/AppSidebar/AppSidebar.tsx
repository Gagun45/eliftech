import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import AppSidebarShopsGroup from "./AppSidebarShopsGroup/AppSidebarShopsGroup";
import AppSidebarHeader from "./AppSidebarHeader/AppSidebarHeader";
import AppSidebarPublicLinksGroup from "./AppSidebarPublicLinksGroup/AppSidebarPublicLinksGroup";
import { Separator } from "../ui/separator";
import ProtectedComponent from "./ProtectedComponent/ProtectedComponent";

export function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <AppSidebarPublicLinksGroup />
        <Separator className="!h-1 mb-4 bg-black"/>
        <ProtectedComponent />
        <Separator className="!h-1 mt-4 bg-black"/>
        <AppSidebarShopsGroup />
      </SidebarContent>
    </Sidebar>
  );
}
