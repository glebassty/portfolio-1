import { FooterNav } from "@/components/nav/FooterNav";
import { BoxGradient } from "@/components/ui/BoxGradient/BoxGradient";
import { Copyright } from "@/components/ui/Copyright/Copyright";
import { Label } from "@/components/ui/Label/Label";
import { IconJarLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <BoxGradient className="hidden items-center justify-between px-11.5 py-11 sm:flex">
      <Copyright>Portfolio 2024</Copyright>
      <FooterNav />
      <Label icon={IconJarLogoIcon}>AVAILABLE for JOB</Label>
    </BoxGradient>
  );
};
