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
        <h2>{position}</h2>
        <Label icon={CircleIcon}>AVAILABLE FOR JOB</Label>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div>
            <h1 className="mb-4">{name}</h1>
            <p className="mb-7">{description}</p>
            <div className="flex items-center gap-3.5">
              <Button icon={PlusIcon} variant="primary">
                Hire me
              </Button>
              <Button icon={CopyIcon} variant="secondary">
                Copy Email
              </Button>
            </div>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};
