import Link from "next/link";
import { SidebarTrigger } from "../ui/sidebar";
import HeaderCartState from "./HeaderCartState/HeaderCartState";
import ProtectedComponent from "./ProtectedComponent/ProtectedComponent";

const Header = () => {
  return (
    <header className="w-full gap-4 h-24 bg-blue-400 flex items-center px-12">
      <SidebarTrigger />
      <Link href={"/orders/history"}>History</Link>
      <ProtectedComponent />
      <HeaderCartState />
    </header>
  );
};
export default Header;
