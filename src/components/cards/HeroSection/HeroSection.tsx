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
    <div className="bg-bg-primary border-border-primary flex flex-col gap-10 rounded-2xl border-2 px-5.5 py-5.5 sm:gap-17.5 sm:px-10.5 sm:py-15">
      <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h2 className="text-text-secondary mb-3.5 text-base font-medium sm:mb-0 sm:text-2xl">
          {position}
        </h2>
        <Label icon={CircleIcon}>AVAILABLE FOR JOB</Label>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xs">
          <h1 className="text-text-primary mb-2.5 text-2xl font-semibold sm:mb-4 sm:text-4xl">
            {name}
          </h1>
          <p className="text-text-secondary text-normal mb-4 text-base sm:mb-7 sm:text-xl">
            {description}
          </p>
          <div className="flex items-center gap-2 sm:gap-3.5">
            <Button icon={PlusIcon} variant="primary">
              Hire me
            </Button>
            <Button icon={CopyIcon} variant="secondary">
              Copy Email
            </Button>
          </div>
        </div>
        <Avatar className="mb-7.5 sm:mb-0" />
      </div>
    </div>
  );
};
