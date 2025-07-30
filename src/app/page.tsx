// page.tsx
"use client";

import { Button } from "@/components/ui/Button/Button";
import { Label } from "@/components/ui/Label/Label";
import { PlusIcon } from "@radix-ui/react-icons";
import { CopyIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <Button icon={PlusIcon}>Hire me</Button>
      <Button
        className="bg-primary border-border-primary hover:bg-hover-primary text-text-secondary"
        dividerClassName="bg-border-primary"
        icon={CopyIcon}
        onClick={() => console.log("Clicked CopyIcon!")}
      >
        Copy Email
      </Button>
      <Label icon={PlusIcon}>Available for job</Label>
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
