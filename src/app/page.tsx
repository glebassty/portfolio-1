// page.tsx
"use client";

import { CardImage } from "@/components/cards/CardImage/CardImage";
import { HeroSection } from "@/components/cards/HeroSection/HeroSection";
import { WorkSection } from "@/components/cards/WorkSection/WorkSection";
import { BoxGradient } from "@/components/ui/BoxGradient/BoxGradient";
import { IconArrow } from "@/components/ui/IconArrow/IconArrow";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        position="Frontend Developer"
        name="Giovanni Prestoricсhini"
        description="Hello, I'm Giovanni, a passionate frontend developer with a хуй"
      />
      <div className="grid-cols-1 sm:grid-cols-2">
        <div>
          <WorkSection title="Work Experience" />
          <CardImage
            imageSrc="/img/product.png"
            imageAlt="iOS Mobile App"
            classNameImage="sm:w-[433px] sm:h-[620px] w-[239px] h-[342px] sm:mt-13.5 mt-6.5 overflow-hidden"
            title="iOS Mobile app"
            description="Product develop"
          >
            <IconArrow />
          </CardImage>
        </div>
        <BoxGradient>Product design</BoxGradient>
        <div className="grid-cols-2">
          <BoxGradient>User Experience</BoxGradient>
          <BoxGradient>NoCode develop</BoxGradient>
        </div>
        <CardImage
          imageSrc="/img/product.png"
          imageAlt="iOS Mobile App"
          classNameImage="sm:w-[433px] sm:h-[620px] w-[239px] h-[342px] sm:mt-13.5 mt-6.5 overflow-hidden"
          title="iOS Mobile app"
          description="Product develop"
        >
          <IconArrow />
        </CardImage>
        <CardImage
          imageSrc="/img/product.png"
          imageAlt="iOS Mobile App"
          classNameImage="sm:w-[433px] sm:h-[620px] w-[239px] h-[342px] sm:mt-13.5 mt-6.5 overflow-hidden"
          title="iOS Mobile app"
          description="Product develop"
        >
          <IconArrow />
        </CardImage>
      </div>
    </div>
  );
}
