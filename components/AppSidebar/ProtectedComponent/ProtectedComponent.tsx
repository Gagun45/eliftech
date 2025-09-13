"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { LinkInterface } from "@/lib/types";
import {
  SidebarGroup,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const PROTECTED_LINKS: LinkInterface[] = [
  { href: "/createshop", label: "Add shop" },
  { href: "/createflower", label: "Add flower" },
  { href: "/createcoupon", label: "Add coupon" },
];

const ProtectedComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const accessKey = Cookies.get("accessKey");
    if (accessKey && accessKey === process.env.NEXT_PUBLIC_ACCESS_KEY) {
      setHasAccess(true);
    }
  }, [pathname, hasAccess]);
  const onLogout = () => {
    Cookies.remove("accessKey");
    setHasAccess(false);
    router.push("/");
  };

  return hasAccess ? (
    <SidebarGroup className="gap-4">
      {PROTECTED_LINKS.map((link) => (
        <SidebarMenuButton
          key={link.href}
          onClick={() => setOpenMobile(false)}
          className="text-2xl font-semibold py-8 hover:bg-blue-300"
          asChild
        >
          <Link href={link.href}>{link.label}</Link>
        </SidebarMenuButton>
      ))}
      <SidebarMenuButton
        onClick={() => {
          onLogout();
          setOpenMobile(false);
        }}
        className="text-2xl cursor-pointer font-semibold py-8 hover:bg-blue-300"
      >
        Logout
      </SidebarMenuButton>
    </SidebarGroup>
  ) : (
    <SidebarGroup className="gap-4">
      <SidebarMenuButton
        onClick={() => setOpenMobile(false)}
        className="text-2xl font-semibold py-8 hover:bg-blue-300"
        asChild
      >
        <Link href={"/protected"}>Get access</Link>
      </SidebarMenuButton>
    </SidebarGroup>
  );
};
export default ProtectedComponent;
