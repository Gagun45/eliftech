import { SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";

const AppSidebarHeader = () => {
  return (
    <SidebarHeader className="h-24 bg-blue-400 flex items-center justify-center font-bold text-2xl">
      <Link
        className="size-full flex justify-center items-center"
        href={"/"}
      >
        Header
      </Link>
    </SidebarHeader>
  );
};
export default AppSidebarHeader;
