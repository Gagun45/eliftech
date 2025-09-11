import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";

const Header = () => {
  return (
    <header className="w-full h-24 bg-blue-400 flex items-center px-12">
      <SidebarTrigger />
      <div className="flex items-center gap-2">
        <Link href={"/createshop"}>New shop</Link>
        <Link href={"/createflower"}>New flower</Link>
      </div>
    </header>
  );
};
export default Header;
