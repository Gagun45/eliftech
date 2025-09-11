"use client";

import { SidebarGroup, SidebarMenuItem } from "@/components/ui/sidebar";
import { useGetShopsQuery } from "@/redux/services/allShopsService";

const SidebarShopsGroup = () => {
  const { data, isLoading, isError } = useGetShopsQuery();
  if (isLoading)
    return (
      <SidebarGroup>
        <SidebarMenuItem>Loading...</SidebarMenuItem>
      </SidebarGroup>
    );
  if (isError)
    return (
      <SidebarGroup>
        <SidebarMenuItem>Failed to fetch shops</SidebarMenuItem>
      </SidebarGroup>
    );
  return (
    <SidebarGroup>
      {data?.shops.map((shop) => (
        <SidebarMenuItem key={shop.id}>{shop.title}</SidebarMenuItem>
      ))}
    </SidebarGroup>
  );
};
export default SidebarShopsGroup;
