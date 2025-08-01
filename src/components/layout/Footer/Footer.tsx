import { FooterNav } from "@/components/nav/FooterNav";
import { BoxGradient } from "@/components/ui/BoxGradient/BoxGradient";
import { Copyright } from "@/components/ui/Copyright/Copyright";
import { Label } from "@/components/ui/Label/Label";
import { IconJarLogoIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <BoxGradient className="hidden items-center justify-between py-11 sm:flex">
      <Copyright />
      <FooterNav />
      <Label icon={IconJarLogoIcon}>AVAILABLE FOR JOB</Label>
    </BoxGradient>
  );
};
