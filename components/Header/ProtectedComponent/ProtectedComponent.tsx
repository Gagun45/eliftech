"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";

const ProtectedComponent = () => {
  const [hasAccess, setHasAccess] = useState(false);
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
  // DEVELOMPENT MODE ONLY//
  return (
    <>
      <Link href={"/createshop"}>Add shop</Link>
      <Link href={"/createflower"}>Add flower</Link>
      <Link href={"/createcoupon"}>Add coupon</Link>
    </>
  );
  return hasAccess ? (
    <>
      <Link href={"/createshop"}>Add shop</Link>
      <Link href={"/createflower"}>Add flower</Link>
      <Link href={"/createcoupon"}>Add coupon</Link>
      <Button onClick={onLogout} className="ml-auto">
        Logout
      </Button>
    </>
  ) : (
    <Link
      href={"/protected"}
      className={buttonVariants({ variant: "default" })}
    >
      Get access
    </Link>
  );
};
export default ProtectedComponent;
