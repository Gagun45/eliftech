"use client";

import LoadingSpinner from "@/components/General/LoadingSpinner/LoadingSpinner";
import {
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useGetShopsQuery } from "@/redux/services/allShopsService";
import Link from "next/link";

const AppSidebarShopsGroup = () => {
  const { data, isLoading, isError } = useGetShopsQuery();
  const { setOpenMobile } = useSidebar();
  if (isLoading)
    return (
      <SidebarGroup>
        <SidebarMenuItem>
          <LoadingSpinner />
        </SidebarMenuItem>
      </SidebarGroup>
    );
  if (isError)
    return (
      <SidebarGroup>
        <SidebarMenuItem>Failed to fetch shops</SidebarMenuItem>
      </SidebarGroup>
    );
  return (
    <SidebarGroup className="gap-4">
      <SidebarMenuItem className="bg-blue-300 rounded-md text-2xl text-center py-4 font-semibold">
        Shops
      </SidebarMenuItem>
      {data?.shops.map((shop) => (
        <SidebarMenuButton
          key={shop.id}
          onClick={() => setOpenMobile(false)}
          className="text-2xl font-semibold py-8 hover:bg-blue-300"
          asChild
        >
          <Link href={`/shop/${shop.slug}`}>{shop.title}</Link>
        </SidebarMenuButton>
      ))}
    </SidebarGroup>
  );
};
export default AppSidebarShopsGroup;
