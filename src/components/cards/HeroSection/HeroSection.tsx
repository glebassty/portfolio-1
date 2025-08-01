import { Avatar } from "@/components/ui/Avatar/Avatar";
import { Button } from "@/components/ui/Button/Button";
import { Label } from "@/components/ui/Label/Label";
import { CircleIcon } from "@radix-ui/react-icons";
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
    <div>
      <div className="flex items-center justify-between">
        <h2>{position}</h2>
        <Label icon={CircleIcon}>fsd</Label>
      </div>
      <div>
        <div>
          <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
              <Button>fdsfs</Button>
              <Button>fdsfs</Button>
            </div>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
};
