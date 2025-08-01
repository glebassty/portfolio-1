import { Avatar } from "@/components/ui/Avatar/Avatar";
import { Button } from "@/components/ui/Button/Button";
import { Label } from "@/components/ui/Label/Label";
import { CircleIcon, CopyIcon, PlusIcon } from "@radix-ui/react-icons";
import React from "react";

type HeroSectionProps = {
  position: string;
  name: string;
  description: string;
};

export const HeroSection = ({
  position,
  name,
  description,
}: HeroSectionProps) => {
  return (
    <div className="flex flex-col gap-17.5">
      <div className="flex items-center justify-between">
        <h2 className="text-text-secondary test-base font-medium sm:text-2xl">
          {position}
        </h2>
        <Label icon={CircleIcon}>AVAILABLE FOR JOB</Label>
      </div>
      <div className="flex items-center justify-between">
        <div className="max-w-2xs">
          <h1 className="text-text-primary mb-4 text-2xl font-semibold sm:text-4xl">
            {name}
          </h1>
          <p className="text-text-secondary text-normal mb-7 text-base sm:text-xl">
            {description}
          </p>
          <div className="flex items-center gap-3.5">
            <Button icon={PlusIcon} variant="primary">
              Hire me
            </Button>
            <Button icon={CopyIcon} variant="secondary">
              Copy Email
            </Button>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};
