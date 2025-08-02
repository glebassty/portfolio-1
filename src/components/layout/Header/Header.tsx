"use client";

import { HeaderNav } from "@/components/nav/HeaderNav";
import { Logo } from "@/components/ui/Logo/Logo";

export const Header = () => {
  return (
    <div className="flex max-h-[44px] sm:max-h-[64px]">
      <Logo />
      <div className="bg-bg-primary border-border-primary flex w-full items-center rounded-full border-2 px-4 py-2.5 sm:px-16.5 sm:py-5">
        <HeaderNav />
      </div>
    </div>
  );
};
