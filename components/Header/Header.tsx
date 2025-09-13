import { SidebarTrigger } from "../ui/sidebar";
import HeaderCartState from "./HeaderCartState/HeaderCartState";

const Header = () => {
  return (
    <header className="w-full gap-4 h-24 bg-blue-400 flex items-center px-12">
      <SidebarTrigger />

      <HeaderCartState />
    </header>
  );
};
export default Header;
