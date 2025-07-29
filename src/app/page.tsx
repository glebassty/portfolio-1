// page.tsx

import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <Button icon={PlusIcon}>Hire me</Button>
      <h1 className="font-myFont text-3xl">Welcome to my portfolio!</h1>

      <p className="font-inter text-xl">
        This is a simple Next.js application styled with Tailwind CSS. It uses
        Radix UI for the button component and includes a custom icon from Radix
        s icon set.
      </p>
      <p className="">
        simple Next.js application styled with Tailwind CSS. It uses
      </p>
    </div>
  );
}
