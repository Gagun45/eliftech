'use client'

import {
  SidebarGroup,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import type { LinkInterface } from "@/lib/types";
import Link from "next/link";

const PUBLIC_LINKS: LinkInterface[] = [
  { href: "/orders/history", label: "History" },
  { href: "/coupons", label: "Coupons" },
];

const AppSidebarPublicLinksGroup = () => {
  const { setOpenMobile } = useSidebar();
  return (
    <SidebarGroup className="gap-4">
      {PUBLIC_LINKS.map((link) => (
        <SidebarMenuButton
          key={link.href}
          onClick={() => setOpenMobile(false)}
          className="text-2xl font-semibold py-8 hover:bg-blue-200"
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </SidebarMenuButton>
      ))}
    </SidebarGroup>
  );
};
export default AppSidebarPublicLinksGroup;
