import { HeaderNav } from "@/components/nav/HeaderNav";
import { Logo } from "@/components/ui/Logo/Logo";

export const Header = () => {
  return (
    <div className="">
      <Logo />
      <div className="flex items-center rounded-lg px-16.5 py-5">
        <HeaderNav />
      </div>
    </div>
  );
};
