"use client";

import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { SidebarGroup, SidebarMenuItem } from "@/components/ui/sidebar";
import { useGetShopsQuery } from "@/redux/services/allShopsService";
import Link from "next/link";

const AppSidebarShopsGroup = () => {
  const { data, isLoading, isError } = useGetShopsQuery();
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
    <SidebarGroup>
      {data?.shops.map((shop) => (
        <SidebarMenuItem key={shop.id}>
          <Link href={`/shop/${shop.slug}`}>{shop.title}</Link>
        </SidebarMenuItem>
      ))}
    </SidebarGroup>
  );
};
export default AppSidebarShopsGroup;
